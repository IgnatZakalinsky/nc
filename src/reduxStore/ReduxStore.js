import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import mySessionReducer from "./reducers/mySessionReducer";
import profileReducer from "./reducers/profileReducer";
import chatReducer from "./reducers/chatReducer";
import styleReducer from "./reducers/styleReducer";

let redusers = combineReducers({
    mySession: mySessionReducer,
    profile: profileReducer,
    chat: chatReducer,
    style: styleReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;