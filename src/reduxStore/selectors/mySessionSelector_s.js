import {createSelector} from "reselect";

const getMyProfileId = (state) => {
    return state.mySession.myProfileId;
};
const getLogin = (state) => {
    return state.mySession.login;
};
const getIsGettingFromSMe = (state) => {
    return state.mySession.isGettingFromSMe;
};
const getBackRedirect = (state) => {
    return state.mySession.backRedirect;
};
const getIsLogining = (state) => {
    return state.mySession.isLogining;
};
const getIsLogouting = (state) => {
    return state.mySession.isLogouting;
};
const getRedirect = (state) => {
    return state.mySession.redirect;
};

export const getMyProfileIdSelector = createSelector(
    [getMyProfileId],
    (myProfileId) => {
        return myProfileId;
    }
);
export const getLoginSelector = createSelector(
    [getLogin],
    (login) => {
        return login;
    }
);
export const getIsGettingFromSMeSelector = createSelector(
    [getIsGettingFromSMe],
    (isGettingFromSMe) => {
        return isGettingFromSMe;
    }
);
export const getBackRedirectSelector = createSelector(
    [getBackRedirect],
    (backRedirect) => {
        return backRedirect;
    }
);
export const getIsLoginingSelector = createSelector(
    [getIsLogining],
    (isLogining) => {
        return isLogining;
    }
);
export const getIsLogoutingSelector = createSelector(
    [getIsLogouting],
    (isLogouting) => {
        return isLogouting;
    }
);
export const getRedirectSelector = createSelector(
    [getRedirect],
    (redirect) => {
        return redirect;
    }
);
