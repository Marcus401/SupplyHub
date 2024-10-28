import React, {useEffect} from 'react'
import {Link} from "react-router-dom";

type Props = {};

const Error404 = (props) => {
    useEffect(() => {
        document.title = '404';
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <h1 className="text-[6rem] font-bold">Error 404</h1>
                <p
                    className="text-xl">Page Not Found</p>
                <Link
                    to="/"
                    className="flex flex-col  items-center mt-4 px-4 py-3.5 font-bold w-2/3 size-16 bg-black rounded no-underline hover:text-white">
                        <p
                            className="text-white text-2xl align-middle">
                            GO TO HOMEPAGE
                        </p>
                </Link>
            </div>
        </div>
    );
};


export default Error404;
