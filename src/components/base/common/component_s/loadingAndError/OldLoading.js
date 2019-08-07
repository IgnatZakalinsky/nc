import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";

const OldLoading = (props) => {
    const isGettingFromS = props.isGettingFromS;
    const isError = props.isError;

    const srcLoading = props.srcLoading || 'https://vk.com/doc123795798_509829821';
    const altLoading = props.altLoading;
    const srcError = props.srcError || 'https://pp.userapi.com/c854320/v854320307/a08d6/OH8B1PiURzs.jpg';
    const altError = props.altError;

    return (
        <div>
            {isGettingFromS && <span><img src={srcLoading} alt={altLoading}/>{altLoading}</span>}
            {isError && <span><img src={srcError} alt={altError}/>{altError}</span>}
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        isGettingFromS: state.mySession.isGettingFromS,
        isError: state.mySession.isError,
    };
};

export default compose(
    connect(mapStateToProps, {})
)(OldLoading);
