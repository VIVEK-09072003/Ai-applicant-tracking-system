import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          AI Applicant Tracking System
        </h1>

        <p className="text-gray-300 mt-5 text-lg">
          Upload your resume and get AI-powered ATS analysis.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;