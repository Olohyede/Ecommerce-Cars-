import { Link, NavLink } from 'react-router-dom'


function Navbar (){
    return(
         <nav className="w-full bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        CarMarket
      </Link>

      {/* Links */}
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cars"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
          }
        >
          Browse Cars
        </NavLink>
      </div>
    </nav>
    )
}




export default Navbar