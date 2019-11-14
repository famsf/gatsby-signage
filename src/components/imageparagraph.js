import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import imageStyles from "./imageparagraph.module.css"

export const imageparagraph = ({ node }) => (
  <figure className={imageStyles.full__image}>
    <Img fixed={node.relationships.image.localFile.childImageSharp.fixed} />
  </figure>
);

export const query = graphql`
  fragment ParagraphImage on paragraph__signage_image {
    relationships {
      image: field_sign_image {
        id
        localFile {
          childImageSharp {
            fixed(width: 1920, height: 1080) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
// Build in nullification -- Netlify didn't like it when there was NO content for this component.
