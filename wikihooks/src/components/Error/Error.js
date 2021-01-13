import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  
  return <h3 className="search-error">{error}</h3>;
}

export default Error;
