import color from './color';
import fontSize from './fontSize';

import { combineReducers } from 'redux';

export default combineReducers({
    color,
    fontSizeValue: fontSize
});