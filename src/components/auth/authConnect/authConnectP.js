import React from 'react';
import s from './AuthConnect.module.css';
import Form2input1button from "../../base/common/component_s/form2input1button/Form2input1button";

const AuthConnectP = (props) => {
    const login = props.login;
    const isLogining = props.isLogining;
    const style = props.style;

    const setAPIKey = (e) => props.setAPIKey(e.currentTarget.value);

    return (
        <div className={s.input_s} style={style.component}>
            <Form2input1button placeholder1={'name'} placeholder2={'password'} pass={true} buttonName={'login...'}
                               onClick={login} isGettingFromS={isLogining} style={style}/>
            //...rememberMe, capcha
            <a href="https://social-network.samuraijs.com/signUp" style={style.title}>Registration</a>
            Your API KEY (do not share this key with third parties):
            <input onChange={setAPIKey}/>
        </div>
    );
};

export default AuthConnectP;
