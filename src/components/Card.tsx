import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[800px]">
        <div className="w-2xl">
          <h4 className="text-3xl font-bold text-center mb-4">
            Simple, Transparent Pricing
          </h4>
          <p className="text-xl text-gray-600 text-center mb-14">
            Get started with SumoPod today and experience the power of container
            management
          </p>
        </div>
        <div className="w-[34rem] bg-white rounded-2xl border-2 border-blue-600">
          <div className="flex flex-col justify-center items-center text-center gap-10">
            <div className="px-20 pt-10">
              <p className="text-2xl font-bold mb-7">Start Today</p>
              <p className="text-blue-600 text-5xl font-extrabold mb-7">FREE</p>
              <p className="text-gray-600">
                All the features you need to manage containers and applications
                effectively
              </p>
            </div>
            <div className="login-button">
              <div className="flex flex-col gap-5 pb-10">
                <Link
                  to="#"
                  className="flex justify-center items-center rounded-md bg-blue-600 px-48 py-2.5 text-white"
                >
                  Get Started
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-center rounded-md bg-white border border-gray-200 px-48 py-2.5 text-sm font-medium"
                >
                  See All Templates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Card;
