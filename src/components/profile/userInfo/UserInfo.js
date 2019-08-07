import React, {useEffect} from 'react';
import UserInfoMy from "./userInfoMy/UserInfoMy";
import UserInfoAnother from "./userInfoAnother/UserInfoAnother";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, updateStatus} from "../../../reduxStore/thunks/profileThunk";
import {setSomethingInProfile} from "../../../reduxStore/reducers/profileReducer";
import {startDialog} from "../../../reduxStore/thunks/chatThunk";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";
import {getMyProfileIdSelector} from "../../../reduxStore/selectors/mySessionSelector_s";
import {getProfileSelector} from "../../../reduxStore/selectors/profileSelector_s";

const UserInfo = (props) => {
    const myProfileId = props.myProfileId;
    const profile = props.profile;
    const style = props.style;

    const save = () => props.updateStatus();
    const statusChange = (e) => props.setSomethingInProfile({status: e.currentTarget.value});
    const aboutMeChange = (e) =>  props.setSomethingInProfile({aboutMe: e.currentTarget.value});
    const startDialog = () => props.startDialog(profile.userId);

    useEffect(() => {
        props.getProfile(props.userId);
        props.getProfileStatus(props.userId);
    }, [props.userId]);

    return (
        <div>
            {myProfileId === props.userId
                ? <UserInfoMy profile={profile} save={save} statusChange={statusChange} aboutMeChange={aboutMeChange}
                              style={style}/>
                : <UserInfoAnother profile={profile} startDialog={startDialog} style={style}/>
            }
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfileId: getMyProfileIdSelector(state),
        profile: getProfileSelector(state)
    };
};

export default compose(
    withStyle,
    connect(mapStateToProps, {getProfile, getProfileStatus, setSomethingInProfile, updateStatus, startDialog})
)(UserInfo);
