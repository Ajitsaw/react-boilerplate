import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(props) {
    return (
        <header className={props.darkMode ? "dark" : ""}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-4">
                        <Link to="/" className="logo">
                            Logo
                        </Link>
                    </div>
                    <div className="col-4">
                        <div className="header-right">
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to="/about" activeclassname="active">About</NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <a href="" className="button">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}