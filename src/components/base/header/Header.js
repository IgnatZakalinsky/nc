import React from 'react';
import s from './Header.module.css'
import SiteHeader from "./siteHeader/SiteHeader";
import AuthHeader from "./authHeader/AuthHeader";
import StyleSwitcher from "./styleSwitcher/StyleSwitcher";
import {compose} from "redux";
import withStyle from "../common/hoc_s/withStyle/withStyle";

const Header = (props) => {
    return (
        <div className={s.header} style={props.style.header}>
            <SiteHeader/>
            <StyleSwitcher/>
            <AuthHeader/>
        </div>
    );
};

export default compose(
    withStyle
)(Header);
