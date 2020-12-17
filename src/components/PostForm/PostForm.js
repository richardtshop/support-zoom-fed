import React, { useState, useCallback } from 'react';
import { Card, Form, FormLayout, TextField, Button } from '@shopify/polaris';

function PostForm() {
  const [post, setPost] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log('Posted');
    setPost('');
    setTag('');
  }, []);

  const handlePostChange = useCallback((value) => setPost(value), []);
  const handleTagChange = useCallback((value) => setTag(value), []);

  return (
    <Card sectioned>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={post}
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
    </Card>
  );
}

export default PostForm;
