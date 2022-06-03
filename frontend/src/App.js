import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import "./App.css";
import { getUser, loadUser } from "./actions/user.js";
import Spinner from "./components/Spinner/Spinner";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Project from "./components/Admin/Project";
import Youtube from "./components/Admin/Youtube";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />

            <Route
              path="/account"
              component={isAuthenticated ? AdminPanel : Login}
            />
            <Route
              path="/admin/timeline"
              component={isAuthenticated ? Timeline : Login}
            />
            <Route
              path="/admin/project"
              component={isAuthenticated ? Project : Login}
            />
            <Route
              path="/admin/youtube"
              component={isAuthenticated ? Youtube : Login}
            />
          </Switch>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
