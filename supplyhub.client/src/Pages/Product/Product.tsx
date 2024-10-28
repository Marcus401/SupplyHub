import React, {useEffect} from 'react'

type Props = {};

const Product = (props: Props) => {
    useEffect(() => {
        document.title = 'Product #';
    }, []);

    return (
        <div>Product</div>
    );
};

export default Product;
