import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"


const HomePage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Welkom bij NXT.UP!</h1>
      <p>Bekijk hier onze <Link to = "/menu">menu!</Link></p>
    </Layout>
  )
}

export default HomePage  