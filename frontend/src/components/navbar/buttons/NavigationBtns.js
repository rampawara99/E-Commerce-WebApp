import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBtns = ({pathname, name, link}) => {
 
    return (
        <li className="nav-item position-relative">
            <Link
                className={`nav-link active ${pathname === link ? "fw-bold" : ""}`}
                to={link}>{name}
            </Link>
            <span className={`nav-btn-underline ${pathname === link ? "w-100 bg-danger" : ""}`}></span>
        </li>
    )
}

export default NavigationBtns