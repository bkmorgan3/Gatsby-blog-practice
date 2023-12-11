import path from 'path';

async function turnBlogsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const blogTemplate = path.resolve('./src/templates/Blog.js');
  // 2. Query all blogs
  const { data } = await graphql(`
    query {
      blogs: allSanityBlog {
        nodes {
          title
          content
          slug {
            current
          }
        }
      }
    }
  `);

  // 3. loop over each blog and create a page for it
  data.blogs.nodes.forEach((blog) => {
    actions.createPage({
      path: `blog/${blog.slug.current}`,
      component: blogTemplate,
      context: {
        slug: blog.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // create pages dynamically
  // blogs.
  await turnBlogsIntoPages(params);
}
