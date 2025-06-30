import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
      <Link
        to="/signup"
        className="flex justify-center items-center rounded-md bg-blue-600 px-6 py-2.5 text-white text-sm sm:text-base w-full sm:w-auto text-center"
      >
        Get Started
      </Link>
      <Link
        to="/templates"
        className="flex items-center justify-center rounded-md bg-gray-100 px-6 py-2.5 text-sm font-medium w-full sm:w-auto text-center"
      >
        See All Templates
      </Link>
    </div>
  );
}

export default GetStarted;
