import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, { useState } from 'react';
import './index.css';

const App = () => {

    const purpole = '#AD5DF4';
    const [cName , setName] = useState(purpole);

    const [cKiran, setKiran] = useState('Click Me')


    const Myfunction = () => {

        let yellow = 'yellow';
        setName(yellow);

        setKiran('Ohoho 👍')
    
    };

    const MyfunctionNew = () => {

        setName(purpole);
        setKiran('Ayyo 😠,')

    }

    return (
        <>
            <div style = {{backgroundColor: cName}}>
                <button onClick = {Myfunction}  onDoubleClick = {MyfunctionNew}>{cKiran}</button>
            </div>
        </>
    );
};

export default App;

//index.css

body{
    background-color: #5DF4BD;
   }
   
   div{
     background-color: purple;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     text-transform: uppercase;
     padding: 20px;
     background-color: #EFF6F5;
     color: #959B9A;
     width: 100%;
     height: 100vh;
   }
   
   button{
     font-family: 'Sansita Swashed', cursive;
     padding: 12px 22px;
     margin: 10px;
     text-transform: uppercase;
     outline: none;
     border-radius: 5px;
     cursor: pointer;
   }
   