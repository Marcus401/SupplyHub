import React, {useEffect} from 'react'
import { Outlet } from 'react-router';

type Props = {};

const Register = (props: Props) => {
    useEffect(() => {
        document.title = 'Register :SupplyHub';
    }, []);

    return (
        <div>registration page
             <>
              <Outlet />
            </>
        </div>
    );
};

export default Register;
