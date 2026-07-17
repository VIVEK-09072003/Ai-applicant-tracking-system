import SectionTitle from "./SectionTitle";

const FeedbackSection = ({ title, items }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <SectionTitle>{title}</SectionTitle>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="border-l-4 border-blue-500 pl-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackSection;