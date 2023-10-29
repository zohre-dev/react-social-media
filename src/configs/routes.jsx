const routesConfig = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
};
export default routesConfig;

// import { useContext } from "react";

// import { createBrowserRouter, Navigate } from "react-router-dom";
// import Profile from "../pages/profile";
// import Register from "../pages/register";
// import Home from "../pages/home";
// import Login from "../pages/login";
// import { AuthContext } from "../context/AuthContext";

// const { user } = useContext(AuthContext);
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: user ? <Home /> : <Register />,
//   },
//   {
//     path: routesConfig.LOGIN,
//     element: user ? <Navigate to="/" /> : <Login />,
//   },
//   {
//     path: routesConfig.REGISTER,
//     element: user ? <Navigate to="/" /> : <Register />,
//   },
//   {
//     path: `routesConfig.PROFILE}/:username`,
//     element: <Profile />,
//   },
// ]);
