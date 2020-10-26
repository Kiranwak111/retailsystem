import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, {useState, useEffect} from 'react';
import axios from 'axios';
 
function App () {

  const [input, setInput] = useState(0);
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);


  useEffect(() => {
    
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
      console.log(res.data.name)
      setData(res.data.name);
      setData1(res.data.name.length)
    }
    getData();
  });

  return (
    <>
      <h1> This is my select<span style = {{color : 'red'}}> {input} </span> </h1>
      <h1> my pokemon name  <span style = {{color : 'red'}}> {data} </span> </h1>
      <h1> my moves number <span style = {{color : 'red'}}> {data1} </span> </h1>
      <select  value = {input} onChange = {(event) => {
        setInput(event.target.value);

      }}>
        <option value = '1'> 1 </option>
        <option value = '25'> 25 </option>
        <option value = '3'> 3 </option>
        <option value = '4'> 4 </option>
        <option value = '5'> 5 </option>
      </select>
    </>
  )
}

export default App;