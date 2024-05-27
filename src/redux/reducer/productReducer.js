import {actionType} from "../action/actionType";

/**
 * reducer is function that takes two arguments state and action and returns a new state
 */
const initialState = {
    products: [],
    isLoading: true
}
export const productReducer = (state = initialState, action) => {
    let {GET_PRODUCTS} = actionType;
    let {type, payload} = action;

    switch (type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: payload,
                isLoading: false
            }
        default:
            return state;
    }
}