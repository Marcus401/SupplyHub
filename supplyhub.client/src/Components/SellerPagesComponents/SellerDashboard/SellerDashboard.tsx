import React from 'react'
import { Outlet } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const SellerDashboard = ({children}: Props) => {
    return (
        <div>
            <div className="flex flex-wrap">{children}</div>
            <div className="flex flex-wrap">{<Outlet/>}</div>
        </div>
    );
};

export default SellerDashboard;
