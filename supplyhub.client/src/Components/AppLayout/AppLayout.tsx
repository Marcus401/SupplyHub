import {Outlet, useLocation} from "react-router-dom";
import NavBar from "../NavigationBarComponents/NavBar/NavBar.tsx";
import GuestNavBar from "../NavigationBarComponents/GuestNavBar/GuestNavBar.tsx";
import jwt from 'jsonwebtoken';

type Props = {};

const AppLayout = (props: Props) => {
    const location = useLocation();
    const noNavBarPaths = [
        "/login",
        "/register/user",
        "/register/seller",
        "/seller/advertising",
        "/settings",
        "*",
    ];
    const hideNavBar = noNavBarPaths.includes(location.pathname);

    const NavigationBar = () => {
        const token = localStorage.getItem('JwtToken');
        if (token) {
            return <NavBar/>;
        }
        else {
            return <GuestNavBar/>
        }
    }
    return (
        <div className="flex justify-center w-full">
            <div className="hidden 2xl:block w-0 2xl:w-[calc(100vw - 768px)]"></div>
            <div className="relative flex-grow max-w-[1536px]">
                {!hideNavBar && NavigationBar()}
                <Outlet/>
            </div>
            <div className="hidden 2xl:block w-0 2xl:w-[calc(100vw - 768px)]"></div>
        </div>
    );
};

export default AppLayout;
