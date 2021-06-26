import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Works from "./component/Works";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "./App.css";
import NavBar from "./component/NavBar";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
