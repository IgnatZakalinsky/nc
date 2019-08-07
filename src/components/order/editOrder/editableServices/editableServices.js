import React from 'react';
import s from './editableServices.module.css';

const EditableServices = (props) => {
    const addedInfo = props.addedInfo;
    const style = props.style;

    const setInfo = (e) => props.setInfo(e.currentTarget.value);
    const setServices = (i) => (e) => props.setServices(i, e.currentTarget.checked);

    const servicesName_s = ['service1', 'service2', 'service3', 'service4'];
    const services = props.services.map((se, i) =>
        <div key={i}>{servicesName_s[i]}:
            <input type={'checkbox'} checked={se} onChange={setServices(i)}/>
        </div>);

    return (
        <div className={s.servicesOrder} style={style.component}>
            <div className={s.services}>
                {services}
            </div>
            <textarea className={s.addedInfo} onChange={setInfo} value={addedInfo} style={style.button}/>
        </div>
    );
};

export default EditableServices;
