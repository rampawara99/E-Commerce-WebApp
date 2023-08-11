import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className="col-lg-3 col-md-6 mb-5">
            <h3 className=" mb-4">ABOUT US</h3>
            <div className="d-flex flex-column justify-content-start"> 
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>About Us</Link>
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i> Careers at ShopLine</Link>
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>Corporate Responsibility</Link>
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>Our Blog</Link>
                <Link className="text-white text-decoration-none mb-2" to="#"><i
                    className="fa fa-angle-right mx-2"></i>Contact Us</Link>
            </div>
        </div>
    )
}

export default AboutUs