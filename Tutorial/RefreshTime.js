import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, { useState } from 'react';

const App = () => {

    let newTime = new Date().toLocaleTimeString();

    const [cTime,setCtime] = useState(newTime);

    const UpTime = () => {

        let  newUpdatedTime = new Date().toLocaleTimeString();
    
        setCtime(newUpdatedTime);
    }

    return (
        <>
            <h1>{cTime}</h1>
            <button onClick={UpTime}>Get Time</button>
        </>
    )

};

export default App;