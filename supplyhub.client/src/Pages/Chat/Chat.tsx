import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom';

type Props = {};

const Chat = (props: Props) => {
    useEffect(() => {
        document.title = 'Chats';
    }, []);

    return (
        <>
            <div>Chat</div>
            <Outlet />
        </>
    );
};

export default Chat;
