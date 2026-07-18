import { Navigate, useLocation } from "react-router-dom";

import ScoreCard from "../components/feedback/ScoreCard";
import SummaryCard from "../components/feedback/SummaryCard";
import FeedbackSection from "../components/feedback/FeedbackSection";

const Feedback = () => {
  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-5 space-y-8">

      <h1 className="text-4xl font-bold">
        Resume Analysis
      </h1>

      <ScoreCard score={state.score} />

      <SummaryCard summary={state.summary} />

      <FeedbackSection
        title="Strengths"
        items={state.strengths}
      />

      <FeedbackSection
        title="Weaknesses"
        items={state.weaknesses}
      />

      <FeedbackSection
        title="Suggestions"
        items={state.suggestions}
      />

    </div>
  );
};

export default Feedback;