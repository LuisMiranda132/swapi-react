import { RECEIVE_VEHICLES } from "../actions/vehicles";

export default function vehicles(state={}, action){
    switch(action.type){

        case RECEIVE_VEHICLES:
            return {
                ...state,
                ...action.vehicles
            }

        default:
            return state
    }
}