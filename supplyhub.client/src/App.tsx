import {Outlet, useLocation} from "react-router-dom";
import NavBar from "./Components/NavigationBarComponents/NavBar/NavBar.tsx";
import GuestNavBar from "./Components/NavigationBarComponents/GuestNavBar/GuestNavBar.tsx";

function App() {
    const isLoggedIn: boolean = false; //placeholder for navigation bar condition, will be updated once backend is implemented
    const location = useLocation();
    const noNavBarPaths = ['/login', '/register', '/seller/advertising', '/settings', '*']; // Array of paths where the navbar should not be displayed, update as needed
    const hideNavBar = noNavBarPaths.includes(location.pathname);

    return (
        <div className="flex justify-center w-full">
            <div className="hidden 2xl:block w-0 2xl:w-[calc(100vw - 768px)]"></div>
            <div className="relative flex-grow max-w-[1536px]">
                {!hideNavBar && (isLoggedIn ? <NavBar /> : <GuestNavBar />)}
                <Outlet />
            </div>
            <div className="hidden 2xl:block w-0 2xl:w-[calc(100vw - 768px)]"></div>
        </div>
    );
}

export default App;