<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
    rel="stylesheet">
  <link href="//fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
    rel="stylesheet">
  <link href="//fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese"
    rel="stylesheet">
  <title>Google Keep React</title>
</head>

<body style="background-color: rgb(232, 232, 232);">
  <!-- Display a message if JS has been disabled on the browser. -->
  <noscript>If you're seeing this message, that means
    <strong>JavaScript has been disabled on your browser</strong>, please
    <strong>enable JS</strong> to make this app work.</noscript>

  <div id="app"></div>
  <div id="portal"></div>
</body>

</html>


// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App.jsx';
import rootReducer from './reducers/index';
import setupKeyboardFocus from './setupKeyboardFocus.js';
import { middleware, enhancer } from './routes';

const MOUNT_NODE = document.getElementById('app');
const BODY_NODE = document.querySelector('body');

const store = createStore(
  rootReducer,
  composeWithDevTools(enhancer,  applyMiddleware(middleware, thunkMiddleware)),
);

setupKeyboardFocus(document, BODY_NODE);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE,
);

