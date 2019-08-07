import React from 'react';
import AuthDisconnectP from "./authDisconnectP";
import {compose} from "redux";
import {connect} from "react-redux";
import {logout} from "../../../reduxStore/thunks/mySessionThunk";
import {getIsLogoutingSelector} from "../../../reduxStore/selectors/mySessionSelector_s";

const AuthDisconnect = (props) => {
    const logout = props.logout;
    const style = props.style;

    return  <AuthDisconnectP logout={logout} isLogouting={props.isLogouting} style={style}/>;
};

let mapStateToProps = (state) => {
    return {
        isLogouting: getIsLogoutingSelector(state)
    };
};

export default compose(
    connect(mapStateToProps, {logout})
)(AuthDisconnect);
