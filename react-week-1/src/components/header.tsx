import { Link } from "react-router-dom"
import React from "react"

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className="container">
                    <nav className='header_nav'>
                        <ul className="header_nav_list">
                            <li>
                                <Link className="header_nav_list_link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="header_nav_list_link" to="/about">About us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header;