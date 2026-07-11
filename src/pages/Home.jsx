import Button from "../components/ui/Button";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold leading-tight">
          AI Powered
          <span className="text-blue-600"> Applicant Tracking System</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Upload your resume and receive an AI-powered ATS score, detailed
          feedback, and suggestions to improve your chances of getting hired.
        </p>

        <div className="mt-10">
          <Button>Analyze Resume</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;