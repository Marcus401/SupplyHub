import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom';

type Props = {};

const Advertising = (props: Props) => {
    useEffect(() => {
        document.title = 'Advertising';
    }, []);

    return (
        <>
            <div>Advertising</div>
            <Outlet />
        </>
    );
};

export default Advertising;
