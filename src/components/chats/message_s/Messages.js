import React from 'react';
import Message from "../../profile/review_s/Message";
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";
import s from './Messages.module.css';

const Messages = (props) => {
    const messages = props.messages;
    const style = props.style;
    const myProfileId = props.myProfileId;

    const review_s = [...messages].reverse().map(m => <Message message={m} key={m.id} style={style}
                                                myProfileId={myProfileId}/>);

    return (
        <div className={s.messages}>
            {review_s}
            <NekoButton text={'more...'}/>
        </div>
    );
};

export default Messages;
