import React from 'react'
import Details from './Details';

const Footer = () => {

    const style = {
        textShadow: "1px 1px 2px black",
        textDecoration: "underline",
        textDecorationSkipInk: "-14px",
        textDecorationThickness: "2px",
        textDecorationStyle: "wavy",
        textUnderlineOffset: "3px",
    };

    return (
        <footer className='bg-primary px-5 d-flex justify-content-center align-items-center'>

            <div>
                <Details />
                <div className='my-5 text-center'>
                    <h1>
                        <span
                            style={{ ...style, color: "fff" }}
                            className='text-light'>Made By </span>
                        <span
                            style={style}
                            className='text-warning'>
                            Kusaram Pawara
                        </span>
                    </h1>
                    <div className='my-3 text-light'>
                        <span>© 2023 || All right reserve</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer