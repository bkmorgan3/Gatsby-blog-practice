import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  grid-auto-rows: auto auto 500px;
`;

function SingleDog({ dog }) {
  return (
    <>
      <Img fluid={dog.image.asset.fluid} alt="dog" />
    </>
  );
}

export default function DogsList({ dogs }) {
  return (
    <ImageGrid>
      {dogs.map((dog) => (
        <SingleDog key={dog.id} dog={dog} />
      ))}
    </ImageGrid>
  );
}
