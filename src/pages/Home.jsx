import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>AI Applicant Tracking System</h1>

      <br />

      <Link to="/login">Login</Link>

      <br />

      <Link to="/upload">Upload Resume</Link>

      <br />

      <Link to="/dashboard">Dashboard</Link>

      <br />

      <Link to="/feedback">Feedback</Link>
    </div>
  );
};

export default Home;