import React, { useEffect, useState } from 'react'; 
import AboutPriceDiv from './innerComponents/price-details/AboutPriceDiv';
import PriceHeading from './innerComponents/price-details/PriceHeading';
import axios from 'axios';

const PriceDetailContainer = ({width}) => {

    // It will responsive to content as device change
    width = width < 992 ? "100%" : "30%";
    // creating an object state variable
    const [apiData, setApiData] = useState({});
    // creating price and discount controller variable
    const [apiPrices, setApiPrices] = useState({});

    // This function will fetch user data from database
    const fetchApiHandler = async ()=>{
        try{
            // extracting current user id from localStorage
            const {_id} = JSON.parse(localStorage.getItem('user')); 
            // fetching request to server for extract all buyer items data
            const result = await axios.get('http://localhost:5000/buyer-items/'+_id);
            const {data} = result;
            console.log("result", data);
            let total = 0;
            let discountAmount=0; 
            data.forEach((item, ind)=>{
                // collecting total amount of items
                total += item.price*item.quantity;
                // collecting discountAmount
                discountAmount +=  (item.price*(45/100))*item.quantity;
            });
            
            setApiData({...apiData, total: total, discountAmount: discountAmount});
            console.log("$"+total); 
            console.log("discount: ", total - discountAmount)

        }catch(err){ // this catch method will catch error in above code
            alert(err);
            console.log(err);
        }
    }

    // it will fetch api after the dom render
    useEffect(()=>{
        fetchApiHandler();
    },[]);
    
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