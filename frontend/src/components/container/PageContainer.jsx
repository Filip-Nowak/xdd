import React, { useState, useEffect } from "react";
import styles from "./pageContainer.module.css";
import logo from "../../assets/logo.png";
import { Outlet, useNavigate } from "react-router";

// Funkcja komponentu
export default function PageContainer() {
  const navigate = useNavigate();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  // Funkcja do przełączania mobilnego menu
  const toggleMobileMenu = () => {
    setMobileMenuVisible((prev) => !prev);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuVisible(false); // Zamyka menu po kliknięciu
  };

  // Funkcja obsługująca zmianę rozmiaru ekranu
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuVisible(false); // Zamyka menu przy przejściu na szerokie ekrany
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Od razu sprawdzanie na starcie

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />

        {/* Mobilny przycisk menu */}
        {isMobileView && (
          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            &#9776; {/* Ikona hamburger menu */}
          </div>
        )}

        {/* Opcje nawigacyjne tylko na większych ekranach */}
        {!isMobileView && (
          <div className={styles.navMenu}>
            <div
              className={styles.option}
              onClick={() => handleNavigation("/")}
            >
              Strona główna
            </div>
            <div
              className={styles.option}
              onClick={() => handleNavigation("/about")}
            >
              O nas
            </div>
            <div
              className={styles.option}
              onClick={() => handleNavigation("/contact")}
            >
              Kontakt
            </div>
            <div
              className={styles.option}
              onClick={() => handleNavigation("/blog")}
            >
              Blog
            </div>
          </div>
        )}
      </div>

      {/* Menu mobilne */}
      {isMobileView && (
        <div
          className={`${styles.sideMenu} ${
            mobileMenuVisible ? styles.show : ""
          }`}
        >
          <div className={styles.option} onClick={() => toggleMobileMenu()}>
            close
          </div>
          <div className={styles.option} onClick={() => handleNavigation("/")}>
            Strona główna
          </div>
          <div
            className={styles.option}
            onClick={() => handleNavigation("/about")}
          >
            O nas
          </div>
          <div
            className={styles.option}
            onClick={() => handleNavigation("/contact")}
          >
            Kontakt
          </div>
          <div
            className={styles.option}
            onClick={() => handleNavigation("/blog")}
          >
            Blog
          </div>
        </div>
      )}

      {/* Outlet dla child routes */}
      <Outlet />
      <div style={{height:"2vh"}}>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2023 Handluj z Nami Paletami | Wszystkie prawa zastrzeżone</p>
      </footer>
    </div>
  );
}
