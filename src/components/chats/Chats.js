import React, {useEffect} from 'react';
import Dialogs from "./dialog_s/Dialogs";
import Messages from "./message_s/Messages";
import AddText from "./addText/AddText";
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {setSomethingInSession} from "../../reduxStore/reducers/mySessionReducer";
import {getDialogs, getMessages, sendMessage} from "../../reduxStore/thunks/chatThunk";
import {setSomethingInChat} from "../../reduxStore/reducers/chatReducer";
import s from './Chats.module.css';
import NekoButton from "../base/common/component_s/nekoButton/NekoButton";
import withStyle from "../base/common/hoc_s/withStyle/withStyle";
import {getMyProfileIdSelector} from "../../reduxStore/selectors/mySessionSelector_s";
import {
    getDialogsSelector,
    getMessagesSelector, getMyMessageSelector, getNewMessagesCountSelector,
    getSelectedDialogSelector
} from "../../reduxStore/selectors/chatSelector_s";

const ChatsPage = (props) => {
    const myProfileId = props.myProfileId;
    const checkedDialogId = props.userId;
    const dialogs = props.dialogs;
    const selectedDialog = props.selectedDialog;
    const messages = props.messages;
    const myMessage = props.myMessage;
    const style = props.style;
    const newMessagesCount = props.newMessagesCount;

    const sendMessage = props.sendMessage;
    const selectDialog = (id) => () => props.setSomethingInChat({selectedDialog: id});
    const onChangeMyText = (e) => props.setSomethingInChat({myMessage: e.currentTarget.value});

    useEffect(() => {
        selectDialog(checkedDialogId)();
        if (myProfileId) {
            props.getDialogs();
            if (selectedDialog) props.getMessages();
        }
    }, [selectedDialog, myProfileId, newMessagesCount]);

    if (!myProfileId) {
        props.setSomethingInSession({backRedirect: `chats/${checkedDialogId}`});
        return <NavLink to={'/auth'} className={s.login} style={style.background}>
            <div style={style.component} className={s.loginContent}>
                <div className={s.title}>You need to logined for see this</div>
                <NekoButton text={'login'}/>
            </div>
        </NavLink>;
    } else return (
        <div className={s.chats} style={style.background}>
            <Dialogs dialogs={dialogs} selectedDialog={selectedDialog} selectDialog={selectDialog}/>
            {selectedDialog != 0
                ? <div className={s.messages}>
                    <AddText myMessage={myMessage} onChange={onChangeMyText} sendMessage={sendMessage} style={style}/>
                    <Messages messages={messages} style={style} myProfileId={myProfileId}/>
                </div>
                : <div className={s.choose} style={style.component}>choose dialog...</div>
            }
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        myProfileId: getMyProfileIdSelector(state),
        dialogs: getDialogsSelector(state),
        selectedDialog: getSelectedDialogSelector(state),
        messages: getMessagesSelector(state),
        myMessage: getMyMessageSelector(state),
        newMessagesCount: getNewMessagesCountSelector(state),
    };
};
export default compose(
    withStyle,
    connect(mapStateToProps, {setSomethingInSession, getDialogs, setSomethingInChat, getMessages, sendMessage})
)(ChatsPage);
