const ScoreCard = ({ score }) => {
  return (
    <div className="bg-white rounded-xl shadow p-8 text-center">
      <h2 className="text-2xl font-semibold">ATS Score</h2>
      <p className="text-6xl font-bold text-blue-600 mt-4">{score}</p>
      <p className="text-gray-500 mt-2">out of 100</p>
    </div>
  );
};

export default ScoreCard;
