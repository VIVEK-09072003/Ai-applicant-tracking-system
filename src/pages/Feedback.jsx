import { useLocation, Navigate } from "react-router-dom";

const Feedback = () => {
  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/upload" replace />;
  }

  const {
    score,
    summary,
    strengths,
    weaknesses,
    suggestions,
  } = state;

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Resume Feedback
      </h1>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold">
          ATS Score
        </h2>

        <p className="text-5xl font-bold mt-4">
          {score}/100
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Summary
        </h2>

        <p>{summary}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Strengths
          </h2>

          <ul className="list-disc pl-5 space-y-2">
            {strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Weaknesses
          </h2>

          <ul className="list-disc pl-5 space-y-2">
            {weaknesses.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Suggestions
        </h2>

        <ul className="list-disc pl-5 space-y-2">
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;