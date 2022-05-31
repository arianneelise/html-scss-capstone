import { Link } from "react-router-dom";

const Navbar = (props) => {
  if (props.page == "blog") {
    return (
      <nav className="page-navbar">
        <div className="logo">Hestia</div>
        <div className="navigation">
          <Link className="blog" to={"/home"}>
            HOME
          </Link>
          <Link className="blog current" to={"/blog"}>
            BLOG
          </Link>
          <Link className="blog" to={"/contact"}>
            CONTACT
          </Link>

          <button className="more-btn">MORE</button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="page-navbar">
        <div className="logo">Hestia</div>
        <div className="navigation">
          <Link className="blog" to={"/home"}>
            HOME
          </Link>
          <Link className="blog" to={"/blog"}>
            BLOG
          </Link>
          <Link className="blog current" to={"/contact"}>
            CONTACT
          </Link>

          <button className="more-btn">MORE</button>
        </div>
      </nav>
    );
  }
};

export default Navbar;
