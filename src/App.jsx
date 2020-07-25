import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import MyNavLink from './components/NavLink'
export default class App extends React.Component {

    render () {
      return (
        <div>
            <MyNavLink />
          {/* <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                <MyNavLink className="list-group-item" to='/index' >首页</MyNavLink>
              </div>
            </div>
            </div> */}
        </div>
      )
    }
  }
  
