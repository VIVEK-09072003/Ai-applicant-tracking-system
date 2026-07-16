import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ResumeUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
  const file = acceptedFiles[0];

  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("File must be under 5MB");
    return;
  }

  console.log(file);
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

      {isDragActive ? (
        <p>Drop your resume here...</p>
      ) : (
        <p>Drag & drop your resume or click to upload</p>
      )}
    </div>
  );
};

export default ResumeUploader;