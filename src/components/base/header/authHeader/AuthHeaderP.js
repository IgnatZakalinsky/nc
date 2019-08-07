import React from 'react';
import s from './AuthHeader.module.css';
import {NavLink} from "react-router-dom";
import NekoButton from "../../common/component_s/nekoButton/NekoButton";
import Loading from "../../common/component_s/loadingAndError/Loading";
import CountMessageHeader from "../countMessageHeader/CountMessageHeader";

const AuthHeaderP = (props) => {
    const myProfileId = props.myProfileId;
    const login = props.login;
    const myAva = props.myAva;
    const style = props.style;
    const isGettingFromS = props.isGettingFromSMe;

    return (
        <div className={s.bar}>
            <CountMessageHeader/>
            {myProfileId !== 0
                ? <NavLink to={`/profile/${myProfileId}`}>
                    <div className={s.profile}>
                        <img src={myAva} alt={'myAva'}/>
                        <b style={style.title}>
                            {login}
                        </b>
                    </div>
                </NavLink>
                : <Loading isGettingFromS={isGettingFromS}/>
            }
            <div className={s.button}>
                <NavLink to='/auth'>
                    <NekoButton text={myProfileId ? 'disconnect' : ' Login...'}/>
                </NavLink>
            </div>
        </div>
    );
};

export default AuthHeaderP;
