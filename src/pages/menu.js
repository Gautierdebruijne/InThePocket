import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery } from "gatsby"
import menuStyle from "./menu.module.scss"

const MenuPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <h1>Menu</h1>
                <ol className={menuStyle.recipes}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li className={menuStyle.recipe}>
                                <Link to={`/menu/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default MenuPage