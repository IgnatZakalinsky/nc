import {
    setIsGettingFromSProfile,
    setIsGettingFromSUpdateStatus
} from "../reducers/mySessionReducer";
import {ProfileAPI} from "../../apiAxios/profileAPI";
import {setProfile, setStatus} from "../reducers/profileReducer";

export const getProfile = (userId) => (dispatch) => {
    dispatch(setIsGettingFromSProfile(true));
    ProfileAPI.getProfile(userId).then(response => {
        dispatch(setIsGettingFromSProfile(false));
        if (response.status === 200) dispatch(setProfile(response.data));
        else {
            alert("I can't get your profile from server!");
            console.log(response);
        }
    });
};
export const getProfileStatus = (userId) => (dispatch) => {
    ProfileAPI.getProfileStatus(userId).then(response => {
        if (response.status === 200) dispatch(setStatus(response.data));
        else {
            alert("I can't get your status from server!");
            console.log(response);
        }
    });
};
export const updateStatus = () => (dispatch, getState) => {
    dispatch(setIsGettingFromSUpdateStatus(true));
    ProfileAPI.updateStatus(getState().profile.status).then(response => {
        dispatch(setIsGettingFromSUpdateStatus(false));
        if (response.status !== 200) {
            alert("I can't update your status to server!");
            console.log(response);
        }
    });
};

