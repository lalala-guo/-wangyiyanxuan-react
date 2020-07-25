import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './App.jsx'

import store from "./redux/store";

ReactDOM.render(
  (
    <BrowserRouter store={store}>
      <App />
    </BrowserRouter>
  ),

  document.getElementById('root')
)

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import App from "./App.jsx";
// import store from "./redux/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
