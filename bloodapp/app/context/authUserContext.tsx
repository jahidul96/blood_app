import React, { createContext, useState } from "react";

export const AuthUserContext = createContext();

interface user {
  name: string;
  email: string;
}

export const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);
  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {props.children}
    </AuthUserContext.Provider>
  );
};
