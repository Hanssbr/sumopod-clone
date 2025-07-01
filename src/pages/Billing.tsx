import BillingComp from "../components/BillingComp";
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";

function Billing() {
  return (
    <>
      <div className="flex min-h-screen ">
        <div>
          <SideBar />
        </div>

        <main className="flex-1 bg-gray-100">
          <Profile />
          <BillingComp />
        </main>
      </div>
    </>
  );
}

export default Billing;
