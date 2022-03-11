import { RECEIVE_STARSHIPS } from "../actions/starships";

export default function starships(state={}, action){
    switch(action.type){

        case RECEIVE_STARSHIPS:
            return {
                ...state,
                ...action.starships
            }

        default:
            return state
    }
}