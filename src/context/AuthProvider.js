import React, { createContext } from "react";

export const AuthContext = createContext("");
const AuthProvider = () => {
  return (
    <div>
      <h3>Firebase</h3>
    </div>
  );
};

export default AuthProvider;
