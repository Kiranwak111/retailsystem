import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, {useState} from 'react';
import './index.css';

const App = () => {

    const [fullName, setfullName] = useState({
        fname : "",
        lname : "",
        email : "",
        phone : "",
    });

    const subSucess = (event) => {

        event.preventDefault();
       
    };

    const changeEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);

        // const kiran = event.target.value;
        // const trisha = event.target.name;

        // const value = event.target.value;
        // const name = event.target.name;

       const {value, name} = event.target;  // object Destructuring

        setfullName((preValue) => {

            return { 
                ...preValue, 
                [name] : value,
            }

            // if (name === "fname"){
            //     return {
            //         fname : value,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         phone : preValue.phone,
            //     }
            // }else if (name === "lname"){
            //     return {
            //         fname : preValue.fname,
            //         lname : value,
            //         email : preValue.email,
            //         phone : preValue.phone,
            //     }
            // }else if (name === "email"){
            //     return {
            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         email : value,
            //         phone : preValue.phone,
            //     }
            // }else if (name === "phone"){
            //     return {
            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         phone : value,
            //     }
            // }
        })
    }


    return (
        <>
            <form onSubmit = {subSucess}>
                <div>
                    <h1> hello {fullName.fname} {fullName.lname} </h1>
                    <br />
                    <h1> {fullName.email} <br /> {fullName.phone} </h1>
                    <input className='emailId' type='text' name='fname' placeholder='Enter Your First Name' onChange={changeEvent} value = {fullName.fname}/>
                    <br />
                    <input className='emailId' type='text' name='lname' placeholder='Enter Your Last Name' onChange={changeEvent} value = {fullName.lname} />
                    <br />
                    <input className='emailId' type='text' name='email' placeholder='Enter Your Email' onChange={changeEvent} value = {fullName.email} autoComplete = 'off'/>
                    <br />
                    <input className='emailId' type='number' name='phone' placeholder='Enter Your Mobile Number' onChange={changeEvent} value = {fullName.phone} />
                    <br />
                    <button> Submit </button>
                </div>
            </form>

        </>
    );
};

export default App;
