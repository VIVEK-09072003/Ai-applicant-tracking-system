import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ResumeUploader from "../components/common/ResumeUploader";
import Loader from "../components/common/Loader";
import { convertPdfToImages } from "../services/pdf";
import { analyzeResume } from "../services/ai";
import { saveResumeAnalysis } from "../services/resumeService";

const Upload = () => {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handleAnalyze = async (file) => {
    setProcessing(true);

    try {
      const images = await convertPdfToImages(file);

      // TODO: replace with a real job description field/input
      const jobDescription = "Frontend React Developer";

      const feedback = await analyzeResume(images, jobDescription);

      const record = {
        fileName: file.name,
        score: feedback.score,
        summary: feedback.summary,
        strengths: feedback.strengths,
        weaknesses: feedback.weaknesses,
        suggestions: feedback.suggestions,
        createdAt: new Date().toISOString(),
      };

      await saveResumeAnalysis(record);

      navigate("/feedback", { state: record });
    } catch (error) {
      console.error("Analysis Error:", error);
      toast.error("Failed to analyze resume. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  if (processing) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center px-5">
        <Loader />
        <p className="text-gray-500 mt-4">
          Analyzing your resume, this may take a moment...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-20 px-5">
      <h1 className="text-4xl font-bold mb-10">Upload Resume</h1>
      <ResumeUploader onFileSelect={handleAnalyze} />
    </div>
  );
};

export default Upload;
