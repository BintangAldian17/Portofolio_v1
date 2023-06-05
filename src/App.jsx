import { useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const contact = useRef();
  const about = useRef();
  const portofolio = useRef();
  const hero = useRef();

  return (
    <div className=" bg-[url('./assets/BackGround.png')] w-full h-full overflow-y-auto">
      <Navbar hero={hero} contact={contact} portofolio={portofolio} about={about} />
      <Hero hero={hero} />
      <About about={about} />
      <Portofolio portofolio={portofolio} />
      <Contact contact={contact} />
      <Footer />
    </div>
  );
}

export default App;
