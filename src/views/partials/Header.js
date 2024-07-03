import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../img/logo.webp";
function Header() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [headerVisible, setHeaderVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop - window.innerHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight - window.innerHeight / 3
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const homePage = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    }
    navigate("/#home");
  };

  const aboutPage = () => {
    navigate("/");
  };

  const servicesPage = () => {
    navigate("/");
  };

  const contactPage = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <a href="#home" onClick={homePage} className="logo">
        Trung Tâm Bảo Hành
        <span>ZOJIRUSHI</span>
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <img src={logo} alt="Logo" />
      <nav className="navbar">
        <a
          href="#home"
          onClick={homePage}
          className={activeSection === "home" ? "active home" : "home"}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={aboutPage}
          className={activeSection === "about" ? "active home" : "home"}
        >
          About
        </a>
        <a
          href="#services"
          onClick={servicesPage}
          className={activeSection === "services" ? "active home" : "home"}
        >
          Services
        </a>
        <a
          href="#contact"
          onClick={contactPage}
          className={activeSection === "contact" ? "active home" : "home"}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
