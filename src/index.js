import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './App.jsx'


ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
    /*<HashRouter>
      <App />
    </HashRouter>*/
  ),

  document.getElementById('root')
)
