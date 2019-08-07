import React, {useState} from 'react';
import {compose} from "redux";
import withStyle from "../../hoc_s/withStyle/withStyle";

const ImgFile = ({def = '', alt = 'img', ...props}) => {
    const [logo, setLogo] = useState(def);
    const [fileImg, setFileImg] = useState('');

    const changeLogo = (input) => {
        let reader = new FileReader();
        setFileImg(input.target.files[0]); //???

        reader.onload = e => setLogo(e.target.result);
        input.target.files[0] && reader.readAsDataURL(input.target.files[0]);
    };

    return (
        <div>
            <img src={logo} alt={alt}/>
            <input type={'file'} onChange={changeLogo} style={props.style.button}/>
        </div>
    );
};

export default compose(
    withStyle
)(ImgFile);
