import axios from "axios";
import {BASE_URL} from "../../api";
import {actionType} from "./actionType";

/**
 * create function to fetch products
 */
export const fetchProducts = () => {
    return(dispatch) => {
        axios(`${BASE_URL}products`)
            .then((response) => dispatch({
                type: actionType.GET_PRODUCTS,
                payload: response.data
            }))
            .catch((error) => console.error(error));
    }
}
