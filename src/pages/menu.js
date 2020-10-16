import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery } from "gatsby"
import menuStyle from "./menu.module.scss"
import Head from "../components/head"

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
                        date(formatString:"MMMM Do, YYYY")
                    } 
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <Head title="Menu"/>
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