import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import MainPage from "./components/main/MainPage";
import ChatsPage from "./components/chats/Chats";
import ProfilePage from "./components/profile/Profile";
import ViewOrderPage from "./components/order/viewOrder/viewOrderPage";
import EditOrderPage from "./components/order/editOrder/editOrderPage";
import AuthPage from "./components/auth/auth";
import Header from "./components/base/header/Header";
import Error404 from "./components/base/error_s/Error404";
import AddNewCafe from "./components/main/addNewCafe/AddNewCafe";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className={'content'}>
                <Switch>
                    <Route exact path='/' render={() => <MainPage/>}/>
                    <Route exact path='/auth' render={() => <AuthPage/>}/>
                    <Route exact path='/addnewcafe' render={() => <AddNewCafe/>}/>

                    <Route path='/chats/:userId?' render={(props) =>
                        <ChatsPage userId={props.match.params.userId}/>}/>
                    <Route path='/profile/:userId?' render={(props) =>
                        <ProfilePage userId={props.match.params.userId}/>}/>

                    <Route path='/vieworder/:orderId?' render={(props) =>
                        <ViewOrderPage orderId={props.match.params.orderId}/>}/>
                    <Route path='/editorder/:orderId?' render={(props) =>
                        <EditOrderPage orderId={props.match.params.orderId}/>}/>

                    <Route render={() => <Error404/>}/>
                </Switch>
            </div>
            <div className={'footer'}>footer(reklama)</div>
        </div>
    );
};

export default App;
