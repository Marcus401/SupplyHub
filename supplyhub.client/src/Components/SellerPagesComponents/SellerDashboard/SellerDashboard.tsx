import React from 'react'
import { Outlet } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const SellerDashboard = ({children}: Props) => {
    return (
        // this component is the parent component for all the seller dashboard components
        // to be placed next to the sidebar
        <div>
            <div className="flex flex-wrap">{children}</div>
            <div className="flex flex-wrap">{<Outlet/>}</div>
        </div>
    );
};

export default SellerDashboard;
