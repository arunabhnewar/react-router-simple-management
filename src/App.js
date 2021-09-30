import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Employee from './Components/Employee/Employee';
import Home from './Components/Home/Home';
import NavMenuBar from './Components/NavMenuBar/NavMenuBar';
import NotFound from './Components/NotFound/NotFound';
import SingleEmployee from './Components/SingleEmployee/SingleEmployee';


function App() {
  return (
    <div>
      <Router>
        <NavMenuBar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/employee">
            <Employee />
          </Route>
          <Route exact path="/employee/:id">
            <SingleEmployee />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
