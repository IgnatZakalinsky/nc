import React from 'react';
import s from './Order.module.css';
import {NavLink} from "react-router-dom";

const Order = (props) => {
    const ava = props.ava;
    const style = props.style;
    const name = props.name;
    const order = props.order;
    const services = props.services;
    const id = props.id;

    const setOrder = props.setOrder;

    const count = order.reduce((c, o) => o.foodCount + c, 0);
    const mappedOrder = order.map((o, i) => <div key={i} style={style.title}>&nbsp;[{o.foodName}: {o.foodCount}]</div>);
    const mappedServices = services.map((se, i) => {
        if (se) return <span key={i} className={s.true}>&nbsp;v</span>;
        else return <span key={i} className={s.false}>&nbsp;x</span>;
    });

    return (
        <NavLink to={`/vieworder/${id}`}>
            <div className={s.order} onClick={setOrder} style={style.component}>
                <div className={s.title}>
                    <img src={ava} alt={ava}/>
                    <div className={s.name} style={style.title}>
                        <b>{name}</b>
                    </div>
                    TotalCount:
                    <div className={s.count} style={style.title}>
                        <b>{count}</b>
                    </div>
                </div>
                <div className={s.mOrder}>
                    {mappedOrder}
                </div>
                <div className={s.services}>
                    {mappedServices}
                </div>
            </div>
        </NavLink>
    );
};

export default Order;
