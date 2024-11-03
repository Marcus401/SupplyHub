import { Outlet, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    const noNavBarPaths = ['/login', '/register', '/seller/advertising', '/settings', '*']; 

    return (
        <div className="flex justify-center w-full">
            <div className="hidden 2xl:block w-0 2xl:w-[calc(100vw - 768px)]"></div>
            <div className="relative flex-grow max-w-[1536px]">
                {/* NavBar removed */}
                <Outlet />
            </div>
            <div className="hidden 2xl:block w-0 2xl:w-[calc(100vw - 768px)]"></div>
        </div>
    );
}

export default App;
