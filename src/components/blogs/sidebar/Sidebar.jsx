import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cdn.pixabay.com/photo/2020/05/09/21/43/hacker-5151533_1280.jpg"
          alt=""
        />
        <p>
          Just a Tech
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Web
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              IT
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              App
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Coding
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              DSA
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/rashid.iqbal.9638718"><i className="sidebarIcon fab fa-facebook-square"></i></a>
          
          <a href="https://www.instagram.com/rashidiqbal_rg/"><i className="sidebarIcon fab fa-instagram-square"></i></a>
          
          <a href="https://www.linkedin.com/in/md-rashid-iqbal-81052a23b"><i className="sidebarIcon fab fa-linkedin"></i></a>
          
        </div>
      </div>
    </div>
  );
}
