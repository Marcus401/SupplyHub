import React, {useEffect} from 'react'

type Props = {};

const SellerBilling = (props: Props) => {
    useEffect(() => {
        document.title = 'Seller Billing | SupplyHub';
    }, []);

    return (
        <div>SellerBilling</div>
    );
};

export default SellerBilling;
