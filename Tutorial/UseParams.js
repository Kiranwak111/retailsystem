import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

// App.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import Contact from './Contact';
import Service from './Service';
import User from './User'
import Navbar from './Navbar';

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={() =>  <Home /> } />
        <Route exact path='/service' render={() => { return <Service  name = 'SERVICE'/> }} /> 
        <Route exact path='/contact' component = {Contact} />
        <Route  exact path='/user/:fname' component = {User} />
        <Route  exact path='/user/:fname/:lname' component = {User} />
        {/* <Route path='/contact/About' component={About} /> */}
        <Route component={Error} />
        {/* <Home />
      <About />
      <Contact /> */}
      </Switch>
    </>
  );
};

export default App;

// Navbar.js

import React from 'react';
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import './index.css'

const Navbar = () => {
    return (
        <>

        <NavLink exact activeClassName="active_class" to= '/'> Home </NavLink>
        <NavLink exact activeClassName="active_class" to= '/contact'> ContactUs </NavLink>
        <NavLink exact activeClassName="active_class" to= '/service'> Service </NavLink>
        <NavLink exact activeClassName="active_class" to= '/user/kiran/wakchaure'> User </NavLink>
       
        </>
    );
};

export default Navbar;

// User.js

import React from 'react';
import {useParams} from 'react-router-dom'

// const User = ({match}) => {    // this is used before useParams
//     return (
//     <>
//     <h1>user {match.params.fname} page </h1>
//     </>
//     )
// }

const User = () => {

    const {fname, lname} = useParams();
    
    return (
    <>
    <h1>user {fname} {lname} page </h1>
    </>
    )
}

export default User;

import React from 'react';
import {useParams, useLocation} from 'react-router-dom'


const User = () => {

    const {fname, lname} = useParams();
    const location = useLocation()

    console.log(location);
    console.log(location.pathname)

    return (
    <>
    <h1>user {fname} {lname} page </h1>
    <p>my element {location.pathname}</p>
    {location.pathname === '/user/kiran/wakchaure' ? <button onClick = {() => alert ('this is alrt ms')}> Click Me </button> : null}
    </>
    )
}

export default User;



