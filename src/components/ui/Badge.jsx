import { getScoreMeta } from "../../utils/calculateScore";

const Badge = ({ score }) => {
  const { className } = getScoreMeta(score);

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${className}`}>
      {score}/100
    </span>
  );
};

export default Badge;
