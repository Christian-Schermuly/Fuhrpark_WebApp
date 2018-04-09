
import reducer from "./reducers"
import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger";
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";



import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {Provider} from 'react-redux'

import setAuthToken from './actions/setAuthToken'

console.log("Start")


const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducer, middleware);

store.dispatch({type:"STORE_TEST"})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))