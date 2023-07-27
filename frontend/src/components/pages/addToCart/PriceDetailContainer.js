import AboutPriceDiv from './innerComponents/price-details/AboutPriceDiv';
import PriceHeading from './innerComponents/price-details/PriceHeading';
import axios from 'axios';
import { useDispatch } from 'react-redux';


// This function will fetch user data from database
export const fetchApiHandler = async (dispatch) => {
    try {
        // extracting current user id from localStorage
        const { _id } = JSON.parse(localStorage.getItem('user'));
        // fetching request to server for extract all buyer items data
        const result = await axios.get('http://localhost:5000/buyer-items/' + _id);
        const { data } = result;
        // console.log("result", data);
        let total = 0;
        let discountAmount = 0;
        data.forEach((item, ind) => {
            // collecting total amount of items
            total += item.price * item.quantity;
            // collecting all items discountAmount and here is 45% off discount to each products
            discountAmount += (item.price * (45 / 100)) * item.quantity;
        });
        // calling dispatch function 
        dispatch({ type: "ADD_TO_CART_DATA", payload: { total, discountAmount, data } });


    } catch (err) { // this catch method will catch error in above code 
        console.log(err);
        alert(err);
    }
}


const PriceDetailContainer = ({ width }) => {
    // get dispatch function 
    const dispatch = useDispatch();
    // It will responsive to content as device change
    width = width < 992 ? "100%" : "30%";
    // calling fetchApiHandler function and taking dispatch function as argument
    fetchApiHandler(dispatch);

    return (
        <>
            <div
                className="bg-light align-self-start my-5"
                style={{ width: width }}>
                <PriceHeading />
                <AboutPriceDiv />
            </div>
        </>
    )
}

export default PriceDetailContainer


