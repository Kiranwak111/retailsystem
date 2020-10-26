import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
 
// App.js

import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
// import Error from './Error';
import Contact from './Contact';
import Service from './Service';
import Search from './Search';
import User from './User'
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/service' render={() => { return <Service name='SERVICE' /> }} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/user/:fname' component={User} />
        <Route exact path='/user/:fname/:lname' component={User} />
        {/* <Route path='/contact/About' component={About} /> */}
        <Route component={Error} />
        {/* <Redirect to = '/' /> */}
        {/* <Home />
      <About />
      <Contact /> */}
      </Switch>
    </>
  );
};

export default App;

// Navbar.js
// Home.js
// Service.js

// Error.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
        <h1> 404 Error page </h1>
        <p> Sorry, This page not found</p>
        <NavLink to = '/'> Go Back</NavLink>
    </>
  );
};

export default Error;