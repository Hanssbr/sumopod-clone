import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-white fixed z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 justify-center items-center h-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
              <h1 className="text-xl font-bold text-gray-800 mr-12">
                Sumo<span className="text-blue-600">Pod</span>
              </h1>
              <div className="hidden md:hidden lg:flex justify-between gap-6 text-base font-medium text-gray-800">
                <Link to="/" className="hover:text-blue-700">
                  Home
                </Link>
                <Link to="#" className="hover:text-blue-700">
                  Templates
                </Link>
                <Link to="#" className="hover:text-blue-700">
                  Pricing
                </Link>
                <Link to="#" className="hover:text-blue-700">
                  Features
                </Link>
              </div>
            </div>
            <div className="login-button hidden lg:flex md:flex">
              <div className="flex gap-5">
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex justify-center items-center rounded-md bg-blue-600 px-4 py-2 text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
