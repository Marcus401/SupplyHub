import React from 'react'
import { Outlet } from 'react-router';

type Props = {};

const Settings = (props: Props) => {
    return (
        <>
            <div>Settings</div>
            <Outlet />
        </>
    );
};

export default Settings;
