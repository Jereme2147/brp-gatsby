const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlog.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}






// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   // Ensures we are processing only markdown files
//   if (node.internal.type === "allImageSharp") {
//     // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
//     const relativeFilePath = createFilePath({
//       node,
//       getNode,
//       basePath: "src/graphics",
//     })

//     // Creates new query'able field with name of 'slug'
//     createNodeField({
//       node,
//       name: "slug",
//       value: `/brp${relativeFilePath}`,
//     })
//   }
// }

//***** JUST HOLD FOR NOW */
// const path = require('path')

// module.exports.creatPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const blogTemplate = path.resolve('')
// }