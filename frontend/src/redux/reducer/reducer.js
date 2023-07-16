import { DELETE_ITEM, CATEGORY_DATA, BUY_PRODUCTS } from "../type";

const initialState = {
    deletesData: {},
    categoryData: [],
    buyProducts: []
};

const reducer = (state = initialState, action) => {

    // console.log(" DL reducer: ", action);

    switch (action.type) {
        case DELETE_ITEM:
            // console.log("reducer check Login: ", action);
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
            console.log("r-buyerProducts: ", action.payload);
            return{
                ...state,
                buyProducts:action.payload
            }

        default:
            return state
    }
}

export default reducer;

