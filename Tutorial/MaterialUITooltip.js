import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React, { useState } from 'react';
import './index.css';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
                    <Tooltip title="Add">
                        <Button onClick={increNumber}> <AddOutlinedIcon /> </Button>
                    </Tooltip>

                    <Tooltip title="Delete">
                        <Button onClick={decreNumber}> <DeleteTwoToneIcon /> </Button>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export default App;