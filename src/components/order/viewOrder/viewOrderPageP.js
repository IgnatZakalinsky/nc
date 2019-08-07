import React from 'react';
import {NavLink} from "react-router-dom";
import s from './viewOrderPage.module.css';
import TitleOrder from "./titleOrder/TitleOrder";
import MappedOrder from "./mappedOrder/MappedOrder";
import ServicesOrder from "./servicesOrder/ServicesOrder";
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";

const ViewOrderPageP = (props) => {
    const myProfileId = props.myProfileId;
    const style = props.style;
    const order = props.order;

    const selectCafe = () => props.selectCafe(order.cafeId);

    const count = order.order.reduce((c, o) => o.foodCount + c, 0);

    return (
        <div className={s.viewOrder} style={style.background}>
            <TitleOrder count={count} userId={order.userId} ava={order.ava} name={order.name} logo={order.logo}
                        title={order.title} selectCafe={selectCafe} style={style}/>
            <MappedOrder order={order.order} style={style}/>
            <ServicesOrder services={order.services} addedInfo={order.addedInfo} style={style}/>
            {myProfileId === order.userId
                ? <NavLink to={`/editorder/${order.id}`}>
                    <NekoButton text={'go to edit order'}/>
                </NavLink>
                : <NavLink to={`/chats/${order.userId}`}>
                    <NekoButton text={'go to dialog'}/>
                </NavLink>
            }
        </div>
    );
};

export default ViewOrderPageP;
