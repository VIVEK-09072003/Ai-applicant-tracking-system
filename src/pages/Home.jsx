import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold">
        {user ? `Welcome ${user.name}` : "No User Logged In"}
      </h1>
    </div>
  );
};

export default Home;