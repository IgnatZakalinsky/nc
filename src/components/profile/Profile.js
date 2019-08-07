import React from 'react';
import UserInfo from "./userInfo/UserInfo";
import Reviews from "./review_s/Reviews";
import ProfileOrders from "./profileOrder_s/ProfileOrders";

const ProfilePage = (props) => {
    return (
        <div>
            <UserInfo userId={props.userId}/>
            <Reviews/>
            <ProfileOrders/>
        </div>
    );
};

export default ProfilePage;
