import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React from 'react';
import Clock from 'react-digital-clock'; // import from react digital clock
import './index.css';

const App = () => {
    return (
        <><h1>hi</h1>
            <Clock />  
        </>
    );
};

export default App;