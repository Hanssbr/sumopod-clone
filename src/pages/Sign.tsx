import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SingUpCard from "../components/SignUpCard";

function Sign() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="min-h[70vh]">
          <SingUpCard />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Sign;
