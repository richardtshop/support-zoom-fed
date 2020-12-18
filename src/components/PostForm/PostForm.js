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
    (event) => {
      event.preventDefault();
      // setPost('');
      // setTag('');
      
      // TO DO - update UI after posting
      addPost({
        variables: { content, tag },
        update: (cache, { data: { addPost } }) => {
          const micropostData = cache.readQuery({ query: POSTS_QUERY });
          const newData = [...micropostData.microposts, addPost];
          cache.writeQuery({ query: POSTS_QUERY, data: newData });
        },
      });
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
