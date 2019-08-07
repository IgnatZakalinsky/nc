import {createSelector} from "reselect";

const getSelectedStyleString = (state) => {
    return state.style.selectedStyle;
};
const getStyle_s = (state) => {
    return state.style.style_s;
};

export const getSelectedStyle = createSelector(
    [getSelectedStyleString, getStyle_s],
    (selectedStyleString, Style_s) => {
        return Style_s[selectedStyleString];
    }
);
export const getAllStyle_s = createSelector(
    [getStyle_s],
    (allStyle_s) => {
        const style_s = Object.values(allStyle_s);
        style_s.shift();
        return style_s;
    }
);