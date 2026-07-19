import { Link } from "react-router-dom";
import Badge from "./Badge";
import { formatDate } from "../../utils/formatDate";

const ResumeCard = ({ resume }) => {
  return (
    <Link
      to="/feedback"
      state={resume}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition p-6"
    >
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-3">
          <h2 className="text-xl font-bold line-clamp-1">{resume.fileName}</h2>
          <Badge score={resume.score} />
        </div>

        <p className="text-gray-500 line-clamp-2">{resume.summary}</p>

        <p className="text-sm text-gray-400">{formatDate(resume.createdAt)}</p>

        <div className="pt-2 text-blue-600 font-semibold">View Analysis →</div>
      </div>
    </Link>
  );
};

export default ResumeCard;
