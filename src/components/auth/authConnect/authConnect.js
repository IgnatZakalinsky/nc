import React from 'react';
import AuthConnectP from "./authConnectP";
import {compose} from "redux";
import {connect} from "react-redux";
import {login, setAPIKey} from "../../../reduxStore/thunks/mySessionThunk";
import {getIsLoginingSelector} from "../../../reduxStore/selectors/mySessionSelector_s";

const AuthConnect = (props) => {
    const isLogining = props.isLogining;
    const style = props.style;
    const setAPIKey = props.setAPIKey;

    const login = (name, pass) => props.login(name, pass);

    return <AuthConnectP login={login} isLogining={isLogining} style={style} setAPIKey={setAPIKey}/>;
};

let mapStateToProps = (state) => {
    return {
        isLogining: getIsLoginingSelector(state)
    };
};

export default compose(
    connect(mapStateToProps, {login, setAPIKey})
)(AuthConnect);
