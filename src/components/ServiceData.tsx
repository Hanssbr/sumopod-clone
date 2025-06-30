import { Link } from "react-router-dom";

function ServiceData() {
  return (
    <>
      <div className="m-10">
        <div className="pb-10 flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Services</h1>
            <p className="text-sm font-normal text-gray-600">
              Manage your managed services
            </p>
            <div></div>
          </div>
          <div className="flex gap-5">
            <Link
              to="/login"
              className="flex h-fit items-center justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium"
            >
              Refresh
            </Link>
            <Link
              to="/signup"
              className="flex h-fit items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
            >
              Add Services
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center rounded-t-md border-2 border-gray-200 px-3 py-2 text-xs font-normal text-gray-500 ">
          <p>NAME</p>
          <p>TYPE</p>
          <p>STATUS</p>
          <p>PLAN</p>
          <p>AUTO RENEWAL</p>
          <p>EXPIRY</p>
          <p>ACTIONS</p>
        </div>
        <div className="flex justify-center items-center px-20 py-10 bg-white border-b-2 border-x-2 border-gray-200 rounded-b-md">
          <p>No services found matching your criteria</p>
        </div>
      </div>
    </>
  );
}

export default ServiceData;
