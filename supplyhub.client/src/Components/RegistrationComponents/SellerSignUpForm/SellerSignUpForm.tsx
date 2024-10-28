import React, {useEffect} from 'react'

type Props = {};

const SellerSignUpForm = (props: Props) => {
    useEffect(() => {
        document.title = 'Seller Registration';
    }, []);

    return (
        <div>SellerSignUpForm</div>
    );
};

export default SellerSignUpForm;
