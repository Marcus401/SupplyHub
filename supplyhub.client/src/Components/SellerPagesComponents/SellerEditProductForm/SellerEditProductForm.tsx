import React, {useEffect} from 'react'

type Props = {};

const SellerEditProductForm = (props: Props) => {
    useEffect(() => {
        document.title = "Edit Product";
    }, []);

    return (
        <div>SellerEditProductForm</div>
    );
};

export default SellerEditProductForm;
