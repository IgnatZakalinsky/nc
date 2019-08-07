import React from 'react';
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";
import s from './AddText.module.css';

const AddText = (props) => {
    const myMessage = props.myMessage || '';
    const sendMessage = props.sendMessage;
    const style = props.style;

    const onChange = (e) => props.onChange(e);
    const enter = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
            <div className={s.message}>
                <div className={s.area}>
                    <textarea value={myMessage} onChange={onChange} style={style.button} rows={4} cols={31}
                              onKeyPress={enter}/>
                </div>
                <NekoButton onClick={sendMessage} text={'send'}/>
            </div>
    )
};

export default AddText;
