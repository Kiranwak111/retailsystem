import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, {useState} from 'react';
import './index.css';
import ToDoList from './ToDoList.js'

const App = () => {

    const [inputList , setinputList] = useState("");
    const [Items , setItems] = useState([]);

    const addItem = (event) => {

        setinputList(event.target.value)
    }

    const addSubmit = () => {

        setItems((preValue) => {
            return [...preValue, inputList]
        });

        setinputList('')

    }

    const deleteItems = (id) => {
        console.log('deleted');

        setItems((preValue) => {
            return preValue.filter((arrElement, index) => {
                return index !== id;
            })
        })
    }
  
    return (
        <>
            <div className = 'main_div'>
                <div className = 'center_div'>
                    <h1> To Do List </h1>
                    <input type = 'text' placeholder = 'Add the Item' onChange = {addItem} value = {inputList}/>
                    <button onClick = {addSubmit} > + </button>
                    <ol>
                        {/* <li>{inputList}</li> */}

                        { Items.map((anyName, index) => {
                            return <ToDoList 
                            text = {anyName} 
                            key = {index}
                                id = {index}
                                onSelect = {deleteItems}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;

// ToDolist.js

import React from 'react';

const ToDoList = (props) => {

    

    return (
        <>
            <div className = 'todo_style'>
                {/* <i className="fa fa-trash" aria-hidden="true" onClick = {props.onSelect}></i> */}
                <i className="fa fa-trash" aria-hidden="true" onClick = { () => {
                                                                 props.onSelect(props.id) }
                                                                }>
                </i>
                <li> {props.text} </li>
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

.main_div {
background-color: #F0ECF5;
width: 100%;
height: 100Vh;
align-items: center;
justify-content: center;
display: flex;
flex-direction: row;
text-align: center;
}

.center_div{

  width: 200px;
  height: auto;
  border: 2px solid black;
  border-radius: 20px;
  background-color: #E6F6EE;
  box-shadow: 5px 5px 25px -5px black;
}

h1{
  color: white;
  background: transparent;
  background-color: #B37EEE;
  margin: 10px;
  padding: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.3);
  border-radius: 15px 15px 0 0;
}

input{
  border: none;
  height: 25px;
  width: 50%;
  top: 10px;
  margin-right: 10px;
  font-size: 15px;
  padding: 5px;
  background: transparent;
  border-bottom: 2px solid #B37EEE;
}

button{
  border-radius: 20px;
  font-size: 20px;
  width: 25px;
  background-color:  #B37EEE;
  border: none;
  border-color: transparent;
  outline: none;
  color: white;
  cursor: pointer;
}

button:hover {
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
  padding-left: 0px;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  margin-left: 20px;
  text-decoration: none;

  

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
    width: 55%;
  }
}


