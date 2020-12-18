import React from 'react';
import { Layout, Page } from '@shopify/polaris';
import { Post } from '../../components';

import { Query, useQuery } from 'react-apollo';

import { useParams } from 'react-router-dom';

import { gql } from 'apollo-boost';

// import IncidentsQuery from './graphql/IncidentsQuery.graphql';

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
  const id = params.id === undefined ? 1 : params.id;

  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: { id },
  });
  if (loading) return <h3>Loading...</h3>;
  if (error) {
    console.log(error);
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
