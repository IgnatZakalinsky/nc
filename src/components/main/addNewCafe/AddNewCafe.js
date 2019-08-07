import React from 'react';
import AddNewCafeP from "./AddNewCafeP";
import withSuccessRedirect from "../../base/common/hoc_s/withSuccessRedirect/withSuccessRedirect";
import {compose} from "redux";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";

let AddNewCafe = (props) => {
    const style = props.style;

    const addCafe = (title, info) => {
        if (title && info) {
            alert('adding cafe...! [' + title + ' : ' + info + ']');
            //props.addCafe(fileImg, title, info);
        }
    };

    return <AddNewCafeP addCafe={addCafe} style={style}/>;
};

const message = 'success create!';

export default compose(
    withSuccessRedirect(message),
    withStyle
)(AddNewCafe);
