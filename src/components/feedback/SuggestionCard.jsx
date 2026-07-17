import SectionTitle from "./SectionTitle";

const SuggestionCard = ({ suggestions }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <SectionTitle>Suggestions</SectionTitle>

      <ul className="space-y-3">
        {suggestions.map((item, index) => (
          <li
            key={index}
            className="border-l-4 border-green-500 pl-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionCard;