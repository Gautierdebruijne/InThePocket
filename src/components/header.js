import React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"

import headerStyle from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata {
                    title
                }
            }
        }
    `)
    

    return (
        <div>
            <header className={headerStyle.header}>
                <h1>
                    <Link className={headerStyle.title} to ="/">
                    {data.site.siteMetadata.title}
                    </Link>
                </h1>
                <nav>
                    <ul className={headerStyle.navList}>
                        <li>
                            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/menu">Menu</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header