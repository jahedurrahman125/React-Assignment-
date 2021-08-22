import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailsCard from "./components/DetailsCard/detailscard";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App"> 
       <Router>
            <Route exact path="/">
               <HomePage />
            </Route>
            <Route path="/cards/:id">
                <DetailsCard />
            </Route>
        </Router>
    </div>
  );
}
export default App;
