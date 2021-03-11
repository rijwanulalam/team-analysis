import Home from './components/Home/Home'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <div>
      {/* Routing */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/teamDetail/:teamId">
            <TeamDetail />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
