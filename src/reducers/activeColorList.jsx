import C from '../constants/action-types';

export default function activeColorList(state={}, action) {
    switch(action.type) {
        case C.ACTIVE_COLOR_LIST:
          
            return action.payload 
            
        default: 
            return state
    }
}