import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import "./styles.css";
import Tools from "./components/Tools";
import MyChoices from "./components/MyChoices";
import Websites from "./components/Websites";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/my-choices">My choices</Link>
          </li>
          <li>
            <Link to="/websites-to-follow">Websites to follow</Link>
          </li>
          <li>
            <a href="https://learn.seytech.co" target="_blank">
              Seytech
            </a>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/tools">
            <Tools />
          </Route>
          <Route path="/my-choices">
            <MyChoices />
          </Route>
          <Route path="/websites-to-follow">
            <Websites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
