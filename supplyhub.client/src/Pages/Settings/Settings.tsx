import React, {useEffect} from 'react'
import { Outlet } from 'react-router';

type Props = {};

const Settings = (props: Props) => {
    useEffect(() => {
        document.title = 'Settings';
    }, []);

    return (
        <>
            <div>Settings</div>
            <Outlet />
        </>
    );
};

export default Settings;
