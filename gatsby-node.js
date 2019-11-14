const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const tpl = path.resolve(`src/templates/paragraph.js`);

  const result = await graphql(`
    {
        paragraphPages: allNodeDigitalSignagePane {
          edges {
            node {
              fields {
                slug
              }
              drupal_internal__nid
            }
          }
        }
    }`)
    result.data.paragraphPages.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: tpl,
        context: {
          slug: node.fields.slug
        }
      });
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `node__digital_signage_pane`) {
    const slug = `panes/${node.drupal_internal__nid}/`;
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type allNodeDigitalSignagePane implements Node {
      field_display_title: String
      body: String!
    }
  `
  createTypes(typeDefs)
}
