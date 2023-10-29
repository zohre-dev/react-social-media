import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  // Local Storage
  const [userLength, setUserLength] = useState(0);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value)
      passwordAgain.current.setCustomValidity("Passwords are'nt match");
    else {
      const newUser = {
        id: userLength + 1,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        profilePicture: "",
        coverPicture: "",
        isAdmin: false,
        country: "iran",
        city: "here",
        relationship: 0,
        followings: [],
        followers: [],
      };
      console.log("id", newUser.id);
      try {
        await axios.post("http://localhost:3000/users", newUser);
        navigate("/login");
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    const usersCount = async () => {
      await axios.get("http://localhost:3000/users").then((res) => {
        const count = res.data.length;
        if (count > 0) setUserLength(count);
      });
    };
    usersCount();
  }, []);
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
            onSubmit={handleSubmit}
          >
            <input
              className="h-[50px] rounded-md text-lg pl-5 focus:outline-none border-1 border-solid border-gray-400"
              placeholder="Username"
              style={{ border: "1px solid gray" }}
              ref={username}
            />
            <input
              className="h-[50px] rounded-md text-lg pl-5 focus:outline-none border-1 border-solid border-gray-400"
              placeholder="Email"
              style={{ border: "1px solid gray" }}
              ref={email}
              type="email"
            />
            <input
              className="h-[50px] rounded-md text-lg pl-5 focus:outline-none border-1 border-solid border-gray-400"
              placeholder="Password"
              style={{ border: "1px solid gray" }}
              ref={password}
            />
            <input
              className="h-[50px] rounded-md text-lg pl-5 focus:outline-none border-1 border-solid border-gray-400"
              placeholder="Password Again"
              style={{ border: "1px solid gray" }}
              ref={passwordAgain}
            />
            <button className="h-[50px] border-none text-white bg-green-400 text-xl font-medium cursor-pointer rounded-md">
              Sign Up
            </button>

            <button className="h-[50px] border-none text-white bg-blue-400 text-xl font-medium cursor-pointer rounded-md">
              Log Into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
