import C from '../constants/action-types';

export const setFirstColor = value => ({
    type: C.SET_FIRST_COLOR,
    payload: value
})

export const setSecondColor = value => ({
    type: C.SET_SECOND_COLOR,
    payload: value
})

export const setColorDegree = value => ({
    type: C.SET_COLOR_DEGREE,
    payload: value
})

export const setFontSize = value => ({
    type: C.SET_FONT_SIZE,
    payload: value
})