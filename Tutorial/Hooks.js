import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

//App.js

import React, { useState } from 'react';

const App = () => {

    const [count,setCount] = useState(50)
    console.log(count)

    const IncNum = () => {
    
        setCount(count -1)
        //console.log('clicked ' +  count ++);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click ME</button>
        </>
    )

};

export default App;
