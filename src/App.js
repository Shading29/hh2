import React from 'react';
import './App.css';
import "./css/style.css"
import {createStore} from "redux"
import {Provider} from "react-redux"
import rootReducer from "./store/reducers"
import AuthContainer from "./components/Auth/AuthContainer";


const store = createStore(rootReducer)

function App() {
  return (
      <Provider store={store}>
            <div className="container">
                {/*<AuthContainer/>*/}

                { store.auth.state.isLogged
                    ? <AuthContainer/>
                    : null
                }

            </div>
      </Provider>
  );
}

export default App;
