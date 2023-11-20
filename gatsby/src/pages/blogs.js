import { graphql } from 'gatsby';
import React from 'react';
import BlogList from '../components/BlogList';

export default function BlogsPage({ data }) {
  const blogs = data.blogs.nodes;
  return <BlogList blogs={blogs} />;
}

export const query = graphql`
  query {
    blogs: allSanityBlog {
      nodes {
        title
        id
        content
        slug {
          current
        }
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
