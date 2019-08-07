import React from 'react';
import {NavLink} from "react-router-dom";
import Order from "./Order";
import s from './Orders.module.css';
import Cafe from "../cafe_s/Cafe";
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";

const OrdersP = (props) => {
    const order_s = props.order_s;
    const style = props.style;
    const selectedCafe = props.selectedCafe;

    const order_s_more = props.order_s_more;
    const setOrder = props.setOrder;

    const mappedOrder_s = order_s.map(o => <Order {...o} key={o.id} setOrder={setOrder(o.id)} style={style}/>);

    return (
        <div className={s.order_s} style={style.background}>
            <div className={s.selectedCage} style={style.title}>
                Selected Cafe:
            </div>
            <Cafe {...selectedCafe} id={'nothing'} selectCafe={() => {
            }} style={style}/>
            <div>
                <div className={s.newOrder}>
                    <NavLink to='/editorder/0'>
                        <NekoButton text={'add new order'}/>
                    </NavLink>
                </div>
                {mappedOrder_s}
                <NekoButton onClick={order_s_more} text={'more...'}/>
            </div>
        </div>
    );
};

export default OrdersP;
