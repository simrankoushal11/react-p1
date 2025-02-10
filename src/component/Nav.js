import React from 'react'
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="collapse navbar-collapse container" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/convert-case">Case Convert</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/to-do">To Do List</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
