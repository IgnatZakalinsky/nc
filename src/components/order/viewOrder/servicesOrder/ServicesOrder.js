import React from 'react';
import s from './ServicesOrder.module.css';

const ServicesOrder = (props) => {
    const style = props.style;
    const servicesName_s = ['service1', 'service2', 'service3', 'service4'];
    const services = props.services.map((se, i) =>
        <div key={i}>{servicesName_s[i]}: {se
            ? <span className={s.true}>v</span>
            : <span className={s.false}>x</span>}
        </div>);

    const addedInfo = props.addedInfo;

    return (
        <div className={s.servicesOrder} style={style.component}>
            <div className={s.services}>
                {services}
            </div>
            <div className={s.addedInfo} style={style.title}>
                {addedInfo}
            </div>
        </div>
    );
};

export default ServicesOrder;
