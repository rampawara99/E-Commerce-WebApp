import React from 'react'

const Address = () => {
    return (
        <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="mb-4">Get In Touch</h3>
            <div className="d-flex">
                <h4 className="fa fa-map-marker-alt text-light"></h4>
                <div className="px-3">
                    <h5 className="text-white">Address</h5>
                    <p>Dhule, State Maharashtra, India</p>
                </div>
            </div>
            <div className="d-flex">
                <h4 className="fa fa-envelope text-light"></h4>
                <div className="px-3">
                    <h5 className="text-white">Email</h5>
                    <p>kusarampawara77@gmail.com</p>
                </div>
            </div>
            <div className="d-flex">
                <h4 className="fa fa-phone-alt text-light"></h4>
                <div className="px-3">
                    <h5 className="text-white">Mobile</h5>
                    <p>+91-9322230624</p>
                </div>
            </div>
        </div>
    )
}

export default Address