import React from 'react';
import Loading from "../loadingAndError/Loading";

const NekoButtonP = (props) => {
    const style = props.style;
    const text = props.text;
    const disabled = props.disabled;

    const onClick = props.onClick;

    return (
        <div>
            <button style={style.button} onClick={onClick} disabled={disabled}>
                {text}
            </button>
            <Loading isGettingFromS={disabled}/>
        </div>

    );
};

export default NekoButtonP;
