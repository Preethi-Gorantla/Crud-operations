import './App.css';
import SideBar from './components/Sidebar/Sidebar';
import Campaign from '../src/components/Campaign/Campaign';
import Allcampaign from "./components/Campaign/Tablerow";
import GetStarted from './components/GetStarted';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route path="/" exact component={GetStarted} />
          <Route path="/campaign" exact component={Campaign} />
          <Route path="/allcampaign" component={Allcampaign} />
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
