import navStyles from "../styles/NavBar.module.css";

import { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [background, setBackground] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 25) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav
      className={
        isOpen
          ? navStyles.navbar + " " + navStyles.background
          : background
          ? navStyles.navbar + " " + navStyles.background
          : navStyles.navbar
      }
    >
      <div className={navStyles.logo}></div>
      <div
        onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
        className={
          isOpen
            ? navStyles.navBtn2 + " " + navStyles.isOpen
            : navStyles.navBtn2
        }
      >
        <span className={navStyles.bar}></span>
        <span className={navStyles.bar}></span>
        <span className={navStyles.bar}></span>
      </div>
      <ul className={isOpen && navStyles.isOpen}>
        <li>Pocetna</li>
        <li>Projekti</li>
        <li>Dizajneri</li>
        <li>O nama</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};

export default NavBar;
