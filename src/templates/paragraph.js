//paragraph.js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import admissionStyles from "../components/admissionparagraph.module.css";

import { getParagraph } from "../paragraphHelpers";

const PageTemplate = ({ data }) => {
  const paragraphs = data.page.relationships.paragraphs.map(getParagraph);

  return (
    <Layout>
      <div className={admissionStyles.wrapper}>
        <h1>{data.page.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.page.body.processed }} />
        <div>
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
            body {
              processed
            }
            relationships {
                paragraphs: field_admission {
                  type: __typename
                  ...ParagraphAdmissionType
               }
            }
            title
        }
    }
`;
