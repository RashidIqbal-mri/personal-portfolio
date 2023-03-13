import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg flex ml-12">
          <span className="text-sky-500">BL</span> <span className="text-sky-300">OG</span>&nbsp;<span><i className="fa fa-globe text-sky-500"></i></span>
        </span>
      </div>
      <img
        className="headerImg"
        src="https://www.xpand-it.com/wp-content/uploads/2020/04/AFBannerReact_1920x500.png"
        alt=""
      />
    </div>
  );
}
