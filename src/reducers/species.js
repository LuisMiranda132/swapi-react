import { RECEIVE_SPECIES } from "../actions/species"

export default function species(state={}, action){
    switch(action.type){

        case RECEIVE_SPECIES:
            return {
                ...state,
                ...action.species
            }

        default:
            return state
    }
}