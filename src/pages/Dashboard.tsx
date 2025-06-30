import Profile from "../components/Profile";
import ServiceData from "../components/ServiceData";
import SideBar from "../components/SideBar";

function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen ">
        <div>
          <SideBar />
        </div>

        <main className="flex-1 bg-gray-100">
          <Profile />
          <ServiceData />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
