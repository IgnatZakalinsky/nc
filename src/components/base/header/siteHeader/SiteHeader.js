import React from 'react';
import {NavLink} from "react-router-dom";
import s from './SiteHeader.module.css';
import {compose} from "redux";
import withStyle from "../../common/hoc_s/withStyle/withStyle";

const SiteHeader = (props) => {
    return (
        <NavLink to='/'>
            <div className={s.site}>
                <img src={'https://pp.userapi.com/c854320/v854320307/a08dd/9Ae07txHMjw.jpg'} alt={'logo'}/>
                <h4 style={props.style.header}>
                    [Покорми Котика] Feed the kitten
                </h4>
            </div>
        </NavLink>
    );
};

export default compose(
    withStyle
)(SiteHeader);
