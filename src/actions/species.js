export const RECEIVE_SPECIES = 'RECEIVE_SPECIES';

export function recieveSpecies(species) {
    return {
        type: RECEIVE_SPECIES,
        species
    }
}   