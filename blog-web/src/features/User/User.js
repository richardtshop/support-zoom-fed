import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();

  return (
    <div>
      <h2>User</h2>
      <p>This is the page for user {id}</p>
    </div>
  );
}

export default User;
