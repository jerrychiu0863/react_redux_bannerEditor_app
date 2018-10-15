import C from '../constants/action-types';

export default function colorDegree(state='0', action) {
    switch(action.type) {
        case C.SET_COLOR_DEGREE:
            return action.payload
            
        case C.RESET:
            return '0'
            
        default:
            return state
    }
}