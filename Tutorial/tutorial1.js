//D:\reactTut\awesomeapp>npm start
// C:\Users\Rusha>d:
// D:\>cd reactTut\awesomeapp
// D:\reactTut\awesomeapp> npm start


// jsx challenge 

import React from 'react';
import ReactDOM from 'react-dom';

const name = 'kiran';
const currdate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <> 
    <h1> Hello, My name is {name}</h1>
    <p> current date  is = {currdate}</p>
    <p> curent time is = {currTime}</p>
  </>,
  document.getElementById('root')
);

// jsx attributes

import React from 'react';
import ReactDOM from 'react-dom';

const name = 'kiran';
const img1 = 'https://picsum.photos/200/300';
const img2 = 'https://picsum.photos/100/300';
const img3 = 'https://picsum.photos/400/300';
const link = 'https://www.google.com/';

ReactDOM.render(
 <>
   <h1 contentEditable> Hello , my name is {name}</h1>
   <label>Password: </label>
   <br/>
   <input type ="password"/>
   <img src = {img1} alt = 'random image'/>
   <img src = {img2} alt = 'random image'/>
   <a href = {link} target = "_kiran">
      <img src = {img3} alt = 'random image'/>
   </a> 
 </>,
    document.getElementById('root')
  
);

// css in react js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // import this file

const name = 'kiran';
const img1 = 'https://picsum.photos/200/300';
const img2 = 'https://picsum.photos/100/300';
const img3 = 'https://picsum.photos/400/300';
const link = 'https://www.google.com/';

ReactDOM.render(
 <>
   <h1 className = "heading"> Hello , my name is {name}</h1>  
   {/* instead of class uses as className */}
<div className = 'imgName'>
   <img src = {img1} alt = 'random image'/>
   <img src = {img2} alt = 'random image'/>
   <a href = {link} target = "_kiran">
      <img src = {img3} alt = 'random image'/>
   </a>
 </div> 
   </>,
    document.getElementById('root') 
);

// Internal and inline css 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'kiran';
const img1 = 'https://picsum.photos/200/300';
const img2 = 'https://picsum.photos/100/300';
const img3 = 'https://picsum.photos/400/300';
const link = 'https://www.google.com/';

// Internal css
const heading  = {
  fontFamily: "'Sansita Swashed', cursive",
  color: "red",
  textAlign: "center",
  textTransform: "capitalize",
  justifyContent: "center",
  margin: "70px 0px",
  textShadow: "0px 2px 2px green"
};

const imgName = {
  display: "flex",
  justifyContent: "center"
};


ReactDOM.render(
 <>
   <h1 style = {heading}> Hello , my name is {name}</h1>
   
<div style = { {display: "flex", justifyContent: "center"} }>
{/* inline css */}
   <img src = {img1} alt = 'random image'/>
   <img src = {img2} alt = 'random image'/>
   <a href = {link} target = "_kiran">
      <img src = {img3} alt = 'random image'/>
   </a>
 </div> 
   </>,
    document.getElementById('root')
  
);

// Good morning good Afternoon Project

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date().getHours();
//curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};


if (curDate >= 1 && curDate < 12) {
  greeting = 'Good morning';
  cssStyle.color = 'Green'

} else if (curDate >= 12 && curDate < 20) {
  greeting = 'Good aftrnoon';
  cssStyle.color = 'Orange'

} else {
  greeting = 'Good Night';
  cssStyle.color = 'Black'
}

ReactDOM.render(
  <>
    <div>
      <h1> Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
    </div>
  </>,
  document.getElementById('root')
);

// component in React 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render( <App />, document.getElementById('root'));

// Heading.jsx

import React from 'react'

function Heading() {
    return <h1> This is kiran </h1>
}

export default Heading;

// App.jsx

import React from 'react';
import Heading from './Heading';
import Para from './Para';
import List from './List';

function App() {
    return (
        <>
            <Heading />
            <Para />
            <List />
        </>
    );
};

export default App;

// component in Reactjs
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

ReactDOM.render( <App />, document.getElementById('root'));

import React from 'react';

function App() {
    let curDate = new Date().getHours();
    //curDate = curDate.getHours();
    let greeting = '';
    const cssStyle = {};


    if (curDate >= 1 && curDate < 12) {
        greeting = 'Good morning';
        cssStyle.color = 'Green'

    } else if (curDate >= 12 && curDate < 20) {
        greeting = 'Good aftrnoon';
        cssStyle.color = 'Orange'

    } else {
        greeting = 'Good Night';
        cssStyle.color = 'Black'
    }

    return (
        <>
            <div>
                <h1> Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
            </div>
        </>

    );
};

export default App;

// import and export in react
import React from 'react';
import ReactDOM from 'react-dom';
import myName, {frndName, myBrother, mySister} from './App.jsx';
//import * as anyName from './App.jsx';
// other method to emport the function data file
ReactDOM.render( 
    <>
        <ol>
            <li> Kiran </li>
            <li> {myName}</li>
            <li>{frndName}</li>
            <li>{myBrother()}</li>
            <li>{mySister()}</li>

          {/* Other mehod to call the data function */}
            {/* <li> Kiran </li>
            <li> {anyName.default}</li>
            <li>{anyName.frndName}</li>
            <li>{anyName.myBrother()}</li>
            <li>{anyName.mySister()}</li> */}

        </ol>
    </>,
     document.getElementById('root'));

// App.jsx

const myName = 'KIran wakchaure ';
const frndName = 'mahadev Ghanchekar';

function myBrother() {
    let name = 'Prasad Pendbhaje';
    return name;
}

function mySister() {
    let names = 'Archana Jadhav';
    return names;
}

export default myName; // default 
export {frndName, myBrother, mySister}; // myBrother, mySister are the functins but not add the () to the export.
// various functions,  Data can be export that way

