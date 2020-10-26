import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React from 'react';
import './index.css';

const App = () => {

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <div className="card" style={{ width: '18rem', height: '10rem' }}>
                        <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." style={{ width: '18rem', height: '15rem' }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;