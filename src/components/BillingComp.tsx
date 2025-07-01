import { Link } from "react-router-dom";

function BillingComp() {
  return (
    <>
      <div className="m-10">
        <div className="pb-10 flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Billing</h1>
            <p className="text-sm font-normal text-gray-600">
              Manage your balance and view transaction history
            </p>
            <div></div>
          </div>
          <div className="flex gap-5">
            <Link
              to="/login"
              className="flex h-fit items-center justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium"
            >
              Billing
            </Link>
            <Link
              to="/signup"
              className="flex h-fit items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
            >
              Add Credit
            </Link>
          </div>
        </div>
        <div className="px-5 py-6 w-full bg-white rounded-md mb-5">
          <p className="text-sm text-gray-500">Current Credits</p>
          <p className="text-2xl font-bold">Rp. 10.000</p>
        </div>
        <div className="px-5 pt-2 w-full border-t-2 border-x-2 border-gray-300 bg-gray-100 rounded-md flex gap-4">
          <Link
            to={"/billing"}
            className="bg-white px-2 py-1 rounded-md shadow-sm text-blue-600"
          >
            Transactions
          </Link>
          <Link to={"/billing/payments"} className="px-2 py-1">
            Payments
          </Link>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DESCRIPTION</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TYPE</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7/1/2025	</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Service purchase: Ray Service (monthly)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">usage</td>
                        <td className="font-medium text-red-600">Rp -30.000 credits</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
}

export default BillingComp;
