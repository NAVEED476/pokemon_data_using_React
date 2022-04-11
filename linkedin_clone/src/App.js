import Login from './components/signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/signup'
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          
         <Route path="/signin"><Login/></Route>
          <Route path="/signup"><Signin/></Route>
          
        </Switch>
      </Router>
     

    </div>
  );
}

export default App;
