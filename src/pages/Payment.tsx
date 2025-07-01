import PayComp from "../components/PayComp";
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";

function Payment() {
  return (
    <>
      <div className="flex min-h-screen ">
        <div>
          <SideBar />
        </div>

        <main className="flex-1 bg-gray-100">
          <Profile />
          <PayComp />
        </main>
      </div>
    </>
  );
}

export default Payment