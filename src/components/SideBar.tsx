import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <aside className="w-64 h-screen bg-white-800 text-black p-4">
        <div className="flex border-b-2 border-gray-100 pb-5">
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
        </div>
        <ul className="space-y-2 mt-3 text-sm font-medium">
          <li>
            <Link to={"/dashboard/services"} className="block hover:bg-blue-200 p-2 rounded">
              Services
            </Link>
          </li>
          <li>
            <Link to={"#"} className="block hover:bg-blue-200 p-2 rounded">
              AI
            </Link>
          </li>
          <li>
            <Link to={"#"} className="block hover:bg-blue-200 p-2 rounded">
              Billing
            </Link>
          </li>
          <li>
            <Link to={"#"} className="block hover:bg-blue-200 p-2 rounded">
              Affiliate
            </Link>
          </li>
          <li>
            <Link to={"#"} className="block hover:bg-blue-200 p-2 rounded">
              Setting
            </Link>
          </li>
          <li>
            <Link to={"#"} className="block hover:bg-blue-200 p-2 rounded">
              Support
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
