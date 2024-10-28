import React, {useEffect} from 'react'

type Props = {};

const Error404 = (props: Props) => {
    useEffect(() => {
        document.title = 'Error 404';
    }, []);

    return (
        <div>Error404</div>
    );
};

export default Error404;
