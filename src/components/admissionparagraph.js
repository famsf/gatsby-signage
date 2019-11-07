import React from "react";
import admissionStyles from "./admissionparagraph.module.css";
import { graphql } from "gatsby";

export const admissionparagraph = ({ node }) => (
  <div>
    <div className={admissionStyles.admission__left}>{node.field_admission_type}</div>
    <div className={admissionStyles.admission__right}>{node.field_cost}</div>
  </div>
);

export const query = graphql`
  fragment ParagraphAdmissionType on paragraph__admission_type {
    field_admission_type
    field_cost
  }
`;
