import {gql} from '@apollo/client';

export const ADD_POST_MUTATION = gql`
  mutation CreatePost($content: String!, $tag: String, $userId: ID!) {
    createMicropost(input: { micropostRequest: { content: $content, tag: $tag, userId: $userId } }) {
      micropost {
        id
        content
        tag
        # createdAt
        # user {
          # name
        # }
      }
    }
  }
`;
