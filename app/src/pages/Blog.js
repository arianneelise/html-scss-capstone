import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="Blog">
      <Navbar page="blog" />
      <div className="blog-hero">
        <h1>Blog</h1>
      </div>
      <div className="blog-content">
        <div className="post post-1">
          <a className="link link-purple">UNCATEGORIZED</a>
          <br />
          <a className="link-heading">Worth a Thousand Words</a>
          <p>Boat.</p>
        </div>
        <div className="post post-2">
          <a className="link link-green">UNCATEGORIZED</a>
          <br />
          <a className="link-heading">Elements</a>
          <p>
            The purpose of this HTML is to help determine what default settings
            are with CSS and to make sure that all possible HTML Elements are
            included in this HTML so as to not miss any
            <a>Read more...</a>
          </p>
        </div>
        <div className="post">
          <a className="link link-red">UNCATEGORIZED</a>
          <br />
          <a className="link-heading">More Tags</a>
          <p>More of these posts need tags.</p>
        </div>
        <Footer page="blog" />
      </div>
    </div>
  );
};

export default Blog;
