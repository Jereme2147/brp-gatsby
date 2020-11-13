//SINGLE BLOG ON LANDING PAGE!!!!!!!!
import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import style from "./getBlog.module.scss"

const Bold = ({ children }) => <span className={style.boldText}>{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>
// const Picture = ({ children }) => <div>{children}</div>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file['en-US'].contentType
      const mimeGroup = mimeType.split('/')[0]

      switch (mimeGroup) {
        case 'image':
          return <img
            title={ title ? title['en-US'] : null}
            alt={description ?  description['en-US'] : null}
            src={file['en-US'].url}
            className={style.imbedImage}
          />
        case 'application':
          return <a
            alt={description ?  description['en-US'] : null}
            href={file['en-US'].url}
            >{ title ? title['en-US'] : file['en-US'].details.fileName }
          </a>
        default:
          return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      }}
         },
}

const GetBlog = () => {
const data = useStaticQuery(graphql`
  query {
    allContentfulBlog(limit: 1, sort: { order: DESC, fields: date }) {
      nodes {
        id
        content {
          json
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
      <div className={style.inner}>
        {documentToReactComponents(
          data.allContentfulBlog.nodes[0].childContentfulBlogContentRichTextNode.json, options
        )}
      </div>
    )
    
}

export default GetBlog
