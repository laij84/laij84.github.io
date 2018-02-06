const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) =>{
        graphql(
            `
                {
                    allContentfulPost(filter: {}) {
                        edges {
                            node {
                                slug
                            }
                        }
                    }
                }
            `
        ).then(result => {
            if (result.errors) {
                reject(result.errors);
            }

            const postTemplate = path.resolve(`./src/templates/post.js`);

            result.data.allContentfulPost.edges.forEach((edge) => {
                createPage({
                  // Each page is required to have a `path` as well
                  // as a template component. The `context` is
                  // optional but is often necessary so the template
                  // can query data specific to each page.
                  path: `/blog/${edge.node.slug}/`,
                  component: postTemplate,
                  context: {
                    id: edge.node.slug,
                  },
                })
            })
            resolve();
        })
    });
}