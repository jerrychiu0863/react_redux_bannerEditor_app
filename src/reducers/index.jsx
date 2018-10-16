import color from './color';
import fontSize from './fontSize';
import colorDegree from './colorDegree';
import typing from './typing';
import fontColor from './fontColor';
import fontFamily from './fontFamily';
import colorLists from './colorLists';
import isModelOpen from './model';

import { combineReducers } from 'redux';

export default combineReducers({
    color,
    fontSizeValue: fontSize,
    colorDegree,
    typing,
    fontColor,
    fontFamily,
    colorLists,
    isModelOpen
});