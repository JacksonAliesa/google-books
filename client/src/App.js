import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Saved from "./pages/Saved"



function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}> </Route>
        <Route exact path="/saved" component={Saved}> </Route>

      </Router>
    </div>
  )
}

export default App;
