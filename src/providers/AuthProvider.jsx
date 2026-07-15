import { useState } from "react";
import AuthContext from "../context/AuthContext";
import puter from "../lib/puter";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      await puter.auth.signIn();

      const currentUser = await puter.auth.getUser();

      setUser(currentUser);

      console.log(currentUser);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await puter.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;