import React from 'react';
import {NavLink} from "react-router-dom";
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";
import {compose} from "redux";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";
import {getMyProfileIdSelector} from "../../../reduxStore/selectors/mySessionSelector_s";
import {connect} from "react-redux";
import s from './Navbar.module.css';

const Navbar = (props) => {
    const myProfileId = props.myProfileId || -1;
    const style = props.style;

    return (
        <div className={s.navbar} style={style.background}>
            <NavLink to='/chats/0'>
                <NekoButton text={'chats'}/>
            </NavLink>
            <NavLink to={`/profile/${myProfileId}`}>
                <NekoButton text={'profile'}/>
            </NavLink>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfileId: getMyProfileIdSelector(state),
    };
};

export default compose(
    withStyle,
    connect(mapStateToProps)
)(Navbar);
