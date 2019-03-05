import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  const pokemon = data.pokedex.pokemon
  console.log(pokemon)
  console.log(data.pokedex.pokemon)

  return (
    <Layout>
      <SEO title="XXX" />
      <article className="container">
        <div className="row">
          <div className="col-8 col-sm-8 col-md-6 col-lg-4 mx-auto my-4">
            <div className="card">
              <img src={pokemon.image} alt={pokemon.name} />
              <h1>{pokemon.name}</h1>
              <span>Types: {pokemon.types}</span>
              <span>Types: {pokemon.types}</span>
            </div>
          </div>
        </div>
      </article>
      {/* <div className="conteiner">
      <div className="row">
        {data.pokedex.pokemons.map(pokemon => {
          return (
            <div
              key={pokemon.id}
              className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-4"
            >
              <div className="card " style={{ minHeight: "100%" }}>
                <img src={pokemon.image} alt="" />
                <div className="card-body text-center">
                  <h4>{pokemon.name}</h4>
                  <span>
                    {pokemon.evolutions !== null
                      ? pokemon.evolutions.map(evolutions => {
                          return (
                            <span key={evolutions.id}>
                              Evolutions: {evolutions.name}
                            </span>
                          )
                        })
                      : null}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div> */}
    </Layout>
  )
}

export const query = graphql`
  query($name: String!) {
    pokedex {
      pokemon(name: $name) {
        name
        id
        image
        types
      }
    }
  }
`
