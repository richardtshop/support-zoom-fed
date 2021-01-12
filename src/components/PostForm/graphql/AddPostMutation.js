import { gql } from '@apollo/client';

export const ADD_POST_MUTATION = gql`
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