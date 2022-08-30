import "./App.css";
import Home from "./componet/Home";
import About from "./componet/About";
import Head_and_tail from "./componet/Head_and_tail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
   
      <div className="App">
         <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>

        <Route path='/about'>
      
          <About></About>
        </Route>

        <Route path='/headandtail'>
          <Head_and_tail></Head_and_tail>
        </Route>
        </Switch>
      </div>
    
  );
}

export default App;
