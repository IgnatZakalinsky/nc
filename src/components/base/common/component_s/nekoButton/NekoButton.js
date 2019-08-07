import React from 'react';
import NekoButtonP from "./NekoButtonP";
import {compose} from "redux";
import withStyle from "../../hoc_s/withStyle/withStyle";

const NekoButton = (props) => {
    return <NekoButtonP {...props}/>
};

export default compose(
    withStyle
)(NekoButton);
