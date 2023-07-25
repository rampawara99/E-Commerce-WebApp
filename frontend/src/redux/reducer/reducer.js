import { DELETE_ITEM, CATEGORY_DATA, BUY_PRODUCTS, ALERT_MESSAGE } from "../type";

const initialState = {
    deletesData: {},
    categoryData: [],
    buyProducts: [],
    alertData:{}
};

const reducer = (state = initialState, action) => {

    // console.log(" DL reducer: ", action);

    switch (action.type) {
        case DELETE_ITEM: 
            return {
                ...state,
                deletesData: action.payload
            }

        case CATEGORY_DATA:
            return {
                ...state,
                categoryData: action.payload
            }
        
        case BUY_PRODUCTS: 
            return{
                ...state,
                buyProducts:action.payload
            }

        case ALERT_MESSAGE: 
            return{
                ...state,
                alertData: {...action.payload}
            }
        default:
            return state
    }
}

export default reducer;

