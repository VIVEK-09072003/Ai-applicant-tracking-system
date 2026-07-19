const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`px-6 py-3 rounded-xl font-semibold transition duration-300 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
