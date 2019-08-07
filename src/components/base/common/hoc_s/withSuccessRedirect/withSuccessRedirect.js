import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    getBackRedirectSelector,
    getRedirectSelector
} from "../../../../../reduxStore/selectors/mySessionSelector_s";

const withSuccessRedirect = (message) => (InnerComponent) => {

    let WithSuccessRedirect = ({redirect, backRedirect, ...props}) => {
        if (redirect) {
            alert(message);
            return <Redirect to={backRedirect}/>;
        }
        else return <InnerComponent {...props}/>;
    };

    let mapStateToProps = (state) => {
        return {
            backRedirect: getBackRedirectSelector(state),
            redirect: getRedirectSelector(state),
        };
    };

    return compose(
        connect(mapStateToProps)
    )(WithSuccessRedirect);
};

export default withSuccessRedirect;
