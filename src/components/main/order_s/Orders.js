import React, {useEffect} from 'react';
import OrdersP from "./OrdersP";
import {compose} from "redux";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";

let Orders = (props) => {
    const style = props.style;
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
    const selectedCafe = { //props.selectedCafe;
        id: 1, logo: 'logo1', title: 'title1', info: 'info1'
    };

    const setOrder = (orderId) => () => {
        alert('setOrder(' + orderId + ')!')
        //props.setOrder(orderId);
    };
    const order_s_more = () => {
        alert('added more order_s');
        //props.order_s_more();
    };

    useEffect(() => {
        ////alert('didMount: props.getOrder_s');
        //props.getCafe_s();
    }, []);

    return <OrdersP order_s={order_s} order_s_more={order_s_more} setOrder={setOrder} selectedCafe={selectedCafe}
                    style={style}/>;
};

export default compose(
    withStyle
)(Orders);
