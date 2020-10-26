import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js


import React, { createContext } from 'react'
import CompA from './CompA'


const FirstName = createContext();
const LastName = createContext();


const App = () => {
  return (
    <>
      <FirstName.Provider value = {'kedar'}>
      <LastName.Provider value = {'Ghanchekar'}>
        <CompA />
      </LastName.Provider>
      </FirstName.Provider>

    </>
  )
}

export default App;
export {FirstName, LastName};

// CompA.js

import React from 'react'
import CompB from './CompC'


const CompA = () => {
  return (
    <>
        <CompB />
    </>
  )
}

export default CompA;

// CompB.js


import React from 'react'
import CompC from './CompC'


const CompB = () => {
  return (
    <>
        <CompC />
    </>
  )
}

export default CompB;

// CompC.js

import React from 'react'
import { FirstName, LastName } from './App'

const CompC = () => { // functionchya aat function called as 'callback hell'
  return (
    <>
      <FirstName.Consumer> 
        {(fname) => {  // we can pass anyname 
          return <>
            <LastName.Consumer>
              {(lname) => {
                return <h1> Welcome to {fname} {lname} </h1>
              }}
            </LastName.Consumer>
          </>
        }}
      </FirstName.Consumer>
    </>
  )
}

export default CompC;

// OR 

// CompC.js

import React from 'react'
import { useContext } from 'react'
import { FirstName, LastName } from './App'

const CompC = () => { 

  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <>
      <h1> Welcome to {fname} {lname}</h1>
    </>
  )
}

export default CompC;