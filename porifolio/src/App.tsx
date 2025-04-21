import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { ExperiencesList } from "./components/ExperiencesList";
import { Awards } from "./components/Awards";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <ExperiencesList />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
