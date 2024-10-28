import React, {useEffect} from 'react'

type Props = {};

const SellerProfileInfoEdit = (props: Props) => {
    useEffect(() => {
        document.title = 'Edit Seller Profile';
    }, []);

    return (
        <div>SellerProfileInfoEdit</div>
    );
};

export default SellerProfileInfoEdit;
