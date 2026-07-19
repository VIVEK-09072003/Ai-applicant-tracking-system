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
      className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
        isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />

      {isDragActive ? (
        <p className="text-blue-600 font-medium">Drop resume here...</p>
      ) : (
        <div className="space-y-2">
          <p className="font-medium">Drag & drop your resume, or click to browse</p>
          <p className="text-sm text-gray-400">PDF only</p>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
