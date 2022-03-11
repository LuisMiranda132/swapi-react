export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';

export function recievePlanets(planet){
    return{
        type: RECEIVE_PLANETS,
        planet
    }
}