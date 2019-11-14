import React from "react"
import { graphql } from "gatsby"
import imageStyles from "./descriptionparagraph.module.css"

export const descriptionparagraph = ({ node }) => (
  <div dangerouslySetInnerHTML={{ __html: node.text.processed }} />
);

export const query = graphql`
  fragment ParagraphDescription on paragraph__description {
    text: field_description {
      format
      processed
      value
    }
  }
`;
