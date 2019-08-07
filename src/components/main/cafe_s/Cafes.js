import React, {useEffect} from 'react';
import CafesP from "./CafesP";
import {compose} from "redux";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";

let Cafes = (props) => {
    const style = props.style;
    const cafe_s = [//props.cafe_s
        {id: 1, logo: 'logo1', title: 'title1', info: 'info1'},
        {id: 2, logo: 'logo2', title: 'title2', info: 'info2'},
        {id: 3, logo: 'logo3', title: 'title3', info: 'info3'},
    ];

    const cafe_s_more = () => {
        alert('added more cafe_s');
        //props.cafe_s_more();
    };
    const selectCafe = (id) => {
        alert('selected: ' + id);
        //props.selectCafe();
    };

    useEffect(() => {
        ////alert('didMount: props.getCafe_s');
        //props.getCafe_s();
    },[]);

    return  <CafesP cafe_s={cafe_s} selectCafe={selectCafe} cafe_s_more={cafe_s_more} style={style}/>;
};

export default compose(
    withStyle
)(Cafes);
