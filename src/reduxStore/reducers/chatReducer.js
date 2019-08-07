const SET_SOMETHING = 'SET_SOMETHING';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
const RESET_MESSAGE_COUNT = 'RESET_MESSAGE_COUNT';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_NEW_MESSAGES_COUNT = 'SET_NEW_MESSAGES_COUNT';
const SET_NEW_MESSAGES_COUNT_TIMER = 'SET_NEW_MESSAGES_COUNT_TIMER';

const initialState = {
    dialogs: [
        {
            hasNewMessages: false,
            id: 0,
            lastDialogActivityDate: "2019-07-25T10:56:52.087",
            lastUserActivityDate: "2019-07-30T12:41:06.09",
            newMessagesCount: 0,
            photos: {
                small: "",
                large: ""
            },
            userName: "defName",
        },
    ],
    selectedDialog: 0,
    messages: [{
        addedAt: "2019-07-12T18:15:27.267",
        body: "defText",
        id: "5d8f9dc7-a1d7-45fa-898c-eb4afffc1f86",
        recipientId: 0,
        senderId: 0,
        senderName: "defName",
        translatedBody: null,
        viewed: true
    }],
    totalCountMessages: 0,
    myMessage: '',
    newMessagesCount: 0,
    newMessagesCountTimer: null,
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SOMETHING:
            return {...state, ...action.payload};
        case SET_DIALOGS:
            return {...state, dialogs: action.payload};
        case SET_NEW_MESSAGES_COUNT_TIMER:
            return {...state, newMessagesCountTimer: action.payload};
        case SET_NEW_MESSAGES_COUNT:
            return {...state, newMessagesCount: action.payload};
        case CLEAR_MESSAGE:
            return {...state, myMessage: ''};
        case SET_MESSAGES:
            return {...state, messages: action.payload.messages, totalCountMessages: action.payload.totalCountMessages};
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, ...action.payload]};
        case RESET_MESSAGE_COUNT:
            return {...state, messages: [], dialogs: [], selectedDialog: 0, myMessage: '', newMessagesCount: 0};
        default:
            return state;
    }
};

export const setSomethingInChat = (something) => ({type: SET_SOMETHING, payload: something});
export const setNewMessagesCountTimer = (newMessagesCountTimer) => ({
    type: SET_NEW_MESSAGES_COUNT_TIMER, payload: newMessagesCountTimer
});
export const setDialogs = (dialogs) => ({type: SET_DIALOGS, payload: dialogs});
export const setMessages = (mess) => ({type: SET_MESSAGES, payload: mess});
export const setNewMessagesCount = (newMessagesCount) => ({type: SET_NEW_MESSAGES_COUNT, payload: newMessagesCount});
export const addNewMessages = (messages) => ({type: ADD_MESSAGE, payload: messages});
export const resetMessageCount = () => ({type: RESET_MESSAGE_COUNT});
export const clearMessage = () => ({type: CLEAR_MESSAGE});

export default chatReducer;