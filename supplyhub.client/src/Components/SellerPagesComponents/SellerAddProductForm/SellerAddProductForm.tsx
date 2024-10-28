import React, {useEffect} from 'react'

type Props = {};

const SellerAddProductForm = (props: Props) => {
    useEffect(() => {
        document.title = 'Add Product';
    }, []);

    return (
        <div>SellerAddProductForm</div>
    );
};

export default SellerAddProductForm;
