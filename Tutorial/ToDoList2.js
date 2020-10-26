import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, { useState } from 'react';
import './index.css';
import AddIcon from '@material-ui/icons/Add';
import { Button, Tooltip } from '@material-ui/core';
import ToDoList from './ToDoList.js'

const App = () => {

  const [inputList, setinputList] = useState("");
  const [Items, setItems] = useState([]);

  const addItem = (event) => {

    setinputList(event.target.value)
  }

  const addSubmit = () => {

    setItems((preValue) => {
      return [...preValue, inputList]
    });

    setinputList('')
    
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1> To Do List </h1>
          <input type='text' placeholder='Add the Item' onChange={addItem} value={inputList} />
          <Tooltip title='Add'>
            <Button onClick={addSubmit}> <AddIcon /> </Button>
          </Tooltip>

          <ol>
            {/* <li>{inputList}</li> */}

            {Items.map((anyName, index) => {
              return <ToDoList
                text={anyName}
                key={index}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App; 

// TodoList.js

import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const ToDoList = (props) => {

    const [line, setline] = useState(false);

    const lineThrough = () => {
        setline(true)
    }

    return (
        <>
            <div className='todo_style'>
                <DeleteOutlineIcon className='fa-trash' style={{ fontSize: 'small' }} onClick={lineThrough}>
                </DeleteOutlineIcon>
                <li style={{ textDecoration: line ? 'line-through' : 'none' }}> {props.text} </li>
                {/* Tuernary operator or if else condition apply */}
            </div>
        </>
    )
};

export default ToDoList;

// index.css

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: blueviolet;
  }
  
  .Clock{
  
    height: 100px;
    font-size: 50px;
  
  }
  
  .main_div {
  background-color: blueviolet;
  width: 100%;
  height: 100Vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  text-align: center;
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.3);
  }
  
  .center_div{
  
    width: 200px;
    height: 300px;
    border: 2px solid black;
    border-radius: 20px;
    background-color: #E6F6EE;
    box-shadow: 5px 5px 25px -5px black;
  }
  
  h1{
    /* font-family: 'Shadows Into Light', cursive; */
    color: #B5B6B6;
    font-weight: 10;
    background: transparent;
    background-color: #E9F5F2;
    margin: 10px;
    padding: 10px;
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.3);
    border-radius: 15px 15px 0 0;
  }
  
  input{
    font-family: 'Shadows Into Light', cursive;
    border: none;
    height: 25px;
    width: 55%;
    top: 10px;
    margin-right: 10px;
    font-size: 15px;
    padding: 5px;
    background: transparent;
    border-bottom: 1px solid #B37EEE;
  }
  
  .btn{
  
    /* font-size: 20px;
    width: auto;
    background-color:  #B37EEE;
    border: none;
    border-color: transparent;
    outline: none;
    color: white;
    cursor: pointer;
    padding: 10px;
    margin-top: 40px;
    border-radius: 20px; */
  }
  
  .btn:hover {
    background-color: green;
  }
  
  ol {
    margin-top: 30px;
    color: #B37EEE;
    background: transparent;
    margin: 10px;
    padding: 5px;
    text-decoration: none;
    text-align: left;
  
  }
  
  ol li {
    font-family: 'Shadows Into Light', cursive;
    font-weight: 1000;
    padding-left: 0px;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    margin-left: 20px;
    
  
    
  
  }
  
  .todo_style{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  
  }
  
  .todo_style .fa-trash{
    margin : 5px 0px 5px 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
  
  .todo_style .fa-trash:hover{
    color: red;
  }
  
  @media (max-width : 768px) {
    .center_div{
      width: 5  

