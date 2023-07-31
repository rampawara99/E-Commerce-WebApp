import React from 'react'
import { Link } from 'react-router-dom'

const LogoContainer = () => {
    return (
        <div className="col-lg-3 col-md-6 mb-5">
            <Link to="#" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
                style={{ fontSize: "40px", lineHeight: "40px" }}>
                <i className="flaticon-043-teddy-bear"></i>
                <span className="text-white">ShopLine</span>
            </Link>
            <p className="my-4 pe-3">
                Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
                dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr
                stet diam duo eos rebum ipsum diam ipsum elitr.
            </p>
            <div className="d-flex justify-content-start mt-4">
                <Link className="btn btn-social rounded-circle text-center mx-2 px-0" style={{ width: "38px", height: "38px" }}
                    to="#"><i className="fab fa-twitter"></i></Link>
                <Link className="btn btn-social rounded-circle text-center mx-2 px-0" style={{ width: "38px", height: "38px" }}
                    to="#"><i className="fab fa-facebook-f"></i></Link>
                <Link className="btn btn-social rounded-circle text-center mx-2 px-0" style={{ width: "38px", height: "38px" }}
                    to="#"><i className="fab fa-linkedin-in"></i></Link>
                <Link className="btn btn-social rounded-circle text-center mx-2 px-0" style={{ width: "38px", height: "38px" }}
                    to="#"><i className="fab fa-instagram"></i></Link>
            </div>
        </div>
    )
}

export default LogoContainer