import C from '../constants/action-types';

export default function colorLists(state=[], action) {
    switch(action.type) {
        case C.SAVE_DESIGN:
            const {color, colorDegree, fontFamily, fontSize, fontColor, typing, id, date, timestamp} = action.payload;
            
            return [...state, {color, colorDegree, fontFamily, fontSize, fontColor, typing, id, date, timestamp}]
            
        default:
            return state
    }
}