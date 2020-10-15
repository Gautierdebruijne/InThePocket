import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Welkom bij 't Kompas!</h1>
        <p>Bekijk hier onze <Link to = "/menu">menu!</Link></p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage  