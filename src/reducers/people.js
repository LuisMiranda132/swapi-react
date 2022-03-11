import { RECEIVE_PEOPLE } from '../actions/people'

export default function people(state = { elements: {} , next: "" }, action) {
    switch (action.type) {
        case RECEIVE_PEOPLE:
            let dummy = action.people.reduce((accum, x) => {
                
                let url = x.url.split('/')
                const id = url[url.length-2]

                return { 
                    ...accum,  
                    [id]: {...x} 
                }
            }, {})

            return {
                ...state,
                elements:{
                    ...state.elements,
                    ...dummy
                },
                next: action.next
            };
        default: 
            return state
    }
}