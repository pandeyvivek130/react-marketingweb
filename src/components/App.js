import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home     from './Home'
import Services from './Services';
import Contact  from './Contact'
import About    from './About'
import NavBar   from './NavBar'
import Footer   from './Footer'
import Description from './Description'

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/about" component = {About} />
      <Route exact path = "/contact" component = {Contact} />
      <Route exact path = "/services" component = {Services} />
      <Route exact path = "/description" component = {Description} />
      <Redirect to = "/" ></Redirect>  
    </Switch>
    <Footer />
    </>
  );
}

export default App;
/*
*/