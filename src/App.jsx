import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <ProjectSection />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
