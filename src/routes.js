import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/home";
import New from "./pages/new";
import Dashboard from "./pages/dashboard";
import Entry from "./pages/entry";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <New />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/entry/:creator_id" component={(props) => <Entry  {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}
