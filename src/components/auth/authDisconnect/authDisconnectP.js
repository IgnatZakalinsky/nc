import React from 'react';
import s from './AuthDisconnect.module.css';
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";

const AuthDisconnectP = (props) => {
    const logout = props.logout;
    const isLogouting = props.isLogouting;
    const style = props.style;

    return (
        <div className={s.question} style={style.component}>
            <div className={s.title}>
                Do you want disconnect?
            </div>
            <NekoButton onClick={logout} disabled={isLogouting} text={'logout'}/>
        </div>
    );
};

export default AuthDisconnectP;
