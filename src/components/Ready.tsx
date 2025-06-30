import { Link } from "react-router-dom";

function Ready() {
  return (
    <>
      <div className=" py-20 bg-blue-600 rounded-2xl border-2 border-blue-600">
        <div className="flex justify-between items-center">
          <div className="px-14 pr-4">
            <p className="text-3xl font-bold mb-7 text-white">
              Ready to transform your container management?
            </p>
            <p className="text-gray-300 text-lg max-w-2xl">
              Join thousands of businesses using SumoPod to simplify their
              container and application infrastructure.
            </p>
          </div>
          <div className="flex gap-4 px-17 pl-4">
            <Link
              to="#"
              className="flex items-center justify-center rounded-md bg-blue-600 border border-gray-200 px-6 py-2.5 text-sm text-white font-medium"
            >
              See All Templates
            </Link>
            <Link
              to="#"
              className="flex justify-center items-center rounded-md bg-white px-6 py-2.5 text-black font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ready;
