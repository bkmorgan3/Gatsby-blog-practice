import { useEffect, useState } from 'react';

function useLatestData() {
  // 1. Dogs
  const [dogs, setDogs] = useState();
  // 2. Blogs
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch([
      process.env.GATSBY_GRAPHQL_ENDPOINT,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      },
    ]);
  }, []);
}
