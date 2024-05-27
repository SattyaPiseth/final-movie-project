/**
 * Reducer for popular movies
 */
import {actionType} from "../action/actionType";
const initialState = {
    popularMovies: [],
    isLoading: true
}
export const popularMovieReducer = (state = initialState,action) => {
    let {GET_POPULAR_MOVIES} = actionType;
    let {type, payload} = action;

    console.log(type,payload)

    switch (type){
        case GET_POPULAR_MOVIES:
            return{
                ...state,
                popularMovies: payload,
                isLoading: false
            }
        default:
            return state;
    }
}