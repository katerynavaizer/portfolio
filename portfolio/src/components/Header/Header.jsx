import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        {/* Clicking your name scrolls to the top */}
        <a href="#top">&gt; Kateryna Vaizer</a>
      </div>
      <nav className="header-nav">
        <ul className="header-nav__list">
          <li>
            {/* Standard anchor links for smooth scrolling */}
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
