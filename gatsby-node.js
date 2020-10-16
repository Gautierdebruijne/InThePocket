const { create } = require('domain')
const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
   const { createPage } = actions
   const menuTemplate = path.resolve('./src/templates/menu.js')
   const res = await graphql(`
      query{
         allContentfulMenuItem{
            edges{
               node{
                  slug
               }
            }
         }
      }
   `)

   res.data.allContentfulMenuItem.edges.forEach((edge) => {
      createPage({
         component: menuTemplate,
         path: `/menu/${edge.node.slug}`,
         context: {
            slug: edge.node.slug
         }
      })
   })

}