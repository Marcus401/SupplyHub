import React from 'react'
import { Outlet } from 'react-router-dom';

type Props = {};

const Advertising = (props: Props) => {
    return (
        <>
            <div>Advertising</div>
            <Outlet />
        </>
    );
};

export default Advertising;
