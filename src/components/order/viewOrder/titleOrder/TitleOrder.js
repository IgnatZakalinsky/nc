import React from 'react';
import {NavLink} from "react-router-dom";
import s from './TitleOrder.module.css';

const TitleOrder = (props) => {
    const count = props.count;
    const userId = props.userId;
    const ava = props.ava;
    const name = props.name;
    const logo = props.logo;
    const title = props.title;
    const style = props.style;

    const selectCafe = props.selectCafe;

    return (
        <div className={s.title} style={style.component}>
            <NavLink to={`/`} onClick={selectCafe}>
                <img src={logo} alt={logo}/>
                <div className={s.cafe} style={style.title}>
                    <b>{title}</b>
                </div>
            </NavLink>
            <NavLink to={`/profile/${userId}`}>
                <img src={ava} alt={'ava'}/>
                <div className={s.name} style={style.title}>
                    <b>{name}</b>
                </div>
            </NavLink>
            TotalCount:
            <div className={s.count} style={style.title}>
                <b>{count}</b>
            </div>
        </div>
    );
};

export default TitleOrder;
