import React from 'react';
import s from './../UserInfo.module.css';
import {NavLink} from "react-router-dom";
import NekoButton from "../../../base/common/component_s/nekoButton/NekoButton";

const UserInfoAnother = (props) => {
    const profile = props.profile;
    const style = props.style;
    const ava = profile.photos.large || 'https://wmpics.pics/dt-VLQ721XU.gif';

    const startDialog = props.startDialog;

    return (<div className={s.userInfo} style={style.component}>
            <div className={s.profileTitle}>
                <img src={ava} alt={'ava'}/>
                <div className={s.name} style={style.title}>
                    <b>{profile.fullName}</b>
                </div>
            </div>
            <span className={s.statusTitle}>
                Status:
            </span>
            <span className={s.status} style={style.title}>
                {profile.status}
            </span>
            <div className={s.infoDiv}>
                <span className={s.infoTitle}>
                    About me:
                </span>
                <span className={s.info} style={style.title}>
                    {profile.aboutMe}
                </span>
                <NavLink to={`/chats/${profile.userId}`}>
                    <NekoButton onClick={startDialog} text={'go to dialog...'}/>
                </NavLink>
            </div>
        </div>
    );
};

export default UserInfoAnother;
