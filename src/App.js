
import React from "react";
import Home from "./Home"
import Pizza from "./Pizza"
import Confirmation from "./Confirmation"
import { Route, Link } from "react-router-dom"


const App = () => {
  return (

<div className="App" style={{backgroundImage: "url(https://i.pinimg.com/originals/4e/d3/cc/4ed3ccdc743bc7cafc7463c56bc51bed.jpg)", height: "800px"}}>


<nav 
style={{backgroundColor: "#fcbf49", display: "flex", flexFlow: "row"}}>
  <h1 className="sitename" 
  style={{marginLeft: "5%",  color: "#d62828", textShadow: "3px 3px black"}}>
  Lambda Eats
  </h1>

  <div className="nav-links" style={{marginLeft: "55%", marginTop: "1%"}}>
    <Link to="/" 
    style={{border: "5px groove black", fontSize: "1.5rem",  textDecoration: "none",color: "#d62828", textShadow: "2px 1px black", backgroundColor: "#e9c46a", marginRight: "5%", marginLeft: "-10%"}}>Home</Link>

    <Link to="/Pizza" 
    style={{border: "5px groove black", fontSize: "1.5rem", textDecoration: "none", color: "#d62828", textShadow: "2px 1px black", backgroundColor: "#e9c46a"}}>Order Now</Link>
  </div>
</nav>





<Route exact path="/">
  <Home />
</Route>

<Route path="/Pizza">
  <Pizza />
</Route>

<Route path="/Confirmation">
  <Confirmation />
</Route>

</div>
);
};
export default App;