import React from 'react';
import SlotM from './SlotM.js';

const name = 'kiran';
const para = {
    color : "blue",
    backgroundColor : "yellow"
}

const App = () => {
    return <>
        <h1 style = {{border : "2px solid red"}}> Hello My nanme is {name} </h1>
        <p style = {para}> i am working in ctr manufacturing industries limited </p>
        <SlotM />
    </>
}

export default App;