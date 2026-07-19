import SectionTitle from "./SectionTitle";

const borderColor = {
  strength: "border-green-500",
  weakness: "border-red-500",
  default: "border-blue-500",
};

const FeedbackSection = ({ title, items, variant = "default" }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <SectionTitle>{title}</SectionTitle>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className={`border-l-4 pl-3 ${borderColor[variant]}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackSection;
