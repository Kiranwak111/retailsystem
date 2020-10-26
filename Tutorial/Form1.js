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

    const inputChange = (kiran) => {   // onChange pass the object in that target.value assign that object can give any name

        //alert ('hi')
        // console.log(kiran.target.value);
        setEmail(kiran.target.value);

    }

    const onSubmit = () => {

        setName(cMail);

    }

    return (
        <>
            {/* <h1> Hello  {cMail} </h1> */}
            <h1> Hello  {fullName} </h1>
            <input className='emailId' type='text' placeholder='Enter Your Email' onChange={inputChange} value={cMail} />
            {/* <input  className = 'emailId' type= 'text'  placeholder = 'Enter Your Email' defaultValue = ''/> */}
            <button onClick={onSubmit} > Submit </button>

            {/* OR we can write as be */}

            {/* <form onClick={onSubmit} >
                <div>
                    <h1> Hello  {fullName} </h1>
                    <input className='emailId' type='text' placeholder='Enter Your Email' onChange={inputChange} value={cMail} />
                    <button  type = 'submit'> Submit </button>
                </div>
            </form> */}


        </>
    );
};

export default App;