import React from 'react';
import s from "./editOrderPage.module.css";
import MappedOrder from "../viewOrder/mappedOrder/MappedOrder";
import TitleOrder from "../viewOrder/titleOrder/TitleOrder";
import Form2input1button from "../../base/common/component_s/form2input1button/Form2input1button";
import EditableServices from "./editableServices/editableServices";
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";

const EditOrderPageP = (props) => {
    const order = props.order;
    const style = props.style;

    const selectCafe = () => props.selectCafe(order.cafeId);
    const save = props.save;
    const addFood = props.addFood;
    const removeLast = props.removeLast;
    const setServices = props.setServices;
    const setInfo = props.setInfo;

    const count = order.order.reduce((c, o) => o.foodCount + c, 0);

    return (
        <div className={s.editOrder} style={style.background}>
            EditOrderPage:
            <TitleOrder count={count} userId={order.userId} ava={order.ava} name={order.name} logo={order.logo}
                        title={order.title} selectCafe={selectCafe} style={style}/>
            <MappedOrder order={order.order} style={style}/>
            <Form2input1button placeholder1={'foodName'} placeholder2={'foodCount'} pass={false} buttonName={'add'}
                               onClick={addFood} style={style}/>
            <NekoButton onClick={removeLast} text={'remove last'}/>
            <EditableServices services={order.services} addedInfo={order.addedInfo} setServices={setServices}
                           setInfo={setInfo} style={style}/>
            <NekoButton onClick={save} text={'save order'}/>
        </div>
    );
};

export default EditOrderPageP;
