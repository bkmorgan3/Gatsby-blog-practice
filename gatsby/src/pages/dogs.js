import { graphql } from 'gatsby';
import React from 'react';
import DogsList from '../components/DogsList';

export default function DogsPage({ data }) {
  const dogs = data.dogs.nodes;
  return <DogsList dogs={dogs} />;
}

export const query = graphql`
  query {
    dogs: allSanityDog {
      nodes {
        id
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
