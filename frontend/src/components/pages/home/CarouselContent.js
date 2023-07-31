import React from 'react'

const CarouselContent = () => {

    const style = {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0, 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000a1",
        color: "#fff",
    };


    return (
        <div style={style}>
            <h1>
                GET <b style={{color:"red"}}>80%</b> DISCOUNT</h1>
            <p
            style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the </p>
        </div>
    )
}

export default CarouselContent