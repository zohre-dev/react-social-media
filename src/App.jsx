import "./index.css";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Home from "./pages/home";
import Login from "./pages/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import routesConfig from "./configs/routes";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path={routesConfig.HOME}
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route
          path={routesConfig.LOGIN}
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path={routesConfig.REGISTER}
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route
          path={`${routesConfig.PROFILE}/:username`}
          element={<Profile />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
