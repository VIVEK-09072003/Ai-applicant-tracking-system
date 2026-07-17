import { useNavigate } from "react-router-dom";
import ResumeUploader from "../components/common/ResumeUploader";
import { convertPdfToImages } from "../services/pdf";
import { analyzeResume } from "../services/ai";

const Upload = () => {
  const navigate = useNavigate();

  const handleAnalyze = async (file) => {
    try {
      // Convert PDF to images
      const images = await convertPdfToImages(file);

      // Temporary Job Description
      const jobDescription = "Frontend React Developer";

      // AI Analysis
      const response = await analyzeResume(images, jobDescription);

// AI returns the JSON as a string
      const feedback = JSON.parse(response.message.content);

      navigate("/feedback", {
        state: feedback,
      });
    } catch (error) {
      console.error("Analysis Error:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">
        Upload Resume
      </h1>

      <ResumeUploader onFileSelect={handleAnalyze} />
    </div>
  );
};

export default Upload;