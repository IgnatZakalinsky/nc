import React from 'react';
import s from './AddNewCafe.module.css';
import ImgFile from "../../base/common/component_s/imgFile/ImgFile";
import Form2input1button from "../../base/common/component_s/form2input1button/Form2input1button";

const AddNewCafeP = (props) => {
    const addCafe = props.addCafe;
    const style = props.style;

    return (
        <div className={s.addNewCafe} style={style.background}>
            AddNewCafe:
            <div className={s.input_s} style={style.component}>
                <ImgFile def={'def'} alt={'logo'}/>
                <br/>
                <Form2input1button placeholder1={'title'} placeholder2={'info'} pass={false} buttonName={'add cafe'}
                                   onClick={addCafe} style={style}/>
            </div>
        </div>
    );
};

export default AddNewCafeP;
