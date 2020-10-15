import React from "react"
import {graphql, useStaticQuery} from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)

    return(
        <footer>
            <p>Created by {data.site.siteMetadata.author}, © 2020<br></br>
            Have a look at my <a href="https://gautierdebr.be">website</a>!</p>
        </footer>
    )
}

export default Footer