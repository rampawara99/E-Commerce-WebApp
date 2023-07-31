import React from 'react'
import { Link } from 'react-router-dom'

const NavBtn = () => {
    return (
        <div className="col-lg-3 col-md-6 mb-5">
            <h3 className=" mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>Home</Link>
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>About Us</Link>
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>Our Classes</Link>
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>Our Teachers</Link>
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>Our Blog</Link>
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>Contact Us</Link>
            </div>
        </div>
    )
}

export default NavBtn