import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, { useState } from 'react';
import './index.css';

const App = () => {

    const [increment, setincrement] = useState(0);

    const increNumber = () => {
        setincrement(increment + 1);
    };

    const decreNumber = () => {

        setincrement(increment - 1);

        if (increment > 0) {
            setincrement(increment - 1);

        } else {
            alert('Sorry, Zero limit reached');
            setincrement(0);
        }
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1>{increment}</h1>
                    <button onClick={increNumber}> Increment </button>
                    <button onClick={decreNumber}>Decrement</button>
                </div>
            </div>
        </>
    );
};

export default App;