import React, {useEffect} from 'react'

type Props = {};

const SellerProfileInfo = (props: Props) => {
    useEffect(() => {
        document.title = 'Seller Profile';
    }, []);

    return (
        <div>SellerProfileInfo</div>
    );
};

export default SellerProfileInfo;
