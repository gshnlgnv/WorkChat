import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import thunk from "redux-thunk";
import {rootReducer} from './rootReducer';
import {BrowserRouter} from "react-router-dom";

import Chats from '../src/Components/Chats';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <React.StrictMode>

            <Provider store={store}>

                <App/>

                {/*<Chats />*/}

            </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
