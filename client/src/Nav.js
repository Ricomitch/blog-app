import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Blog-App </Link>
      <Link to="/">Blogs </Link>
      <Link to="/add-post">Create a blog post </Link>
    </nav>
  );
}
