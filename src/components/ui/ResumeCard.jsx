import { Link } from "react-router-dom";

const ResumeCard = ({ resume }) => {
  return (
    <Link
      to="/feedback"
      state={resume}
      className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300"
    >
      <h2 className="text-xl font-semibold">
        {resume.fileName}
      </h2>

      <p className="mt-3 text-blue-600 font-bold">
        ATS Score: {resume.score}/100
      </p>

      <p className="text-sm text-gray-500 mt-2">
        {new Date(
          resume.createdAt
        ).toLocaleDateString()}
      </p>
    </Link>
  );
};

export default ResumeCard;