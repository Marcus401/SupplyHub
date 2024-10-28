import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom';

type Props = {};

const SellerProductCardList = (props: Props) => {
    useEffect(() => {
        document.title = 'My Products';
    }, []);

    return (
        <>
            <div>SellerProductCardList</div>
            <Outlet />
        </>
    );
};

export default SellerProductCardList;
