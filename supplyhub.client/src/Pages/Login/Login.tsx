import React, {useEffect} from 'react'

type Props = {};

const Login = (props: Props) => {
    useEffect(() => {
        document.title = 'Login :SupplyHub';
    }, []);

    return (
        <div>Login</div>
    );
};

export default Login;
