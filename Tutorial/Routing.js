// index.js

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

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        {/* <Route path='/contact/About' component={About} /> */}
        <Route component={Error} />
        {/* <Home />
      <About />
      <Contact /> */}
      </Switch>
      <h1> kiran mama </h1>
    </>
  );
};

export default App;

// Home.js

import React from 'react';

const Home = () => {
  return (
    <>
        <h1> This is Home page </h1>
    </>
  );
};

export default Home;

// Contact.js

import React from 'react';

const Contact = () => {
  return (
    <>
        <h1> This is contact page </h1>        
    </>
  );
};

export default Contact;

// Error.js

import React from 'react';

const Error = () => {
  return (
    <>
        <h1> Oops ! This is error </h1>
    </>
  );
};

export default Error;

