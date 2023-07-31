import React from 'react'

const Mail = () => {
    return (
        <div className="col-lg-3 col-md-6 mb-5">
            <h3 className=" mb-4">Contact</h3>
            <div action="false">
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                        placeholder="Your Email" />
                </div>
                <div>
                    <button className="btn btn-danger btn-block border-0 py-3" type="submit">
                        Submit Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mail