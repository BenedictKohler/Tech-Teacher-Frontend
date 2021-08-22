import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Tutorial from './components/Tutorial';
import FeedBack from './components/FeedBack';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/tutorial" component={Tutorial}></Route>
          <Route exact path="/feedback" component={FeedBack}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
