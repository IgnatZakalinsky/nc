import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import EditOrderPageP from "./editOrderPageP";
import {compose} from "redux";
import {connect} from "react-redux";
import {setSomethingInSession} from "../../../reduxStore/reducers/mySessionReducer";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";
import {getMyProfileIdSelector} from "../../../reduxStore/selectors/mySessionSelector_s";
import s from "../../chats/Chats.module.css";
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";

let EditOrderPage = (props) => {
    const myProfileId = props.myProfileId;
    const style = props.style;
    const order = { //props.order;
        cafeId: 1, logo: 'logo1', title: 'title1', id: 3, ava: 'ava3', name: 'name3', userId: 3, order: [
            {foodName: 'foodName1', foodCount: 1},
            {foodName: 'foodName2', foodCount: 2},
            {foodName: 'foodName3', foodCount: 3},
            {foodName: 'foodName3', foodCount: 4},
            {foodName: 'foodName3', foodCount: 5},
            {foodName: 'foodName3', foodCount: 6},
            {foodName: 'foodName3', foodCount: 7},
            {foodName: 'foodName3', foodCount: 8},
        ], services: [true, false, true, false],
        addedInfo: 'addedInfo'
    };

    const selectCafe = (id) => {
        alert('selected: ' + id);
        //props.selectCafe();
    };
    const save = () => {
        alert('saving...');
        //props.save();
    };
    const removeLast = () => {
        alert('removingLast...');
        //props.removeLast();
    };
    const setInfo = (info) => {
        alert('setingInfo[' + info + ']...');
        //props.setInfo(info);
    };
    const addFood = (foodName, foodCount) => {
        alert(`adding [${foodName}/${foodCount}]...`);
        //props.addFood(foodName, foodCount);
    };
    const setServices = (service, set) => {
        alert(`setingServices [${service}/${set}]...`);
        //props.setServices(service, set);
    };

    if (!myProfileId) {
        props.setSomethingInSession({backRedirect: `editorder/${props.orderId}`});
        return <NavLink to={'/auth'} className={s.login} style={style.background}>
            <div style={style.component} className={s.loginContent}>
                <div className={s.title}>You need to logined for see this</div>
                <NekoButton text={'login'}/>
            </div>
        </NavLink>;
    } else if (props.orderId == '0' || myProfileId == order.userId) return <EditOrderPageP order={order}
                                                                                     selectCafe={selectCafe} save={save}
                                                                                     addFood={addFood} style={style}
                                                                                     removeLast={removeLast}
                                                                                     setServices={setServices}
                                                                                     setInfo={setInfo}/>;
    else return <Redirect to={'/error'}/>;
};

let mapStateToProps = (state) => {
    return {
        myProfileId: getMyProfileIdSelector(state),
    };
};

export default compose(
    withStyle,
    connect(mapStateToProps, {setSomethingInSession})
)(EditOrderPage);
