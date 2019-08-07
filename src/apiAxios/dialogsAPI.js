import {instance} from './authAPI';

export const DialogsAPI = {
    getDialogs() {
        return instance.get('dialogs')
    },
    startDialog(userId) {
        return instance.put(`dialogs/${userId}`)
    },
    getMessages(userId) {
        return instance.get(`dialogs/${userId}/messages`)
    },
    sendMessage(userId, body) {
        return instance.post(`dialogs/${userId}/messages`, {body})
    },
    getNewMessagesCount() {
        return instance.get(`dialogs/messages/new/count`)
    },

};
