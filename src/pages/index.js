import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    {/* {console.log(data.pokedex.pokemons)} */}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="conteiner">
      <div className="row">
        {data.pokedex.pokemons.map(pokemon => {
          // console.log(pokemon.evolutions)

          return (
            <div
              key={pokemon.id}
              className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-4"
            >
              <div className="card " style={{ minHeight: "100%" }}>
                <img src={pokemon.image} alt="" />
                <div className="card-body text-center">
                  <h4>{pokemon.name}</h4>
                  <h6>XXX</h6>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    pokedex {
      pokemons(first: 200) {
        name
        id
        image
        evolutions {
          id
          name
        }
      }
    }
  }
`

export default IndexPage
