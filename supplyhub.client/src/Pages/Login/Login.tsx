import React, { useEffect } from 'react';
import LoginForm from '../../Components/RegistrationComponents/LoginForm/LoginForm';
import backgroundImage from '../../assets/background.png';

const Login: React.FC = () => {
    useEffect(() => {
        document.title = 'Login : SupplyHub';
    }, []);

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
            <LoginForm />
        </div>
    );
};

export default Login;
