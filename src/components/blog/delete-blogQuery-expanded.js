//honstly don't remember how this works. But it's the blog page display when a blog is clicked on
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import Img from "gatsby-image"
import variables from "../variables.js"

const Bold = ({ children }) => <span className="boldText">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { title, description, file } = node.data.target.fields
      const mimeType = file["en-US"].contentType
      const mimeGroup = mimeType.split("/")[0]

      switch (mimeGroup) {
        case "image":
          return (
            <img
              title={title ? title["en-US"] : null}
              alt={description ? description["en-US"] : null}
              src={file["en-US"].url}
              // className={style.imbedImage}
            />
          )
        case "application":
          return (
            <a
              alt={description ? description["en-US"] : null}
              href={file["en-US"].url}
            >
              {title ? title["en-US"] : file["en-US"].details.fileName}
            </a>
          )
        default:
          return (
            <span style={{ backgroundColor: "red", color: "white" }}>
              {" "}
              {mimeType} embedded asset{" "}
            </span>
          )
      }
    },
  },
}

const BlogQueryExpanded = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { order: DESC, fields: date }, limit: 10) {
        nodes {
          content {
            json
          }
          date
          title
          id
          blogImage {
            fluid(maxWidth: 350, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          childContentfulBlogContentRichTextNode {
            id
            content
            json
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allContentfulBlog.nodes.map(item => {
        if (id === item.id && item.blogImage) {
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={item.id}
            >
              <h2>
                {item.title}
                {/* <span style={{ fontWeight: "400" }}>
                  {" "}
                  - Click to read more..
                </span> */}
              </h2>
              <h3>{item.date}</h3>
              <div style={{ marginTop: "10px" }}>
                {/* {documentToReactComponents(item.content.json)} */}
                {documentToReactComponents(
                  data.childContentfulBlogContentRichTextNode.json,
                  options
                )}
                <h1>are we here? or here</h1>
              </div>
              <Img
                key={item.id}
                fluid={item.blogImage[0].fluid}
                alt={item.alt}
                style={{
                  margin: "20px 0",
                  boxShadow: `3px 3px 3px ${variables.black}`,
                  width: "350px",
                }}
              />
            </div>
          )
        } else if (id === item.id) {
          // so it doesn't break if there's no image.
          return (
            <div key={item.id}>
              <h2>
                {item.title}
                <span style={{ fontWeight: "400" }}>
                  {" "}
                  - Click to read more..
                </span>
              </h2>
              <h3>{item.date}</h3>
              <div style={{ marginTop: "10px" }}>
                {/* {documentToReactComponents(item.content.json)} */}
                {documentToReactComponents(
                  data.childContentfulBlogContentRichTextNode.json,
                  options
                )}<h1>are we here?</h1>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default BlogQueryExpanded
