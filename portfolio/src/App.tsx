import Body from "./components/Body";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="w-full">
        <Home />
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
