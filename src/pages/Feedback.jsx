import { Navigate, useLocation } from "react-router-dom";
import ScoreCard from "../components/feedback/ScoreCard";
import SummaryCard from "../components/feedback/SummaryCard";
import FeedbackSection from "../components/feedback/FeedbackSection";
import SuggestionCard from "../components/feedback/SuggestionCard";

const Feedback = () => {
  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/upload" replace />;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-5 space-y-8">
      <ScoreCard score={state.score} />

      <SummaryCard summary={state.summary} />

      <div className="grid md:grid-cols-2 gap-6">
        <FeedbackSection
          title="Strengths"
          items={state.strengths}
        />

        <FeedbackSection
          title="Weaknesses"
          items={state.weaknesses}
        />
      </div>

      <SuggestionCard
        suggestions={state.suggestions}
      />
    </div>
  );
};

export default Feedback;