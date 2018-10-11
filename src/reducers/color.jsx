import C from '../constants/action-types';

export default function color(state=["#000000", "#000000"], action) {
    switch(action.type) {
        case C.SET_FIRST_COLOR:
            return [action.payload, state[1]];
        
        case C.SET_SECOND_COLOR:
            return [state[0], action.payload]
            
        default: 
            return state;
    }
}