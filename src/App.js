import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import Main from "./components/Main/Main";
import axios from "axios";

function App() {
    const setCsrf = async () => {
        console.log('GETTING CSRF TOKEN')
        await axios.get('https://ataraxia.live/api/auth/set-csrf-cookie');
    }

    setCsrf()

    return (
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/profile" component={Profile} exact/>
            <Route path="/" component={Main}/>
        </Switch>
      </BrowserRouter>
  );
}
export default App;
