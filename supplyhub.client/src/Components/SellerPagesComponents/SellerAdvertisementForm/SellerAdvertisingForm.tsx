import React, {useEffect} from 'react'

type Props = {};

const SellerAdvertisingForm = (props: Props) => {
    useEffect(() => {
        document.title = 'Advertising: Apply';
    }, []);

    return (
        <div>SellerAdvertisingForm</div>
    );
};

export default SellerAdvertisingForm;
