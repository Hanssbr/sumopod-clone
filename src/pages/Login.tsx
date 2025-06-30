import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="min-h[70vh]">
          <LoginCard />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Login;
