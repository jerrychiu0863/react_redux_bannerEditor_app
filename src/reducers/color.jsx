import C from '../constants/action-types';

export default function color(state=["#005aa7", "#fffde4"], action) {
    switch(action.type) {
        case C.SET_FIRST_COLOR:
            return [action.payload, state[1]];
        
        case C.SET_SECOND_COLOR:
            return [state[0], action.payload]
            
        case C.RESET:
            return ["#005aa7", "#fffde4"]
            
        default: 
            return state;
    }
}