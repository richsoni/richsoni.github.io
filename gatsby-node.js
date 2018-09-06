const path = require('path');
const buildExtraMarkdownFields = require('./lib/MarkdownFields');
const existsSync = require(`fs-exists-sync`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if(node.internal.type === 'MarkdownRemark' || node.internal.type ==='LocationsYaml'){
    extraFields = buildExtraMarkdownFields({ node, getNode})
    Object.keys(extraFields).map((k) => {
      const value = extraFields[k];
      createNodeField({
        node,
        name: k,
        value: value,
      });
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const {createPage, createRedirect } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                url
                relativeDirectory
                basename
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const type = node.fields.relativeDirectory;
        const url = node.fields.url;
        const template = path.resolve(`./src/templates/${type}.js`);
        if(existsSync(template))
        {
          createPage({
            path: url,
            component: template,
            context: {
              url
            }
          })
          createRedirect({
            fromPath: url.replace(/\/$/, '')+'.html',
            toPath: url, isPermanent: true,
            redirectInBrowser: true,
          });
          createRedirect({
            fromPath: url.replace(/\/$/, ''),
            toPath: url, isPermanent: true
          });
        }
      });
      resolve();
    })
  });
}
