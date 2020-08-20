import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link className="blog-logo" to="/">
        BlogsApp{" "}
      </Link>
      <Link className="home" to="/">
        Posts{" "}
      </Link>
      <Link className="add-post" to="/add-post">
        Create Post{" "}
      </Link>
    </nav>
  );
}
