import React, {useEffect} from 'react';
import CountMessageHeaderP from "./CountMessageHeaderP";
import {compose} from "redux";
import {connect} from "react-redux";
import {getNewMessagesCount} from "../../../../reduxStore/thunks/chatThunk";
import withStyle from "../../common/hoc_s/withStyle/withStyle";
import {getNewMessagesCountSelector} from "../../../../reduxStore/selectors/chatSelector_s";
import {getMyProfileIdSelector} from "../../../../reduxStore/selectors/mySessionSelector_s";

const CountMessageHeader = (props) => {
    const myProfileId = props.myProfileId;
    const newMessagesCount = props.newMessagesCount;

    useEffect(() => {
        if (myProfileId) {
            props.getNewMessagesCount();
        }
    }, [myProfileId]);

    return (
        <CountMessageHeaderP newMessagesCount={newMessagesCount} style={props.style}/>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfileId: getMyProfileIdSelector(state),
        newMessagesCount: getNewMessagesCountSelector(state),
    };
};

export default compose(
    withStyle,
    connect(mapStateToProps, {getNewMessagesCount})
)(CountMessageHeader);
