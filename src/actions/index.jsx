import C from '../constants/action-types';
import cuid from 'cuid';

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

export const setFontFamily = value => ({
    type: C.SET_FONT_FAMILY,
    payload: value
})

export const setTyping = value => ({
    type: C.SET_TYPING,
    payload: value
})

export const setFontColor = value => ({
    type: C.SET_FONT_COLOR,
    payload: value
})

export const clearTyping = () => ({
    type: C.CLEAR_TYPING,
    payload: ''
})

export const saveDesign = (color, colorDegree, fontFamily, fontSize, fontColor, typing, date) => ({
    type: C.SAVE_DESIGN,
    payload: {
        color,
        colorDegree,
        fontFamily,
        fontSize,
        fontColor,
        typing,
        date,
        id: cuid(),
        timestamp: new Date().toString()
    }
})

export const resetDesign = () => ({
    type: C.RESET,
    payload: ''
})

export const setModel = () => ({
    type: C.SET_MODEL,
    payload: ''
})

export const activeColorList = colorList => ({
    type: C.ACTIVE_COLOR_LIST,
    payload: colorList
})