// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

//SlotM.js
import React from "react";

const SlotM = (props) => {

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    //Or we can writeing  above code Object Destructuring in below

    let {x, y, z} = props;

    if (x === y && x === z) {
        return (
            <>
                <div className="slot-inner">
                    <p>{x} {y} {z}</p>
                    <hr></hr>
                    <p> This Is matching</p>
                </div>
            </>
        )

    } else {
        return (
            <>
                <div className="slot-inner">
                    <p>{x} {y} {z}</p>
                    <hr></hr>
                    <p> This Is  not matching</p>
                </div>
            </>
        )

    }

};

export default SlotM;

// App.js
import React from 'react';
import SlotM from './SlotM.js';
import './index.css';

const App = () => {
    return (
    <>
        <p className = "heading"> Welcome to,🎰 <span style = {{fontWeight : "bold"}}>slot machine game</span>🎰</p>

        <SlotM  x = "😄" y = "😄" z = "😄" />
        <SlotM  x = " 🍎" y = " 🐱" z = " 🐟" />
        <SlotM  x = "😄"  y = " 🍎" z = " 🦆"/>
        <SlotM  x = " 🦆" y = " 🦆" z = " 🦆" />
    </>
    )
}

export default App;

//index.css

body{
    background-color: #F9FCFC;
   }
   
   .heading{
     font-family: 'Sansita Swashed', cursive;
     height: 70px;
     text-align: center;
     justify-content: center;
     text-transform: uppercase;
     padding: 20px;
     background-color: #EFF6F5;
     color: #959B9A;
   }
   
   .slot-inner{
     position: block;
     font-size: 40px;
     width: 400px;
     justify-content: center;
     text-align: center;
     align-items: center;
     padding: 20px;
     margin: auto;
     margin-top: 10px;
     background-color: #F2E6F8;
   
   }