import React from 'react';
import {Layout, Page} from '@shopify/polaris';
import {gql, useQuery} from '@apollo/client';
import {useParams} from 'react-router-dom';

import {Post} from '../../components';

const POST_QUERY = gql`
  query Micropost($id: ID!) {
    micropost(id: $id) {
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

function Polaris() {
  const params = useParams();
  // Load default first post if no params
  const id = params.id === undefined ? 1 : params.id;

  const {loading, error, data} = useQuery(POST_QUERY, {
    variables: {id},
  });
  if (loading) { return <h3>Loading...</h3>; }
  if (error) {
    // TO DO load not found for post ID that doesn't exist
    // console.log(error);
    return <h3>error...</h3>;
  }

  return (
    <Page fullWidth title="Polaris">
      <Layout>
        <Layout.Section>
          <Post post={data.micropost} />
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Polaris;
