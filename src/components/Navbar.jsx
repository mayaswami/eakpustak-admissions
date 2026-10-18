import { useState } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admission-process" },
  { label: "Facilities", href: "#facilities" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a href="#top" className="brand">
        <span className="brand-mark">E</span>
        <span className="brand-name">
          EAK
          <small>INTERNATIONAL SCHOOL</small>
        </span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-controls="main-nav"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="menu-toggle__bar" />
        <span className="menu-toggle__bar" />
      </button>

      <nav
        id="main-nav"
        className={`nav-links ${isOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a href="#enquiry" className="header-cta" onClick={closeMenu}>
          Enquire Now <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
