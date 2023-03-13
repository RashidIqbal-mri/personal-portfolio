import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      
        <div className="align-items-center">
          
        <div className="footer-logo flex">
            <a
              href="https://rashid-parallax.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-logo-image h-10"
                src="images/logo3.png"
                alt="Logo"
              />
              <img
                className="footer-logo-image-hover h-10 hidden"
                src="images/logo2.png"
                alt="Hover Logo"
              />
            </a>
            <span><i class="fa fa-code text-6xl ml-8 text-sky-400 hover:text-teal-400 animate-bounce"></i></span>
          </div>
          <div className="text-center text-sm-end ">
          <div className={`social-icon `}>
            <a href="https://www.linkedin.com/in/md-rashid-iqbal-81052a23b/" target="_blank" rel="noreferrer" className={`lin`}>
              <img className="h-6" src={navIcon1} alt="" />
            </a>
            <a href="https://www.facebook.com/rashid.iqbal.9638718"  target="_blank "className={`fac`}>
              <img className="h-6" src={navIcon2} alt="" />
            </a>
            <a href="https://www.instagram.com/rashidiqbal_rg/" target="_blank" rel="noreferrer"className={`ins`}>
              <img className="h-6" src={navIcon3} alt="" />
            </a>
          </div>
            <p className="footer-copy">© Rashid Iqbal</p>
            <p className="footer-date">2023</p>
          </div>
        </div>
      
    </footer>
  )
}
