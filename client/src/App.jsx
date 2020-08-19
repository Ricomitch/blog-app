import React from "react";
import "./App.css";
import Posts from "./screens/Posts/Posts";
import PostCreate from "./screens/PostCreate/PostCreate";
import PostEdit from "./screens/PostEdit/PostEdit";
import PostDetail from "./screens/PostDetail/PostDetail";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <nav>I AM EVERYWHERE</nav>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
      <footer>I AM EVERYWHERE</footer>
    </div>
  );
};

export default App;
