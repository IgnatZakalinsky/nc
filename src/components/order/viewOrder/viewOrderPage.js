import React from 'react';
import ViewOrderPageP from "./viewOrderPageP";
import {compose} from "redux";
import {connect} from "react-redux";
import {getMyProfileIdSelector} from "../../../reduxStore/selectors/mySessionSelector_s";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";

const ViewOrderPage = (props) => {
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

    return <ViewOrderPageP myProfileId={myProfileId} order={order} selectCafe={selectCafe} style={style}/>;
};

let mapStateToProps = (state) => {
    return {
        myProfileId: getMyProfileIdSelector(state)
    };
};

export default compose(
    withStyle,
    connect(mapStateToProps)
)(ViewOrderPage);
