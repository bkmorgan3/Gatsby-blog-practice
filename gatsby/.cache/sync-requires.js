const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/brad/code/blog/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/brad/code/blog/gatsby/src/pages/404.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("/Users/brad/code/blog/gatsby/src/pages/blogs.js"))),
  "component---src-pages-dogs-js": hot(preferDefault(require("/Users/brad/code/blog/gatsby/src/pages/dogs.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/brad/code/blog/gatsby/src/pages/index.js")))
}

