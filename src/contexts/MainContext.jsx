/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext();

const MainContext = ({ children }) => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const info = {
    signIn,
    setSignIn,
    signUp,
    setSignUp,
  };
  return <userContext.Provider value={info}>{children}</userContext.Provider>;
};

export default MainContext;
