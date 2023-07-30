import React from 'react'

const ImageControler = ({ imgUrl }) => {
    return (
        <div
            style={{ border: "2px solid #dddcdc", textAlign: "center" }}
            className="col-lg-3 rounded my-3">
            <img src={imgUrl} alt="{data.title}" className="img-fluid" />
        </div>
    )
}

export default ImageControler