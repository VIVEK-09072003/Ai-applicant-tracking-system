import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { uploadResume } from "../../services/storage";

const ResumeUploader = () => {
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File must be under 5MB");
      return;
    }

    try {
      setLoading(true);

      const uploadedFile = await uploadResume(file);

      console.log(uploadedFile);

      toast.success("Resume uploaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Upload failed!");
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-400 rounded-xl p-10 text-center cursor-pointer"
    >
      <input {...getInputProps()} />

      {loading ? (
        <p>Uploading Resume...</p>
      ) : isDragActive ? (
        <p>Drop your resume here...</p>
      ) : (
        <p>Drag & Drop your resume or click to upload</p>
      )}
    </div>
  );
};

export default ResumeUploader;