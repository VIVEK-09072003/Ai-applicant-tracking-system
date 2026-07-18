import { useEffect, useState } from "react";
import ResumeCard from "../components/ui/ResumeCard";
import { getResumeHistory } from "../services/resumeService";

const Home = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      const data = await getResumeHistory();

      console.log("History:", data);

      setHistory(data);
    };

    loadHistory();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">
        Previous Resume Analyses
      </h1>

      {history.length === 0 ? (
        <p>No resume analyses found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {history.map((resume, index) => (
            <ResumeCard
              key={resume.id || index}
              resume={resume}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;