import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
    query($slug: String!){
        contentfulMenuItem(slug: {
            eq: $slug
        }) {
            title
            date(formatString: "MMMM Do, YYYY")
            body{
                json
            }
        }
    }
`
const Menu = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }

    return (
        <Layout>
            <h1>{props.data.contentfulMenuItem.title}</h1>
            <p>{props.data.contentfulMenuItem.date}</p>
            {documentToReactComponents(props.data.contentfulMenuItem.body.json, options)}
        </Layout>
    )
}

export default Menu