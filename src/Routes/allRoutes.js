import React from "react";
import { Redirect } from "react-router-dom";

// Landing Index
import OnePage from "../pages/Landing/OnePage";
import NFTLanding from "../pages/Landing/NFTLanding";
//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
// User Profile
import UserProfile from "../pages/Authentication/user-profile";

const authProtectedRoutes = [

  { path: "/profile", component: UserProfile },
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/landing" />,
  },
];

const publicRoutes = [
  { path: "/landing", component: OnePage },
  { path: "/nft-landing", component: NFTLanding },
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPasswordPage },
  { path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };