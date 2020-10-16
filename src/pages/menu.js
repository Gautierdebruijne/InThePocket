import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery } from "gatsby"
import menuStyle from "./menu.module.scss"

const MenuPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulMenuItem(sort: { 
            fields: date,
            order: DESC
            })	{
                edges{
                    node{
                        title
                        slug
                        date(formatString:"Do MMMM, YYYY")
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
                    {data.allContentfulMenuItem.edges.map((edge) => {
                        return (
                            <li className={menuStyle.recipe}>
                                <Link to={`/menu/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.date}</p>
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