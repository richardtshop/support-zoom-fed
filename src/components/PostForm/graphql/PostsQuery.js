import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
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