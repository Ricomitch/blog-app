import React from "react";
import "./App.css";
import Posts from "./screens/Posts/Posts";
import PostCreate from "./screens/PostCreate/PostCreate";
import PostEdit from "./screens/PostEdit/PostEdit";
import PostDetail from "./screens/PostDetail/PostDetail";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
