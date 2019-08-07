import React from 'react';
import s from './../UserInfo.module.css';
import ImgFile from "../../../base/common/component_s/imgFile/ImgFile";
import NekoButton from "../../../base/common/component_s/nekoButton/NekoButton";

const UserInfoMy = (props) => {
    const profile = props.profile;
    const aboutMe = profile.aboutMe || '';
    const style = props.style;
    const ava = profile.photos.large || 'https://wmpics.pics/dt-VLQ721XU.gif';

    const save = props.save;
    const aboutMeChange = props.aboutMeChange;
    const statusChange = props.statusChange;


    return (
        <div className={s.userInfo} style={style.component}>
            <div className={s.profileTitle}>
                <ImgFile def={ava} alt={'ava'}/>
                <div className={s.name} style={style.title}>
                    <b>{profile.fullName}</b>
                </div>
            </div>
            <span className={s.statusTitle}>
                Status:
            </span>
            <input className={s.status} value={profile.status} onChange={statusChange} style={style.button}/>
            <br/>
            <div className={s.infoDiv}>
                <span className={s.infoTitle}>
                    About me:
                </span>
                <textarea className={s.info} value={aboutMe} onChange={aboutMeChange} style={style.button}
                          cols={31}/>
                <NekoButton onClick={save} text={'save'}/>
            </div>
        </div>
    );
};

export default UserInfoMy;
