import React from 'react';
import {NavLink} from "react-router-dom";
import s from './CountMessageHeader.module.css';

const CountMessageHeaderP = (props) => {
    const newMessagesCount = props.newMessagesCount;

    if (!newMessagesCount) return false;
    else return (
        <NavLink to={'/chats/0'} className={s.newMessagesCount}>
                <b style={props.style.title}>
                    [{newMessagesCount}]
                </b>
        </NavLink>
    );
};

export default CountMessageHeaderP;
