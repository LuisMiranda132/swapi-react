export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';

export function recievePeople(people, next) {
    return {
        type: RECEIVE_PEOPLE,
        people,
        next: next
    }
}   