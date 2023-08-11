import React from 'react'
import img1 from './assets/img1.jpg'; 
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.JPG';
import CarouselContent from './CarouselContent';

const Carosel = () => {

    // create a array of image's path for slide
    const arr = [img1, img3, img4, img5]; 

    return (
        <div className='row'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={img3}
                            height="400px"
                            className="d-block w-100"
                            alt="..." />
                        <CarouselContent />
                    </div>

                    {arr.length > 0 &&
                        arr.map((item, index) => (
                            <div
                                key={index}
                                className="carousel-item">
                                <img
                                    src={item}
                                    height="400px"
                                    className="d-block w-100"
                                    alt="..." />
                                <CarouselContent />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carosel