import {AuthAPI} from "../../apiAxios/authAPI";
import {
    setIsGettingFromSMe,
    setIsLogining, setIsLogouting,
    setMe,
    startSession, successLogin, successLogout
} from "../reducers/mySessionReducer";
import {resetMessageCount} from "../reducers/chatReducer";

export const getMe = () => (dispatch, getState) => {
    dispatch(setIsGettingFromSMe(true));
    AuthAPI.me().then(response => {
        dispatch(setIsGettingFromSMe(false));
        if (response.data.resultCode === 0) dispatch(setMe({
            redirect: false, myProfileId: response.data.data.id, login: response.data.data.login,
            email: response.data.data.email
        }));
        else {
            if (!getState().mySession.startSession) dispatch(startSession(true));
            else {
                alert("I can't get you from server!");
                console.log(response);
            }
        }
    });
};
export const logout = () => (dispatch, getState) => {
    dispatch(setIsLogouting(true));
    AuthAPI.logout().then(response => {
        dispatch(setIsLogouting(false));
        if (response.data.resultCode === 0) {
            dispatch(successLogout());
            dispatch(resetMessageCount());
            clearTimeout(getState().chat.newMessagesCountTimer)
        }
        else {
            alert("I can't logout you!");
            console.log(response);
        }
    });
};
export const login = (email, password) => (dispatch) => {
    dispatch(setIsLogining(true));
    AuthAPI.login(email, password).then(response => {
        dispatch(setIsLogining(false));
        if (response.data.resultCode === 0) {
            dispatch(successLogin({myProfileId: response.data.data.userId, redirect: true}));
            getMe()(dispatch);
        } else {
            alert("I can't login you!");
            console.log(response);
        }
    });
};
export const setAPIKey = (key) => (dispatch) => {
    AuthAPI.setAPIKey(key);
};

