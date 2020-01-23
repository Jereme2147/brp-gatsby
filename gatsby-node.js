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
