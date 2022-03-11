export const RECEIVE_VEHICLES = 'RECEIVE_VEHICLES'

export function recieveVehicles(vehicles){
    return {
        type:RECEIVE_VEHICLES,
        vehicles
    }
}