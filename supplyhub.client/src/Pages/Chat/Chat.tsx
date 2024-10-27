import React from 'react'
import { Outlet } from 'react-router-dom';

type Props = {};

const Chat = (props: Props) => {
    return (
        <>
            <div>Chat</div>
            <Outlet />
        </>
    );
};

export default Chat;
