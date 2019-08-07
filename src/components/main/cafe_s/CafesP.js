import React from 'react';
import {NavLink} from "react-router-dom";
import Cafe from "./Cafe";
import s from './Cafes.module.css';
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";

const CafesP = (props) => {
    const cafe_s = props.cafe_s;
    const style = props.style;

    const selectCafe = props.selectCafe;
    const cafe_s_more = props.cafe_s_more;

    const mappedCafe_s = cafe_s.map(c => <Cafe {...c} key={c.id} selectCafe={selectCafe} style={style}/>);

    return (
        <div className={s.cafes} style={style.background}>
            {mappedCafe_s}
            <NekoButton onClick={cafe_s_more} text={'more...'}/>
            <div className={s.addCafe}>
                <NavLink to='/addnewcafe'>
                    <NekoButton text={'add new cafe'}/>
                </NavLink>
            </div>
        </div>
    );
};

export default CafesP;
