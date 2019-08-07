import React from 'react';
import s from './MappedOrder.module.css';

const MappedOrder = (props) => {
    const order = props.order;
    const style = props.style;

    const mappedOrder = order.map((o, i) => <div key={i} style={style.title}>&nbsp;[{o.foodName}: {o.foodCount}]</div>);

    return (
        <div className={s.order}>
            {mappedOrder}
        </div>
    );
};

export default MappedOrder;
