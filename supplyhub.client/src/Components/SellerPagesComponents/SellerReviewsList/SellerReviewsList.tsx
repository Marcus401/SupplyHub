import React, {useEffect} from 'react'

type Props = {};

const SellerReviewsList = (props: Props) => {
    useEffect(() => {
        document.title = "Reviews: Seller";
    }, []);

    return (
        <div>SellerReviews</div>
    );
};
export default SellerReviewsList;
