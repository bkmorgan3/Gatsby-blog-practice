import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BlogGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const BlogStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid;) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function SingleBlog({ blog }) {
  return (
    <BlogStyles>
      <Link to={`/blogs/${blog.slug.current}`}>
        <h2>
          <span className="mark">{blog.title} </span>
        </h2>
      </Link>
      <p>{blog.content}</p>
      <Img fluid={blog.image.asset.fluid} alt={blog.title} />
    </BlogStyles>
  );
}

export default function BlogList({ blogs }) {
  return (
    <BlogGridStyles>
      {blogs.map((blog) => (
        <SingleBlog key={blog.id} blog={blog} />
      ))}
    </BlogGridStyles>
  );
}
