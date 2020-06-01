import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { getRecipesReducer } from "./redux/reducers/getRecipesReducer";
import { loginReducer } from "./redux/reducers/loginReducer";
import { signUpReducer } from "./redux/reducers/signUpReducer";
import { recipesReducer } from "./redux/reducers/recipesReducer";
import { delRecipeReducer } from './redux/reducers/delRecipeReducer';

import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({
  getRecipesReducer,
  loginReducer,
  signUpReducer,
  recipesReducer,
  delRecipeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
