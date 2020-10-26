import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React from 'react';
import './index.css';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';//import from material ui icon 
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const App = () => {

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                <InsertEmoticonIcon /> 
                {/* component of matrial ui icons mentioned in import*/}
                <SportsCricketIcon />
                <AccessAlarmIcon />
                </div>
            </div>
        </>
    );
};

export default App;