/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pokemonTemplate = path.resolve(`./src/templates/pokemon.js`)

  return graphql(`
    query {
      pokedex {
        pokemons(first: 200) {
          name
          id
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.pokedex.pokemons.forEach(pokemon => {
      createPage({
        path: `/pokemon/${pokemon.name}`,
        component: pokemonTemplate,
        context: {
          name: pokemon.name,
        },
      })
    })

    // // Create blog post pages.
    // result.data.allMarkdownRemark.edges.forEach(edge => {
    //   createPage({
    //     // Path for this page — required
    //     path: `${edge.node.fields.slug}`,
    //     component: blogPostTemplate,
    //     context: {
    //       // Add optional context data to be inserted
    //       // as props into the page component..
    //       //
    //       // The context data can also be used as
    //       // arguments to the page GraphQL query.
    //       //
    //       // The page "path" is always available as a GraphQL
    //       // argument.
    //     },
    //   })
    // })
  })
}
