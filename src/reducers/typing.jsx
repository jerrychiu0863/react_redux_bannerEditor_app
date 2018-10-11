import C from '../constants/action-types';

export default function typing(state='Hello World!', action) {
    switch(action.type) {
        case C.SET_TYPING:
            return action.payload
            
        default:
            return state;
    }
}