import React, {useEffect} from 'react'

type Props = {};

const SellerInventoryTable = (props: Props) => {
    useEffect(() => {
        document.title = 'Inventory';
    }, []);

    return (
        <div>SellerInventoryTable</div>
    );
};

export default SellerInventoryTable;
