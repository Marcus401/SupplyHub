import React from 'react'
import { Outlet } from 'react-router-dom';

type Props = {};

const SellerProductCardList = (props: Props) => {
    return (
        <>
            <div>SellerProductCardList</div>
            <Outlet />
        </>
    );
};

export default SellerProductCardList;
