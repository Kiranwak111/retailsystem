import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// App.js

import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const App = () =>  {
  return (
    <div className="App">
      <h1>
        CountdownCircleTimer
        <br />
        React Component
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={20}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 2000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className="info">
        Change component properties in the code filed on the right to try
        difference functionalities
      </p>
    </div>
  );
}

export default App ;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// style.css

h1 {
    font-family: "Roboto";
    text-align: center;
    margin-bottom: 40px;
  }
  
  .timer-wrapper {
    display: flex;
    justify-content: center;
  }
  
  .timer {
    font-family: "Montserrat";
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .text {
    color: #aaa;
  }
  
  .value {
    font-size: 40px;
  }
  
  .info {
    max-width: 360px;
    margin: 40px auto 0;
    text-align: center;
    font-size: 16px;
  }
  