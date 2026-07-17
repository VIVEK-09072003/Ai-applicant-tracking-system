import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ResumeUploader = ({ onFileSelect }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (!file) return;

      onFileSelect(file);
    },
    [onFileSelect]
  );

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
        <p>Drop Resume Here...</p>
      ) : (
        <p>Drag & Drop Resume or Click</p>
      )}
    </div>
  );
};

export default ResumeUploader;