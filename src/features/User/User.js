import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();

  return <div>This is the page for user {id}</div>;
}

export default User;
