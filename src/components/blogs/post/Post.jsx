import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img,link1,link2,title,skill,discription,link}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postLink">
            <Link className="link" to="">
              {link1}
            </Link>
          </span>
          <span className="postLink">
            <Link className="link" to="">
              {link2}
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={link} className="link" target="_blank">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postSkill">{skill}</span>
      </div>
      <p className="postDesc">
        {discription}
      </p>
    </div>
  );
}
