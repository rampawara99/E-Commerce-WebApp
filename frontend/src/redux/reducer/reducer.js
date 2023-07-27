import { DELETE_ITEM, CATEGORY_DATA, BUY_PRODUCTS, ALERT_MESSAGE, ADD_TO_CART_DATA } from "../type";

const initialState = {
    deletesData: {},
    categoryData: [],
    buyProducts: [],
    alertData: {},
    addToCartUpdater: { total: 0, discountAmount: 0, data: [] }
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
            return {
                ...state,
                buyProducts: action.payload
            }

        case ALERT_MESSAGE:
            return {
                ...state,
                alertData: { ...action.payload }
            }

        case ADD_TO_CART_DATA: 
            return {
                ...state,
                addToCartUpdater: { ...action.payload }
            }
        default:
            return state
    }
}

export default reducer;

