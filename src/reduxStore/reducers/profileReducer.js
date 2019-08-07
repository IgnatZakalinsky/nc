const SET_SOMETHING = 'SET_SOMETHING';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    aboutMe: 'If you see this - then your URL not correct!',
    contacts: {facebook: null, website: null, vk: null, twitter: null, instagram: null},
    fullName: "Error-tyan",
    lookingForAJob: false,
    lookingForAJobDescription: null,
    photos: {small: null, large: 'https://pp.userapi.com/c854320/v854320307/a08d6/OH8B1PiURzs.jpg'},
    userId: 0,
    status: 'This is my profile!'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SOMETHING:
            return {...state, ...action.payload};
        case SET_PROFILE:
            return {...state, ...action.payload};
        case SET_STATUS:
            return {...state, status: action.payload};
        default:
            return state;
    }
};

export const setSomethingInProfile = (something) => ({type: SET_SOMETHING, payload: something});
export const setProfile = (profile) => ({type: SET_PROFILE, payload: profile});
export const setStatus = (status) => ({type: SET_STATUS, payload: status});

export default profileReducer;