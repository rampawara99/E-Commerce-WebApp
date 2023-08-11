import React from 'react' 
import Logo from './Logo'
import Address from './Address'
import AboutUs from './AboutUs'
import Mail from './Mail'

const Details = () => {
    return (
        <div id="footer">
            <div className="container-fluid text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <Logo/>
                    <Address/>
                    <AboutUs/>
                    <Mail/>
                </div>
            </div>
        </div>
    )
}

export default Details