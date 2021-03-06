import C from '../constants/action-types';

export default function fontSize(state='8', action) {
    switch(action.type) {
        case C.SET_FONT_SIZE:
            return action.payload
            
        case C.RESET:
            return '8'
            
        default:
            return state;
    }
} 