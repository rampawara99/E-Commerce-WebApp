import React from 'react'; 
import AboutPriceDiv from './innerComponents/price-details/AboutPriceDiv';
import PriceHeading from './innerComponents/price-details/PriceHeading';

const PriceDetailContainer = ({width}) => {

    // It will responsive to content as device change
    width = width < 992 ? "100%" : "30%";
    
    return (
        <>
            <div
                className="bg-light align-self-start my-5"
                style={{ width: width}}>
                <PriceHeading/>
                <AboutPriceDiv/>
            </div>
        </>
    )
}

export default PriceDetailContainer