import { createBrowserRouter } from "react-router-dom";
import App from "../../App.tsx";
import HomePage from "../../Pages/HomePage/HomePage.tsx";
import Register from "../../Pages/Register/Register.tsx";
import UserSignUpForm from "../RegistrationComponents/UserSignUpForm/UserSignUpForm.tsx";
import SellerSignUpForm from "../RegistrationComponents/SellerSignUpForm/SellerSignUpForm.tsx";
import Login from "../../Pages/Login/Login.tsx";
import SearchResults from "../../Pages/SearchResults/SearchResults.tsx";
import Profile from "../../Pages/Profile/Profile.tsx";
import SellerProfileInfo from "../ProfileComponents/SellerProfileInfo/SellerProfileInfo.tsx";
import SellerProfileInfoEdit from "../ProfileComponents/SellerProfileInfoEdit/SellerProfileInfoEdit.tsx";
import UserProfileInfoEdit from "../ProfileComponents/UserProfileInfoEdit/UserProfileInfoEdit.tsx";
import UserProfileInfo from "../ProfileComponents/UserProfileInfo/UserProfileInfo.tsx";
import Chat from "../../Pages/Chat/Chat.tsx";
import ChatMessageList from "../ChatComponents/ChatMessageList/ChatMessageList.tsx";
import Product from "../../Pages/Product/Product.tsx";
import Seller from "../../Pages/Seller/Seller.tsx";
import Advertising from "../../Pages/Advertising/Advertising.tsx";
import SellerAdvertisingForm from "../SellerPagesComponents/SellerAdvertisementForm/SellerAdvertisingForm.tsx";
import SellerProductCardList from "../SellerPagesComponents/SellerProductCardList/SellerProductCardList.tsx";
import SellerAddProductForm from "../SellerPagesComponents/SellerAddProductForm/SellerAddProductForm.tsx";
import SellerInventoryTable from "../SellerPagesComponents/SellerInventoryTable/SellerInventoryTable.tsx";
import Help from "../../Pages/Help/Help.tsx";
import Settings from "../../Pages/Settings/Settings.tsx";
import AboutUs from "../../Pages/AboutUs/AboutUs.tsx";
import Error404 from "../../Pages/Error404/Error404.tsx";
import UserChangePasswordForm from "../ProfileComponents/UserChangePasswordForm/UserChangePasswordForm.tsx";
import Design from "../../Pages/Design/Design.tsx";

/*
Webpages
/
/login
/register/user
/register/seller
/products
/sellers
/search-results/{text}
/profile/seller/{seller_id}
/profile/seller/edit
/chat/{user_id}
/chat/{user_id}/{chat_id}
/product/{item_id}
/profile/user/{user_id}
/profile/user/edit
/seller/products
/seller/products/add
/seller/inventory
/settings
/seller/advertising
/seller/advertising/apply
/help
/about-us
/design <- for testing purposes
/error 404
 */

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {
                path: "register",
                element: <Register />,
                children: [
                    {path: "user", element: <UserSignUpForm/>},
                    {path: "seller", element: <SellerSignUpForm/>},
                ]
            },
            {path: "login", element: <Login/>},
            {path: "search-results/:text", element: <SearchResults/>},
            {
                path: "profile",
                element: < Profile/>,
                children: [
                    {path: "seller/:seller_id", element: <SellerProfileInfo/>},
                    {path: "seller/edit", element: <SellerProfileInfoEdit/>},
                    {path: "user/:user_id", element: <UserProfileInfo/>},
                    {path: "user/edit", element: <UserProfileInfoEdit/>},
                ]
            },
            {
                path: "chat/:user_id",
                element: <Chat />,
                children: [
                    {path: ":chat_id", element: <ChatMessageList/>},
                ]
            },
            {path: "product/:item_id", element: <Product/>},
            {
                path: "seller",
                element: <Seller/>,
                children: [
                    {
                        path: "products/list", element: <SellerProductCardList/>,},
                    {path: "products/add", element: <SellerAddProductForm/>},
                    {path: "inventory", element: <SellerInventoryTable/>},
                    {
                        path: "advertising",
                        element: <Advertising/>,
                        children: [
                            {path: "apply", element: <SellerAdvertisingForm/>},
                        ]
                    },
                ]
            },
            {path: "help", element: <Help/>},
            {
                path: "settings",
                element: <Settings/>,
                children: [
                    {path: "change-password", element: <UserChangePasswordForm/>},
                ]
            },
            {path: "about-us", element: <AboutUs/>},
            {path: "design", element: <Design/>},
            {path: "*", element: <Error404/>},
        ]
    }
])

