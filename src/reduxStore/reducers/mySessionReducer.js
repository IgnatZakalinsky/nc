const SET_SOMETHING = 'SET_SOMETHING';
const SET_IS_GETTING_FROM_S_ME = 'SET_IS_GETTING_FROM_S_ME';
const SET_IS_GETTING_FROM_S_UPDATE_STATUS = 'SET_IS_GETTING_FROM_S_UPDATE_STATUS';
const SET_IS_GETTING_FROM_S_PROFILE = 'SET_IS_GETTING_FROM_S_PROFILE';
const SET_IS_GETTING_FROM_S_DIALOGS = 'SET_IS_GETTING_FROM_S_DIALOGS';
const SET_IS_GETTING_FROM_S_MESSAGES = 'SET_IS_GETTING_FROM_S_MESSAGES';
const SET_IS_GETTING_FROM_S_SEND_MESSAGE = 'SET_IS_GETTING_FROM_S_SEND_MESSAGE';
const SET_IS_LOGINING = 'SET_IS_LOGINING';
const SET_IS_LOGOUTING = 'SET_IS_LOGOUTING';
const SET_ME = 'SET_ME';
const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';
const START_SESSION = 'START_SESSION';

const initialState = {
    startSession: false,
    myProfileId: 0,
    backRedirect: '/',
    redirect: false,
    isGettingFromS: false,
    isGettingFromSUpdateStatus: false,
    isGettingFromSProfile: false,
    isGettingFromSMe: false,
    isGettingFromSMessages: false,
    isGettingFromSDialogs: false,
    isGettingFromSSendMessage: false,
    isLogining: false,
    isLogouting: false,
    isError: false,
    isSuccess: false,
    login: 'defLogin',
    email: 'defEmail'
};

const mySessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_GETTING_FROM_S_ME:
            return {...state, isGettingFromSMe: action.payload};
        case SET_IS_GETTING_FROM_S_UPDATE_STATUS:
            return {...state, isGettingFromSUpdateStatus: action.payload};
        case SET_IS_GETTING_FROM_S_DIALOGS:
            return {...state, isGettingFromSDialogs: action.payload};
        case SET_IS_GETTING_FROM_S_PROFILE:
            return {...state, isGettingFromSProfile: action.payload};
        case SET_IS_GETTING_FROM_S_MESSAGES:
            return {...state, isGettingFromSMessages: action.payload};
        case SET_IS_GETTING_FROM_S_SEND_MESSAGE:
            return {...state, isGettingFromSSendMessage: action.payload};
        case SET_IS_LOGINING:
            return {...state, isLogining: action.payload};
        case SET_IS_LOGOUTING:
            return {...state, myProfileId: 0, login: '', email: ''};
        case START_SESSION:
            return {...state, startSession: action.payload};
        case SUCCESS_LOGOUT:
            return {...state, startSession: action.payload};
        case SUCCESS_LOGIN:
            return {...state, redirect: action.payload.redirect, myProfileId: action.payload.myProfileId};
        case SET_ME:
            return {
                ...state,
                redirect: action.payload.redirect, myProfileId: action.payload.myProfileId,
                login: action.payload.login, email: action.payload.email,
            };
        case SET_SOMETHING:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export const setSomethingInSession = (something) => ({type: SET_SOMETHING, payload: something});
export const setIsGettingFromSMe = (isGettingFromSMe) => ({type: SET_IS_GETTING_FROM_S_ME, payload: isGettingFromSMe});
export const setIsGettingFromSUpdateStatus = (isGettingFromSUpdateStatus) => ({
    type: SET_IS_GETTING_FROM_S_UPDATE_STATUS, payload: isGettingFromSUpdateStatus
});
export const setIsGettingFromSProfile = (isGettingFromSProfile) => ({
    type: SET_IS_GETTING_FROM_S_PROFILE, payload: isGettingFromSProfile
});
export const setIsGettingFromSSendMessage = (isGettingFromSSendMessage) => ({
    type: SET_IS_GETTING_FROM_S_SEND_MESSAGE, payload: isGettingFromSSendMessage
});
export const setIsGettingFromSMessages = (isGettingFromSMessages) => ({
    type: SET_IS_GETTING_FROM_S_MESSAGES, payload: isGettingFromSMessages
});
export const setIsGettingFromSDialogs = (isGettingFromSDialogs) => ({
    type: SET_IS_GETTING_FROM_S_DIALOGS, payload: isGettingFromSDialogs
});
export const setIsLogining = (isLogining) => ({type: SET_IS_LOGINING, payload: isLogining});
export const setIsLogouting = (isLogouting) => ({type: SET_IS_LOGOUTING, payload: isLogouting});
export const setMe = (me) => ({type: SET_ME, payload: me});
export const startSession = (startSession) => ({type: START_SESSION, payload: startSession});
export const successLogin = (redirectAndId) => ({type: SUCCESS_LOGIN, payload: redirectAndId});
export const successLogout = () => ({type: SUCCESS_LOGOUT});

export default mySessionReducer;