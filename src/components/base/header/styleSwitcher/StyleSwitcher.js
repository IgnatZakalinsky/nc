import React from 'react';
import {getAllStyle_s} from "../../../../reduxStore/selectors/styleSelector_s";
import {compose} from "redux";
import {connect} from "react-redux";
import {setStyle} from "../../../../reduxStore/reducers/styleReducer";
import withStyle from "../../common/hoc_s/withStyle/withStyle";
import s from './StyleSwitcher.module.css';

const StyleSwitcher = (props) => {
    const onChange = (e) => props.setStyle(e.currentTarget.value);
    const mappedStyle_s = props.style_s.map(s => <option style={s.header} key={s.id}>{s.name}</option>);

    return (
        <div className={s.select}>
            <div>Style:</div>
            <select style={props.style.header} onChange={onChange}>
                {mappedStyle_s}
            </select>
        </div>

    );
};

let mapStateToProps = (state) => {
    return {
        style_s: getAllStyle_s(state),
    };
};

export default compose(
    withStyle,
    connect(mapStateToProps, {setStyle})
)(StyleSwitcher);
