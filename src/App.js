import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import Main from "./components/Main/Main";

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/profile" component={Profile} exact/>
            <Route path="/" component={Main}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
