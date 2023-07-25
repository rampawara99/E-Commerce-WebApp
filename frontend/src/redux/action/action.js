import { ALERT_MESSAGE, BUY_PRODUCTS, CATEGORY_DATA, DELETE_ITEM } from "../type"

// delete data handler action
export const deleteData = (data) => {
    // if(data.user){}
    // console.log("delete action: ", data);
    return {
        type: DELETE_ITEM,
        payload: data
    }
}

// category data handler action 
export const productCategory = (data)=>{
    // console.log("categroy action: ", data)
    return {
        type: CATEGORY_DATA,
        payload: data
    }
}

// buy products data handler action
export const buyProducts = (data)=>{
    // console.log("buy_products action: ",data );
    return{
        type: BUY_PRODUCTS,
        payload:data
    }
}

// alert and success message for when user will click remove and savelater button
export const alertMessageAction = (data) =>{
    // console.log("alert action: ", data);
    return {
        type: ALERT_MESSAGE,
        payload: data
    }
}
 


