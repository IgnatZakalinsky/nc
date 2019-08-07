import {
    setIsGettingFromSDialogs,
    setIsGettingFromSMessages,
    setIsGettingFromSSendMessage
} from "../reducers/mySessionReducer";
import {DialogsAPI} from "../../apiAxios/dialogsAPI";
import {
    addNewMessages,
    clearMessage,
    setDialogs,
    setMessages,
    setNewMessagesCount, setNewMessagesCountTimer
} from "../reducers/chatReducer";

export const getDialogs = () => (dispatch) => {
    dispatch(setIsGettingFromSDialogs(true));
    DialogsAPI.getDialogs().then(response => {
        dispatch(setIsGettingFromSDialogs(false));
        if (response.status === 200) dispatch(setDialogs(response.data));
        else {
            alert("I can't get dialogs from server!");
            console.log(response);
        }
    });
};
export const getMessages = () => (dispatch, getState) => {
    dispatch(setIsGettingFromSMessages(true));
    DialogsAPI.getMessages(getState().chat.selectedDialog).then(response => {
        dispatch(setIsGettingFromSMessages(false));
        if (response.status === 200) dispatch(setMessages({
            messages: response.data.items, totalCountMessages: response.data.totalCount
        }));
        else {
            alert("I can't get messages from server!");
            console.log(response);
        }
    });
};
export const sendMessage = () => (dispatch, getState) => {
    dispatch(setIsGettingFromSSendMessage(true));
    DialogsAPI.sendMessage(getState().chat.selectedDialog, getState().chat.myMessage).then(response => {
        dispatch(setIsGettingFromSSendMessage(false));
        if (response.status === 200) {
            dispatch(addNewMessages([response.data.data.message])); //get newest than date
            dispatch(clearMessage());
            getDialogs()(dispatch); // up dialog
        }
        else  {
            alert("I can't send message to server!");
            console.log(response);
        }
    });
};
export const startDialog = (userId) => (dispatch) => {
    DialogsAPI.startDialog(userId).then(response => {
        if (response.status !== 200) {
            alert("I can't start dialog!");
            console.log(response);
        }
    });
};
export const getNewMessagesCount = () => (dispatch) => {
    DialogsAPI.getNewMessagesCount().then(response => {
        if (response.status === 200) {
            dispatch(setNewMessagesCount(response.data));
            dispatch(setNewMessagesCountTimer(setTimeout(() => {
                getNewMessagesCount()(dispatch);
            }, 600000)));
        }
        else {
            alert("I can't get NewMessagesCount from server!");
            console.log(response);
        }
    });
};

