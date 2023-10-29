import axios from "axios";
import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      await axios.get("http://localhost:3000/users").then((res) => {
        const user = res.data.filter(
          (u) =>
            u.email === email.current.value &&
            u.password === password.current.value
        );
        if (user.length > 0) {
          console.log("user", user[0]);
          dispatch({ type: "LOGIN_SUCCESS", payload: user[0] });
        }
      });
    } catch (err) {
      dispatch({ type: "LOGIN_SUCCESS", payload: err });
    }
  };
  return (
    <div className="w-screen h-screen bg-[#f0f2f5] flex items-center justify-center">
      <div className="loginWrapper w-[70%] h-[70%]  flex">
        <div className="loginLeft flex-1 flex flex-col justify-center">
          <h3 className="text-5xl font-extrabold text-green-600 mb-2.5">
            BarmayeSocial
          </h3>
          <span className="text-2xl ">
            Connect with freinds and the world around you on BarmayeSocial
          </span>
        </div>
        <div className="loginRight flex-1 flex flex-col justify-center">
          <form
            className="loginBox px-4 py-6 bg-white rounded-md flex flex-col justify-between gap-2.5"
            onSubmit={handleClick}
          >
            <input
              className="h-[50px] rounded-md text-lg pl-5 focus:outline-none border-1 border-solid border-gray-400"
              placeholder="Email"
              type="email"
              ref={email}
              style={{ border: "1px solid gray" }}
            />
            <input
              className="h-[50px] rounded-md text-lg pl-5 focus:outline-none border-1 border-solid border-gray-400"
              placeholder="Password"
              ref={password}
              style={{ border: "1px solid gray" }}
            />

            <button
              className="h-[50px] border-none text-white bg-green-400 text-xl font-medium cursor-pointer rounded-md"
              disabled={isFetching}
            >
              {isFetching ? (
                <CircularProgress size={20} style={{ color: "white" }} />
              ) : (
                "Log In"
              )}
            </button>
            <span className="self-center text-green-400 cursor-pointer">
              Forgot Password?
            </span>
            <button className="h-[50px] border-none text-white bg-blue-400 text-xl font-medium cursor-pointer rounded-md">
              {isFetching ? (
                <CircularProgress size={20} style={{ color: "white" }} />
              ) : (
                " Create A New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
