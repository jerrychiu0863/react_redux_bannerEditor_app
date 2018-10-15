import C from '../constants/action-types';

export default function fontColor(state='#000000', action) {
    switch(action.type) {
        case C.SET_FONT_COLOR:
            return action.payload
            
        case C.RESET:
            return "#000000"
            
        default:
            return state
    }
}