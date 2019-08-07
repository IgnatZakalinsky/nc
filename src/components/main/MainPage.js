import React from 'react';
import Cafes from "./cafe_s/Cafes";
import Navbar from "./navbar/Navbar";
import Orders from "./order_s/Orders";
import s from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <Cafes/>
            <Navbar/>
            <Orders/>
        </div>
    );
};

export default MainPage;
