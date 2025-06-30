import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="flex justify-center pt-20">
          <div className="flex justify-between border-b border-gray-500 pb-14">
            <div className="flex flex-col max-w-xs gap-2">
              <div className="flex flex-row">
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
                <h1 className="text-xl font-bold text-white mr-12">
                  Sumo<span className="text-blue-600">Pod</span>
                </h1>
              </div>
              <p className="text-gray-400">
                SumoPod offers seamless container and application purchasing
                solutions for businesses of all sizes.
              </p>
            </div>
            <div className="flex flex-row gap-60">
              <div>
                <h3 className="font-semibold text-lg text-white">
                  Quick Links
                </h3>
                <ul className="text-gray-400">
                  <li className="py-1">
                    <Link to={"#"}>Home</Link>
                  </li>
                  <li className="py-1">
                    <Link to={"#"}>Get Started</Link>
                  </li>
                  <li className="py-1">
                    <Link to={"#"}>Login</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Product</h3>
                <ul className="text-gray-400">
                  <li className="py-1">
                    <Link to={"#"}>Features</Link>
                  </li>
                  <li className="py-1">
                    <Link to={"#"}>Pricing</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Contact</h3>
                <ul className="text-gray-400">
                  <li className="py-1">
                    <p>support@sumopod.com</p>
                  </li>
                  <li className="py-1">
                    <p>+62851-9005-2577</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-gray-500 p-10">
          <p>
            © 2025 KodingWorks - PT Koding Kreasi Indonesia. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
