import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import useAuth from "../hooks/useAuth";
import { ROUTES } from "../constants/routes";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-5xl mx-auto py-24 px-5 text-center space-y-8">
      <h1 className="text-5xl font-extrabold leading-tight">
        Land More Interviews with
        <span className="text-blue-600"> AI-Powered Resume Feedback</span>
      </h1>

      <p className="text-lg text-gray-500 max-w-2xl mx-auto">
        Upload your resume and let AI score it against a job description,
        highlighting strengths, weaknesses, and concrete suggestions to
        improve your ATS score.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <Link to={user ? ROUTES.UPLOAD : ROUTES.LOGIN}>
          <Button className="text-lg px-8 py-4">
            {user ? "Analyze a Resume" : "Get Started"}
          </Button>
        </Link>
        <Link to={ROUTES.DASHBOARD}>
          <Button className="text-lg px-8 py-4 bg-gray-200 !text-gray-800 hover:bg-gray-300">
            View Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
