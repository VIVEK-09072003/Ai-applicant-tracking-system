import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center gap-4 text-center px-5">
      <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
      <p className="text-gray-500">Page not found.</p>
      <Link to="/" className="text-blue-600 font-semibold hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
