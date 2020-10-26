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
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
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
import { NavLink } from 'react-router-dom';
import './index.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <NavLink exact activeClassName="active_class" to='/'> Home </NavLink>
                <NavLink exact activeClassName="active_class" to='/contact'> ContactUs </NavLink>
                <NavLink exact activeClassName="active_class" to='/search'> Search </NavLink>
                <NavLink exact activeClassName="active_class" to='/service'> Service </NavLink>
                <NavLink exact activeClassName="active_class" to='/user/kiran/wakchaure'> User </NavLink>

            </div>

        </>
    );
};

export default Navbar;

// Home.js
// Service.js
// Contact.js
// User.js

// Search.js

import React, { useState } from 'react';
import SearchResult from './SearchResult';

const Search = () => {

    const [img, setImg] = useState('');

    const inputEvent = (event) => {
        const data = event.target.value

        setImg(data)
    }

    return (
        <>
            <div className='searchBar'>
                <input type='text' value={img} placeholder='search anything' onChange={inputEvent} />
            </div>
            {img === '' ? null : <SearchResult anyName={img} />}
        </>
    );
};

export default Search;

// SearchResult.js

import React from 'react';

const SearchResult = (props) => {
    const img = `https://source.unsplash.com/400x300/?${props.anyName}`
    return (
        <>
            <div className='searchImage'>
                <img src={img} />
            </div>
        </>
    )
}

export default SearchResult;

// index.css

.active_class {
    color: black;
  }
  
  .navbar{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    background-color: violet;
    font-size: 30px;
  }
  
  .searchBar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .searchImage{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
  
  
