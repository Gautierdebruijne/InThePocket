import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <div>
            <header>
                <h1>'t Kompas</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header