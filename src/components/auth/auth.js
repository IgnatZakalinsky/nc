import React from 'react';
import s from './auth.module.css';
import AuthDisconnect from "./authDisconnect/authDisconnect";
import AuthConnect from "./authConnect/authConnect";
import withSuccessRedirect from "../base/common/hoc_s/withSuccessRedirect/withSuccessRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {getMyProfileIdSelector} from "../../reduxStore/selectors/mySessionSelector_s";
import withStyle from "../base/common/hoc_s/withStyle/withStyle";

let AuthPage = (props) => {
    const myProfileId = props.myProfileId;
    const style = props.style;

     return (
        <div className={s.authPage} style={style.background}>
            {myProfileId
                ? <AuthDisconnect style={style}/>
                : <AuthConnect style={style}/>
            }
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfileId: getMyProfileIdSelector(state),
    };
};

const message = 'success connect!';

export default compose(
    withSuccessRedirect(message),
    withStyle,
    connect(mapStateToProps),
)(AuthPage);
