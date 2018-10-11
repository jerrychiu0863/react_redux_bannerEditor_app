import color from './color';
import fontSize from './fontSize';
import colorDegree from './colorDegree';
import typing from './typing';

import { combineReducers } from 'redux';

export default combineReducers({
    color,
    fontSizeValue: fontSize,
    colorDegree,
    typing
});