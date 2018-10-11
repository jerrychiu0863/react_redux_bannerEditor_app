import color from './color';
import fontSize from './fontSize';
import colorDegree from './colorDegree';

import { combineReducers } from 'redux';

export default combineReducers({
    color,
    fontSizeValue: fontSize,
    colorDegree
});