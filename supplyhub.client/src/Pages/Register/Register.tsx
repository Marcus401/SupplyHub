import React from 'react'
import { Outlet } from 'react-router';

type Props = {};

const Register = (props: Props) => {
    return (
        <div>registration page
             <>
              <Outlet />
            </>
        </div>
    );
};

export default Register;
