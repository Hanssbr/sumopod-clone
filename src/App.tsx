import Card from "./components/Card";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import Ready from "./components/Ready";
import Service from "./components/Service";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav>
        <Navbar />
      </nav>
      <section className="min-h-screen">
        <div className="flex justify-center items-center min-h-screen w-full">
          <Greeting />
        </div>
      </section>
      <section className="min-h-screen bg-gray-100">
        <Card />
      </section>
      <section className="min-h-screen p-20">
        <Service />
      </section>
      <section className="p-20">
        <Ready />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
