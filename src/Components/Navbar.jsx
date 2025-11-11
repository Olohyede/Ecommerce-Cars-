import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        <Link to="/" className="text-2xl font-bold text-blue-600">
          Car<span className="text-gray-800">Market</span>
        </Link>

        {/* Nav Links */}
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cars"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Cars
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}




export default Navbar