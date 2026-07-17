import SectionTitle from "./SectionTitle";

const SummaryCard = ({ summary }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <SectionTitle>Summary</SectionTitle>

      <p className="leading-7">
        {summary}
      </p>
    </div>
  );
};

export default SummaryCard;