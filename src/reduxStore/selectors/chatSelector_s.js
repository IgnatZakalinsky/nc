import {createSelector} from "reselect";

const getNewMessagesCount = (state) => {
    return state.chat.newMessagesCount;
};
const getDialogs = (state) => {
    return state.chat.dialogs;
};
const getSelectedDialog = (state) => {
    return state.chat.selectedDialog;
};
const getMessages = (state) => {
    return state.chat.messages;
};
const getMyMessage = (state) => {
    return state.chat.myMessage;
};

export const getNewMessagesCountSelector = createSelector(
    [getNewMessagesCount],
    (newMessagesCount) => {
        return newMessagesCount;
    }
);
export const getDialogsSelector = createSelector(
    [getDialogs],
    (dialogs) => {
        return dialogs;
    }
);
export const getSelectedDialogSelector = createSelector(
    [getSelectedDialog],
    (selectedDialog) => {
        return selectedDialog;
    }
);
export const getMessagesSelector = createSelector(
    [getMessages],
    (messages) => {
        return messages;
    }
);
export const getMyMessageSelector = createSelector(
    [getMyMessage],
    (myMessage) => {
        return myMessage;
    }
);
