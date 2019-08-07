import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {getSelectedStyle} from "../../../../../reduxStore/selectors/styleSelector_s";

const withStyle = (InnerComponent) => {

    let WithStyle = (props) => {
        return <InnerComponent {...props}/>;
    };

    let mapStateToProps = (state) => {
        return {
            style: getSelectedStyle(state),
        };
    };

    return compose(
        connect(mapStateToProps)
    )(WithStyle);
};

export default withStyle;
