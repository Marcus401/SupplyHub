import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import backgroundImage from '../../assets/background.png';

type Props = {};

const Register: React.FC<Props> = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Register : SupplyHub';
    }, []);

    const isSellerSignUpPath = location.pathname.includes('/register/seller');
    const isUserSignUpPath = location.pathname.includes('/register/user'); 

    return (
        <div
            className="flex items-center justify-center h-screen w-[1536px] overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {!isSellerSignUpPath && !isUserSignUpPath && <p>Registration Page</p>}
            <Outlet />
        </div>
    );
};

export default Register;
