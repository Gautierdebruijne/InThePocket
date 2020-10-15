import React from "react"
import { Link } from "gatsby"

import headerStyle from "./header.module.scss"

const Header = () => {
    return (
        <div>
            <header className={headerStyle.header}>
                <h1><Link className={headerStyle.title} to ="/">'t Kompas</Link></h1>
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