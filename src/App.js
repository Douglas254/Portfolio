import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
