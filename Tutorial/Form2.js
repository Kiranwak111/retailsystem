import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, { useState } from 'react';
import './index.css';

const App = () => {

    // cMail var is a 'single source of truth' used at value , array and setfunction

    const [cMail, setEmail] = useState('');
    const [fullName, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameNew, setLastNameNew] = useState('');

    const inputChange = (event) => {  

        setEmail(event.target.value);

    }

    const inputChange1 = (event) => {
        
        setLastName(event.target.value)
        
    }
    
    const submitSucces = (event) => {
        
        event.preventDefault();  // for Prevent the refreshing page

        setName(cMail);
        setLastNameNew(lastName);

    }

    return (
        <>
            <form onSubmit={submitSucces} >
                <div>
                    {/* <h1> Hello  {cMail} </h1> */}
                    <h1> Hello  {fullName} {lastNameNew}</h1>
                    <input className='emailId' type='text' placeholder='Enter Your Email' onChange={inputChange} value={cMail} />
                    <br />
                    <input className='emailId' type='text' placeholder='Enter Your Last Name' onChange={inputChange1} value={lastName} />
                    <button  type = 'submit'> Submit </button>
                </div>
            </form>

        </>
    );
};

export default App;