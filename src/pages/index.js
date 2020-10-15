import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <div>
        <h1>Welkom bij 't Kompas!</h1>
        <p>Bekijk hier onze <Link to = "/menu">menu!</Link></p>
      </div>
    </Layout>
  )
}

export default HomePage  