import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../ui/Button";
import { ROUTES } from "../../constants/routes";

const navLinkClass = ({ isActive }) =>
  `font-medium transition-colors ${
    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
  }`;

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow-md bg-white">
      <Link to={ROUTES.HOME} className="text-2xl font-bold text-blue-600">
        AI ATS
      </Link>

      <div className="flex items-center gap-8">
        <NavLink to={ROUTES.HOME} className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to={ROUTES.UPLOAD} className={navLinkClass}>
          Upload
        </NavLink>
        <NavLink to={ROUTES.DASHBOARD} className={navLinkClass}>
          Dashboard
        </NavLink>

        {user ? (
          <Button
            onClick={logout}
            className="bg-gray-200 !text-gray-800 hover:bg-gray-300"
          >
            Logout
          </Button>
        ) : (
          <NavLink to={ROUTES.LOGIN} className={navLinkClass}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
