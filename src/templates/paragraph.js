//paragraph.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import admissionStyles from "../components/admissionparagraph.module.css"
import Img from "gatsby-image"

import { getParagraph } from "../paragraphHelpers"

const PageTemplate = ({ data }) => {
  const paragraphs = data.page.relationships.paragraphs.map(getParagraph);

  return (
    <Layout>

      <div className={admissionStyles.wrapper}>
        <h1>{data.page.field_display_title}</h1>

        <div className={admissionStyles.prices}>
          {paragraphs}
        </div>
      </div>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
    query($slug: String!) {
        page: nodeDigitalSignagePane(fields: { slug: { eq: $slug } }) {
            id
            field_display_title
            relationships {
              paragraphs: field_admission {
                  type: __typename
                  ...ParagraphAdmissionType
                  ...ParagraphImage
                  ...ParagraphDescription
              }
           }
        }
     }
`;
