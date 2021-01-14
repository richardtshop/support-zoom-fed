import React from 'react';
import {useParams} from 'react-router-dom';

function User() {
  const {id} = useParams();

  return (
    <>
      <h2>User</h2>
      <p>This is the page for user {id}</p>
    </>
  );
}

export default User;
