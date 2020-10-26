import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, { useState } from 'react';
import './index.css';

const App = () => {

    const [fullName, setName] = useState({fname: '', lname: ''});

    const submitSucces = (event) => {

        event.preventDefault()

    };

    const inputChange = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);

        const kiran = event.target.value;
        const trisha = event.target.name;

        setName((preValue) => {

            console.log(preValue);

            if (trisha === "fName") {
                return {
                    fname: kiran,
                    lname: preValue.lname,
                };
            } else if (trisha === "lName") {
                return {
                    fname: preValue.fname,
                    lname: kiran,
                }
            }
        })
    };


    return (
        <>
            <form onSubmit={submitSucces} >
                <div>
                    <h1> Hello {fullName.fname} {fullName.lname} </h1>
                    <input className='emailId' name='fName' type='text' placeholder='Enter Your First Name' onChange={inputChange} value={fullName.fname} />
                    <br />
                    <input className='emailId' name='lName' type='text' placeholder='Enter Your Last Name' onChange={inputChange} value={fullName.lname} />
                    <button type='submit'> Submit </button>
                </div>
            </form>

        </>
    );
};

export default App;