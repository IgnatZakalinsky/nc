import React from 'react';
import Message from "./Message";
import AddText from "../../chats/addText/AddText";
import {compose} from "redux";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";
import {getMyProfileIdSelector} from "../../../reduxStore/selectors/mySessionSelector_s";
import {connect} from "react-redux";
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";
import s from './Reviews.module.css';

const Reviews = (props) => {
    const myProfileId = props.myProfileId;
    const style = props.style;
    const messages = [ //props.reviews;
        {id: 1, userId: 1, userAva: 'ava1', senderName: 'name1', body: 'message1', addedAt: ''},
        {id: 2, userId: 1, userAva: 'ava1', senderName: 'name1', body: 'message2', addedAt: ''},
        {id: 3, userId: 2, userAva: 'ava2', senderName: 'name2', body: 'message3', addedAt: ''},
    ];

    const review_s = messages.map(m => <Message message={m} style={style} key={m.id}/>);

    return (
        <div style={style.background} className={s.reviews}>
            {myProfileId ? <AddText style={style}/> : false}
            {review_s}
            <NekoButton text={'more...'}/>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfileId: getMyProfileIdSelector(state)
    };
};

export default compose(
    withStyle,
    connect(mapStateToProps)
)(Reviews);
