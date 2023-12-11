import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BlogGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SingleBlogPage({ data: { blog } }) {
  return (
    <BlogGrid>
      <Img fluid={blog.image.asset.fluid} />
      <div>
        <h2 className="mark">{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    </BlogGrid>
  );
}

export const query = graphql`
  query($slug: String!) {
    blog: sanityBlog(slug: { current: { eq: $slug } }) {
      title
      content
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
