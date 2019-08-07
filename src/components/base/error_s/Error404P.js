import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Error404.module.css';
import NekoButton from "../common/component_s/nekoButton/NekoButton";

const Error404P = (props) => {
    const style = props.style;

    return (
        <div className={s.error404} style={style.background}>
            <div style={style.error}>
                error404: Page not found!
            </div>
            <div className={s.block} style={style.component}>
                <img src={'https://pp.userapi.com/c854320/v854320307/a08d6/OH8B1PiURzs.jpg'} alt={'error img'}/>
                <NavLink to='/'>
                    <NekoButton style={style} text={'go home...'}/>
                </NavLink>
            </div>
        </div>
    );
};

export default Error404P;
