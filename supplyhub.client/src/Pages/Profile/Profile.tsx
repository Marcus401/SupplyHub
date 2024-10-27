import React from 'react'
import { Outlet } from 'react-router-dom';

type Props = {};

const Profile = (props: Props) => {
    return (
        <>
            <div>Profile</div>
            <Outlet />
        </>
    );
};

export default Profile;
