import React from 'react';
import Dialog from "./Dialog";
import NekoButton from "../../base/common/component_s/nekoButton/NekoButton";
import s from './Dialog.module.css';
import {compose} from "redux";
import withStyle from "../../base/common/hoc_s/withStyle/withStyle";

const Dialogs = (props) => {
    const dialogs = props.dialogs;
    const selectedDialog = props.selectedDialog;
    const style = props.style;

    const selectDialog = props.selectDialog;

    const mappedDialog_s = dialogs.map(d => <Dialog dialog={d} key={d.id} selectedDialog={selectedDialog}
                                                    selectDialog={selectDialog(d.id)} style={style}/>);

    return (
        <div className={s.dialogs}>
            {mappedDialog_s}
            <NekoButton text={'more...'}/>
        </div>
    );
};

export default compose(
    withStyle
)(Dialogs);
