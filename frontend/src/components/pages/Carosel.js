import React from 'react'

const Carosel = () => {
    return (
        <div className='row'>
            <div id="carouselExampleRide" className="carousel" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active h-50 overflow-x-hidden">
                        <img src="https://img.faballey.com/images/indya/theedit/editindlkbkimg1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active h-75 overflow-x-hidden">
                        <img src="https://femina.wwmindia.com/content/2021/jul/modern-dresses-for-girls-infographic.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active h-75 overflow-x-hidden">
                        <img src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carosel