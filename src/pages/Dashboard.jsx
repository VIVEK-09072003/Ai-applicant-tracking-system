import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ResumeCard from "../components/ui/ResumeCard";
import Loader from "../components/common/Loader";
import Button from "../components/ui/Button";
import { getResumeHistory, wipeResumeHistory } from "../services/resumeService";

const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    setLoading(true);
    const data = await getResumeHistory();
    setHistory(data);
    setLoading(false);
  };

  const handleWipeData = async () => {
    const confirmed = window.confirm("Delete all saved resume analyses?");
    if (!confirmed) return;

    const success = await wipeResumeHistory();

    if (success) {
      toast.success("All resume analyses deleted.");
      setHistory([]);
    } else {
      toast.error("Failed to delete data.");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="flex justify-between items-center mb-8 gap-4 flex-wrap">
        <h1 className="text-4xl font-bold">Previous Resume Analyses</h1>

        {history.length > 0 && (
          <Button
            onClick={handleWipeData}
            className="bg-red-600 hover:bg-red-700"
          >
            Wipe App Data
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-12 text-center">
          <h2 className="text-2xl font-semibold">No Resume Analyses Yet</h2>
          <p className="text-gray-500 mt-3">Upload your first resume to begin.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {history.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
