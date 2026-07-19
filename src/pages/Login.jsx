import { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "../components/ui/Button";

const Login = () => {
  const { user, login } = useAuth();
  const [signingIn, setSigningIn] = useState(false);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = async () => {
    setSigningIn(true);
    await login();
    setSigningIn(false);
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center gap-6 text-center px-5">
      <h1 className="text-3xl font-bold">Welcome Back</h1>
      <p className="text-gray-500">Sign in to analyze and track your resumes.</p>

      <Button onClick={handleLogin} disabled={signingIn}>
        {signingIn ? "Signing in..." : "Sign in with Puter"}
      </Button>
    </div>
  );
};

export default Login;
