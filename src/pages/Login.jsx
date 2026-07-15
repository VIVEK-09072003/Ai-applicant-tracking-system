import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <button
        onClick={login}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Sign in with Puter
      </button>
    </div>
  );
};

export default Login;