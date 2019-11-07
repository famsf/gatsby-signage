import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      paragraphPages: allNodeDigitalSignagePane {
        nodes {
          title
          fields {
            slug
          }
        }
      }
    }
 `);
 return (
   <Layout>
     <ul>
       {data.paragraphPages.nodes.map(node => (
         <li>
           <Link to={node.fields.slug}>{node.title}</Link>
         </li>
       ))}
     </ul>
    </Layout>
  );
};

export default IndexPage
