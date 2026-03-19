import Header from "./components/Header/Header.jsx";
import Overview from "./components/Overview/Overview.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import "./App.css";

function App() {
  return (
    <main className="portfolio-container">
      <Header />
      <Overview />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
