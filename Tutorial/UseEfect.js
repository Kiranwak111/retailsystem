import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js


import React, {useEffect, useState} from 'react';

const App = () => {

  const [num , setNum] = useState(0);
  const [num1 , setNum1] = useState(0);

  useEffect(() => {
    alert ('hello')
  }, [num])

  return (
    <>
    <button onClick= {() => {
      return setNum(num +1)
    }}> Click Me {num} </button>
    
    <button onClick= {() => {
      return setNum1(num1 +1)
    }}> Click Me {num1} </button>
    </>
  )
}

export default App;