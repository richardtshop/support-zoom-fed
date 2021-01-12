import React, { useState, useCallback } from 'react';
import { Card, Form, FormLayout, TextField, Button } from '@shopify/polaris';
import { useMutation } from '@apollo/client';
import { POSTS_QUERY, ADD_POST_MUTATION } from './graphql';

function PostForm() {
  const [success, updateSuccess] = useState('');
  const [addPost, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_POST_MUTATION);

  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = useCallback(
    // TO DO should this be async and await addPost?
    // Was like that previously, but doesn't require it
    // Yes, prevents uncuaght error if form submitted with no content.
    // TO DO, don't mutate with no content
    async (_event) => {
      // POST mutation and update UI
      try {
        const _micropost = await addPost({
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
        // TO DO update function could be moved to useMutation as object argument after ADD_POST_MUTATION
        // micropost variable will return update values.
        // TO DO update Rails to include errors that can be accessed on this object
        // console.log(micropost);
        updateSuccess('Success');
      } catch (err) {
        // TO DO handle failure error;
        // console.log(err);
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
      {(!mutationLoading && !mutationError) && success}
    </Card>
  );
}

export default PostForm;
