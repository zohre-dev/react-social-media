import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    id: 1,
    username: "master_programmer",
    email: "master@gmail.com",
    password: "123456",
    profilePicture: "images/persons/01.jpg",
    coverPicture: "",
    isAdmin: false,
    desc: "Love For All, Hatred For None.",
    country: "iran",
    city: "sari",
    relationship: 1,
    followings: [2, 3, 4, 7, 9],
  },
  // user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const valuesToShare = {
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch,
  };
  return (
    <AuthContext.Provider value={valuesToShare}>
      {props.children}
    </AuthContext.Provider>
  );
};
