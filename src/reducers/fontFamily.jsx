import C from '../constants/action-types';

export default function fontFamil(state='Lato', action) {
    switch(action.type) {
        case C.SET_FONT_FAMILY:
            return action.payload
            
        case C.RESET:
            return 'Lato'
            
        default:
            return state
    }
}