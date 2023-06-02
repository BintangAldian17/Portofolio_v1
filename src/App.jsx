import { useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";

function App() {
  const contact = useRef();
  const about = useRef();
  const portofolio = useRef();
  const hero = useRef();

  return (
    <div className=" bg-dark w-full h-full overflow-y-auto">
      <Navbar hero={hero} contact={contact} />
      <Hero hero={hero} />
      <About />
      <Portofolio />
      <Contact contact={contact} />
    </div>
  );
}

export default App;
