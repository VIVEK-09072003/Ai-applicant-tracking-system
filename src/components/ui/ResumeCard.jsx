import { Link } from "react-router-dom";

const ResumeCard = ({ resume }) => {
  return (
    <Link
      to="/feedback"
      state={resume}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition p-6"
    >
      <div className="space-y-3">

        <h2 className="text-xl font-bold">
          {resume.fileName}
        </h2>

        <p className="text-blue-600 font-semibold">
          ATS Score : {resume.score}/100
        </p>

        <p className="text-gray-500 line-clamp-2">
          {resume.summary}
        </p>

        <p className="text-sm text-gray-400">
          {new Date(resume.createdAt).toLocaleString()}
        </p>

        <div className="pt-2 text-blue-600 font-semibold">
          View Analysis →
        </div>

      </div>
    </Link>
  );
};

export default ResumeCard;