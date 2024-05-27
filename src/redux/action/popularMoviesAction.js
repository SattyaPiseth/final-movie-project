import axios from "axios";
import {POPULAR_MOVIE_URL} from "../../api";
import {actionType} from "./actionType";

/**
 * create function to fetch popular movies
 */
export const fetchPopularMovie = (page) => {
    return(dispatch) =>{
        axios(`${POPULAR_MOVIE_URL}&language=en-US&page=${page}`)
            .then((response) => dispatch({
                type: actionType.GET_POPULAR_MOVIES,
                payload: response.data.results
            }))
            .catch((error) => console.error(error));
    }
}
