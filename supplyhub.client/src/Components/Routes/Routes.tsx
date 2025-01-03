import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../../App.tsx";
import HomePage from "../../Pages/HomePage/HomePage.tsx";
import Register from "../../Pages/Register/Register.tsx";
import UserSignUpForm from "../RegistrationComponents/UserSignUpForm/UserSignUpForm.tsx";
import SellerSignUpForm from "../RegistrationComponents/SellerSignUpForm/SellerSignUpForm.tsx";
import Login from "../../Pages/Login/Login.tsx";
import SearchResults from "../../Pages/SearchResults/SearchResults.tsx";
import Profile from "../../Pages/Profile/Profile.tsx";
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
import SellerReviewsList from "../SellerPagesComponents/SellerReviewsList/SellerReviewsList.tsx";
import SellerEditProductForm from "../SellerPagesComponents/SellerEditProductForm/SellerEditProductForm.tsx";
import SellerBilling from "../SellerPagesComponents/SellerBilling/SellerBilling.tsx";
import ReviewFormPopUp from "../ProductComponents/ReviewFormPopUp/ReviewFormPopUp.tsx";
import ProfileInfo from "../ProfileComponents/ProfileInfo/ProfileInfo.tsx";

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
/seller/edit/:product_id
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
      { path: "", element: <HomePage /> },
      {
        path: "register",
        element: <Register />,
        children: [
          { index: true, element: <Navigate to="user" replace /> },
          { path: "user", element: <UserSignUpForm /> },
          { path: "seller", element: <SellerSignUpForm /> },
        ],
      },
      { path: "login", element: <Login /> },
      { path: "search-results/:text", element: <SearchResults /> },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "me",
            element: <UserProfileInfo />,
          },
          {
            path: "edit",
            element: <UserProfileInfoEdit />,
          },
          {
            path: ":user_id",
            element: <ProfileInfo />,
            children: [{ path: "review", element: <ReviewFormPopUp /> }],
          },
        ],
      },
      {
        path: "chat",
        element: <Chat />,
        children: [
          { path: ":chat_id", element: <ChatMessageList messages={[]} /> },
        ],
      },
      {
        path: "product/:item_id",
        element: <Product />,
        children: [{ path: "review", element: <ReviewFormPopUp /> }],
      },
      {
        path: "seller",
        element: <Seller />,
        children: [
          { index: true, element: <Navigate to="products/list" replace /> },
          { path: "products/list", element: <SellerProductCardList /> },
          { path: "products/add", element: <SellerAddProductForm /> },
          { path: "edit/:product_id", element: <SellerEditProductForm /> },
          { path: "inventory", element: <SellerInventoryTable /> },
          { path: "reviews", element: <SellerReviewsList /> },
          { path: "billing", element: <SellerBilling /> },
          {
            path: "advertising",
            element: <Advertising />,
            children: [{ path: "apply", element: <SellerAdvertisingForm /> }],
          },
        ],
      },
      { path: "help", element: <Help /> },
      {
        path: "settings",
        element: <Settings />,
        children: [
          { path: "change-password", element: <UserChangePasswordForm /> },
        ],
      },
      { path: "about-us", element: <AboutUs /> },
      { path: "design", element: <Design /> },
    ],
  },
  { path: "*", element: <Error404 />, errorElement: <Navigate to="/" /> },
]);
