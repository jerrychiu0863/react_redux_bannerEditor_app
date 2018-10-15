import C from '../constants/action-types';

export default function typing(state='Hello World!', action) {
    switch(action.type) {
        case C.SET_TYPING:
            return action.payload
            
        case C.CLEAR_TYPING:
            return ''
            
        case C.RESET:
            return 'Hello World!'
            
        default:
            return state;
    }
}