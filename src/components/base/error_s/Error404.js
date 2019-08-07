import React from 'react';
import Error404P from "./Error404P";
import {compose} from "redux";
import withStyle from "../common/hoc_s/withStyle/withStyle";

const Error404 = (props) => {
    return <Error404P {...props}/>;
};

export default compose(
    withStyle
)(Error404);
