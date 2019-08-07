import React from 'react';
import Order from "../../main/order_s/Order";
import {compose} from "redux";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";
import s from './ProfileOrders.module.css';

const ProfileOrders = (props) => {
    const style = props.style;
    //getProfileOrdwr_s();
    const order_s = [ //props.order_s;
        {
            cafeId: 1, logo: 'logo1', title: 'title1', id: 1, ava: 'ava1', name: 'name1', userId: 1, order: [
                {foodName: 'foodName1', foodCount: 1},
                {foodName: 'foodName2', foodCount: 2},
            ], services: [true, true, true, false],
            addedInfo: ''
        },
        {
            cafeId: 1, logo: 'logo1', title: 'title1', id: 2, ava: 'ava2', name: 'name2', userId: 2, order: [
                {foodName: 'foodName1', foodCount: 1},
            ], services: [true, true, false, false],
            addedInfo: ''
        },
        {
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
            addedInfo: ''
        },
    ];

    const setOrder = (orderId) => () => {
        alert('setOrder(' + orderId + ')!')
        //props.setOrder(orderId);
    };
    const order_s_more = () => {
        alert('added more order_s');
        //props.order_s_more();
    };

    const mappedOrder_s = order_s.map(o => <Order {...o} key={o.id} setOrder={setOrder(o.id)} style={style}/>);

    return (
        <div style={style.background} className={s.profileOrders}>
            {mappedOrder_s}
            <NekoButton onClick={order_s_more} text={'more...'}/>
        </div>
    );
};

export default compose(
    withStyle
)(ProfileOrders);
