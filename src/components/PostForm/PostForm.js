import React, { useState, useCallback } from 'react';
import { Card, Form, FormLayout, TextField, Button } from '@shopify/polaris';
import { useMutation } from '@apollo/client';

import gql from 'graphql-tag';

const POSTS_QUERY = gql`
  {
    microposts {
      id
      content
      tag
      createdAt
      user {
        name
        email
      }
    }
  }
`;

const ADD_POST = gql`
  mutation CreatePost($content: String!, $tag: String) {
    createMicropost(input: { micropostRequest: { content: $content, tag: $tag, userId: 1 } }) {
      micropost {
        id
        content
        tag
        createdAt
        user {
          name
        }
      }
    }
  }
`;

function PostForm() {
  const [addPost, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_POST);

  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      // POST mutation and update UI
      try {
        const micropost = await addPost({
          variables: { content, tag },
          update(cache, { data: { addPost } }) {
            cache.modify({
              fields: {
                microposts(exisitingMicroposts = []) {
                  const newMicropostRef = cache.writeQuery({
                    data: addPost,
                    query: POSTS_QUERY,
                  });
                  return [...exisitingMicroposts, newMicropostRef];
                },
              },
            });
          },
        });
        
        // micropost variable will return update values.
        // TO DO update Rails to include errors that can be accessed on this object
        console.log(micropost);
      } catch (err) {
        // TO DO handle failur error;
        console.log(err);
      }

      setContent('');
      setTag('');
    },
    [content, tag, addPost],
  );

  const handlePostChange = useCallback((value) => setContent(value), []);
  const handleTagChange = useCallback((value) => setTag(value), []);

  return (
    <Card sectioned>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={content}
            onChange={handlePostChange}
            label="Post"
            type="text"
            placeholder="Write new post..."
            multiline={4}
          />
          <TextField
            value={tag}
            onChange={handleTagChange}
            label="Tag"
            type="text"
            placeholder="Enter post topic tag"
          />

          <Button submit>Submit</Button>
        </FormLayout>
      </Form>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </Card>
  );
}

export default PostForm;
