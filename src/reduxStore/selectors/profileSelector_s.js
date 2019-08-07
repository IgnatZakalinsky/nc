import {createSelector} from "reselect";

const getProfile = (state) => {
    return state.profile;
};

export const getProfileSelector = createSelector(
    [getProfile],
    (profile) => {
        return profile;
    }
);