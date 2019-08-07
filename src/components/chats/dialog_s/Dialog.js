import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const dialog = props.dialog;
    const style = props.style;
    const time = `${dialog.lastUserActivityDate.slice(5, 10)} - ${dialog.lastUserActivityDate.slice(11, 16)}`;
    const selected = props.selectedDialog == dialog.id ? s.selected : s.none;

    const onClick = props.selectDialog;

    return (
        <NavLink to={`/chats/${dialog.id}`}>
            <div className={selected}>
                <div className={s.dialog} onClick={onClick} style={style.component}>
                    <img src={dialog.photos.small} alt={'ava'}/>
                    <div>
                        <b className={s.name} style={style.title}>
                        {dialog.userName}
                    </b>
                        <b style={style.title}>
                            {dialog.hasNewMessages && `[${dialog.newMessagesCount}]`}
                        </b>
                        <div style={style.title} className={s.time}>
                            {time}
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Dialog;
