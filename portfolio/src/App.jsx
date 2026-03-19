import Header from "./components/Header/Header.jsx";
import Overview from "./components/Overview/Overview.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import "./App.css";

function App() {
  return (
    <main className="portfolio-container">
      <Header />
      <Overview />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
