import { RECEIVE_PLANETS } from "../actions/planets"

export default function planets(state={}, action){
    switch(action.type){

        case RECEIVE_PLANETS:
            return {
                ...state,
                ...action.planet
            }

        default:
            return state
    }
}