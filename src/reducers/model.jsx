import C from '../constants/action-types';

export default function isModelOpen(state=false, action) {
    switch(action.type) {
        case C.SET_MODEL:
            return !state
            
        default:
            return state
    }
}