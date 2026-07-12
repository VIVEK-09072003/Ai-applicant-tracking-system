import { useState } from "react";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    console.log("Login will be implemented");
  };

  const logout = () => {
    console.log("Logout will be implemented");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;