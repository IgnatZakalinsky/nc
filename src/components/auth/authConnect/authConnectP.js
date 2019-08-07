import React from 'react';
import s from './AuthConnect.module.css';
import Form2input1button from "../../base/common/component_s/form2input1button/Form2input1button";

const AuthConnectP = (props) => {
    const login = props.login;
    const isLogining = props.isLogining;
    const style = props.style;

    return (
        <div className={s.input_s} style={style.component}>
            <Form2input1button placeholder1={'name'} placeholder2={'password'} pass={true} buttonName={'login...'}
                               onClick={login} isGettingFromS={isLogining} style={style}/>
            ...rememberMe, capcha, registration, userKey
        </div>
    );
};

export default AuthConnectP;
