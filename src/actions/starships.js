export const RECEIVE_STARSHIPS = 'RECEIVE_STARSHIPS'

export function recieveStarships(starships){
    return {
        type:RECEIVE_STARSHIPS,
        starships
    }
}