import React, {useState} from 'react';
import NekoButton from "../nekoButton/NekoButton";
import s from './Form2input1button.module.css';
import Loading from "../loadingAndError/Loading";

const Form2input1button = (props) => {
    const placeholder1 = props.placeholder1;
    const placeholder2 = props.placeholder2;
    const pass = props.pass;
    const buttonName = props.buttonName;
    const isGettingFromS = props.isGettingFromS;
    const style = props.style;

    const [input1, changeInput1x] = useState('');
    const [input2, changeInput2x] = useState('');
    const changeInput1 = (e) => changeInput1x(e.currentTarget.value);
    const changeInput2 = (e) => changeInput2x(e.currentTarget.value);

    const onClick = () => {
        if (input1 && input2) props.onClick(input1, input2);
        else alert(`not correct ${placeholder1}/${placeholder2}!`);
    };

    return (
        <div className={s.form21}>
            <input placeholder={placeholder1} value={input1} onChange={changeInput1} style={style.button}/>
            {pass
                ? <input placeholder={placeholder2} value={input2} onChange={changeInput2} type={'password'}
                         style={style.button}/>
                : <input placeholder={placeholder2} value={input2} onChange={changeInput2} style={style.button}/>
            }
            <NekoButton onClick={onClick} disabled={isGettingFromS} text={buttonName}/>
        </div>
    );
};

export default Form2input1button;
