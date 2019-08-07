import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Message.module.css';

const Message = (props) => {
    const message = props.message;
    const body = message.body || '';
    const style = props.style;
    const myProfileId = props.myProfileId;
    const time = `${message.addedAt.slice(5, 10)} - ${message.addedAt.slice(11, 16)}`;
    const userAva = props.ava || 'https://wmpics.pics/dt-VLQ721XU.gif';
    const notViewed = 'https://cdn.blog.st-hatena.com/images/emoji/ugomemo/e-335.gif';
    const myMessage = myProfileId == message.senderId ? style.button : style.component;

    const text = body.split('<br />').map((t, i) => <div key={i}>{t}</div>);

    return (
        <div className={s.message} style={myMessage}>
            <NavLink to={`/profile/${message.senderId}`}>
                <div className={s.title}>
                    <span style={style.title}>
                        {time}
                    </span>
                    <img src={userAva} alt={'ava'}/>
                    <b className={s.name} style={style.title}>{message.senderName}</b>
                </div>
            </NavLink>
            <div style={style.title}>
                <span className={s.text}>
                    {text}
                </span>
                {!message.viewed || <img src={notViewed} alt={'notViewed'}/>}
            </div>
        </div>
    );
};

export default Message;
