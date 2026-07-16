import ResumeUploader from "../components/common/ResumeUploader";

const Upload = () => {
  return (
    <div className="max-w-3xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">
        Upload Resume
      </h1>

      <ResumeUploader />
    </div>
  );
};

export default Upload;