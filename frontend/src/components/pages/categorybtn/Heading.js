import React from 'react'

const Heading = () => {

    const style = {
        textShadow: "1px 1px 2px black",
        color: "#00ff40", 
        textDecoration: "underline",
        textDecorationSkipInk: "-14px",
        textDecorationThickness: "2px",
        textDecorationStyle: "wavy",
        textUnderlineOffset: "3px",
    };

    return (
        <div className='my-5'>
            <h1
                style={style}
                className='fw-bolder text-warning h3'>
                SELECT CATEGORIES
            </h1>
        </div>
    )
}

export default Heading