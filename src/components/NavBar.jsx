import { useEffect, useState } from "react";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <nav className={`navbar shadow-lg  ${scrolled?"scrolled":""}`}>
        <div className={`flex justify-between items-center mx-12`}>
          {/* logo */}
          <div className={`navbar-logo`}>
            <a href="#home">
              <img className="h-10" src="images/logo.png" alt="Logo" />
            </a>
          </div>

          {/* Links */}
          <div className={`nav-link`}>
            <a
              href="#home"
              className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white ${
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </a>

            <a
              href="#skills"
              className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white ${
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white ${
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </a>
          </div>

          {/* social icons */}
          <span className={`navbar-text `}>

          <div className={`social-icon`}>
            <a href="https://www.linkedin.com/in/md-rashid-iqbal-81052a23b/" target="_blank" className={`lin`}>
              <img className="h-6" src={navIcon1} alt="" />
            </a>
            <a href="https://www.facebook.com/rashid.iqbal.9638718"  target="_blank "className={`fac`}>
              <img className="h-6" src={navIcon2} alt="" />
            </a>
            <a href="https://www.instagram.com/rashidiqbal_rg/" target="_blank" className={`ins`}>
              <img className="h-6" src={navIcon3} alt="" />
            </a>
          </div>

          {/* button  */}
          <button
            className=""
            onClick={() => {
              console.log("connect");
            }}
          >
            <span>Let's Connect</span>
          </button>
        
          </span>
          </div>

      </nav>
    </>
  );
};

export default NavBar;
