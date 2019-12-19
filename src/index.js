import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux"
import {BrowserRouter} from "react-router-dom";
import { createLogger } from "redux-logger";

// const store = createStore(rootReducer)
function configureStore(initialState) {
    const windowExist = typeof window === 'object';
    const loggerMiddleware = createLogger({
        colors: {
            title: (color) => windowExist && color,
            prevState: (color) => windowExist && color,
            action: (color) => windowExist && color,
            nextState: (color) => windowExist && color,
            error: (color) => windowExist && color
        }
    });
    const composeEnhancers = (windowExist &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || // eslint-disable-line no-underscore-dangle
        compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(loggerMiddleware),
        )
    );
}

const application = (
    <BrowserRouter>
        <Provider store={configureStore()}>
            <App/>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render( application , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
