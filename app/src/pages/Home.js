import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faList,
  faBars,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";

const Home = () => {
  const grid = 5;
  return (
    <div className="home">
      <div className="image-overlay"></div>
      <div className="image-hero"></div>
      <nav className="navbar home">
        <div className="logo">Hestia</div>
        <div className="navigation">
          <Link className="home current" to={"/home"}>
            HOME
          </Link>
          <Link className="home" to={"/blog"}>
            BLOG
          </Link>
          <Link className="home" to={"/contact"}>
            CONTACT
          </Link>
          <button className="more-btn">MORE</button>
        </div>
      </nav>
      <div className="homepage-hero">
        <div className="heading">Welcome to Hestia!</div>
        <div className="sub-heading">Lorem ipsum dolor sit amet</div>
        <div className="see-more-btn">
          <button>SEE MORE</button>
        </div>
      </div>
      <div className="information-wrapper">
        <div className="stand-for">
          <div className="stand-for-heading">What we stand for</div>
          <div className="info-wrapper">
            <div className="responsive">
              <FontAwesomeIcon icon={faGrip} className="responsive-icon" />
              <h3>Responsive</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                ex veritatis quo, repudiandae sed dolore possimus molestias
                suscipit exercitationem explicabo.
              </p>
            </div>
            <div className="quality">
              <FontAwesomeIcon icon={faList} className="quality-icon" />
              <h3>Quality</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                ex veritatis quo, repudiandae sed dolore possimus molestias
                suscipit exercitationem explicabo.
              </p>
            </div>
            <div className="support">
              <FontAwesomeIcon icon={faBars} className="support-icon" />
              <h3>Support</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                ex veritatis quo, repudiandae sed dolore possimus molestias
                suscipit exercitationem explicabo.
              </p>
            </div>
          </div>
        </div>

        <div className="about-background"></div>
        <div className="about">
          <div className="background"></div>
          <div className="about-wrapper">
            <div className="heading">
              <h1>About Hestia</h1>
              <p>
                Need more details? Please check our full documentation for
                detailed <br />
                information on how to use Hestia.
              </p>
            </div>
            <div className="about-img">
              <img
                src="https://wp-themes.com/wp-content/themes/hestia/assets/img/about-content.png"
                alt="documents"
              />
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="blog-header">Blog</div>
          <div className="blog-info-wrapper">
            <div className="post">
              <a className="link link-purple">UNCATEGORIZED</a>
              <br />
              <a className="link-heading">Worth a Thousand Words</a>
              <p>Boat.</p>
            </div>
            <div className="post">
              <a className="link link-green">UNCATEGORIZED</a>
              <br />
              <a className="link-heading">Elements</a>
              <p>
                The purpose of this HTML is to help determine what default
                settings are with CSS and to make sure that all possible HTML
                Elements are included in this HTML so as to not miss any
                <a>Read more...</a>
              </p>
            </div>
            <div className="post">
              <a className="link link-red">UNCATEGORIZED</a>
              <br />
              <a className="link-heading">More Tags</a>
              <p>More of these posts need tags.</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact-info-wrapper">
            <h1>Get in Touch</h1>
            <h2>
              <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />{" "}
              Find us at the office
            </h2>
            <p>Strada Povernei, nr 20, Bucharest, Romania</p>
            <h2>
              <FontAwesomeIcon icon={faMobileScreen} className="contact-icon" />{" "}
              Give us a ring
            </h2>
            <p>John Doe +40 712 345 678 Mon-Fri, 8:00-22:00</p>
          </div>
        </div>
        <Footer page="home" />
      </div>
    </div>
  );
};

export default Home;
