import React, {useEffect} from 'react';
import AuthHeaderP from "./AuthHeaderP";
import {compose} from "redux";
import {connect} from "react-redux";
import {getMe} from "../../../../reduxStore/thunks/mySessionThunk";
import withStyle from "../../common/hoc_s/withStyle/withStyle";
import {
    getIsGettingFromSMeSelector,
    getLoginSelector,
    getMyProfileIdSelector
} from "../../../../reduxStore/selectors/mySessionSelector_s";

const AuthHeader = (props) => {
    const myProfileId = props.myProfileId;

    useEffect(() => {
        props.getMe();
    }, []);


    const login = props.login;
    const style = props.style;
    const isGettingFromSMe = props.isGettingFromSMe;
    const myAva = 'https://wmpics.pics/dt-VLQ721XU.gif'; //props.myAva;

    return (
        <AuthHeaderP myProfileId={myProfileId} login={login} myAva={myAva} style={style}
                     isGettingFromSMe={isGettingFromSMe}/>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfileId: getMyProfileIdSelector(state),
        login: getLoginSelector(state),
        isGettingFromSMe: getIsGettingFromSMeSelector(state),
    };
};

export default compose(
    withStyle,
    connect(mapStateToProps, {getMe})
)(AuthHeader);
