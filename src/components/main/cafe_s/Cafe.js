import React from 'react';
import s from './Cafe.module.css';

const Cafe = (props) => {
    const logo = props.logo;
    const style = props.style;
    const title = props.title;
    const info = props.info;
    const id = props.id;
    const selectCafe = () => {props.selectCafe(id)};

    return (
        <div className={s.cafe} onClick={selectCafe} style={style.component}>
            <img src={logo} alt={logo}/>
            <div className={s.title} style={style.title}>
                <b>{title}</b>
            </div>
            <div className={s.info} style={style.title}>
                {info}
            </div>
        </div>
    );
};

export default Cafe;
