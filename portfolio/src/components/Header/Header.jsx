import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <a href="#top">&gt; Kateryna Vaizer</a>
      </div>
      <nav className="header-nav">
        <ul className="header-nav__list">
          <li>
            <a href="#experience" className="header-nav__link">
              Experience
            </a>
          </li>
          <li>
            <a href="#education" className="header-nav__link">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="header-nav__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="header-nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
