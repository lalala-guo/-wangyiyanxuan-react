import React from 'react'
// import {NavLink} from 'react-router-dom'
import {Link, Route} from 'react-router-dom'
// import Index from '../index/index'
import './index.css'
export default class NavLink extends React.Component {
  // return <NavLink {...props} activeclassNameName='activeclassName'/>
    state={
        activeFlag:'index'
    }
    toIndex = () => {
        this.props.history.push(`/index`)
    }
    render(){
        return(
            <div className="tabBarWrap">
                    <div className="tabBar">
                            <div >
                                <div className="item" >
                                    <i className="index" onClick={() => this.toIndex}></i>
                                    <span>首页</span>
                                </div>
                            </div>
                            <div >
                                <div className="item">
                                    <i className="category"></i>
                                    <span >分类</span>
                                </div>
                            </div>
                            <div >
                                <div className="item" >
                                    <i className="buy"></i>
                                    <span>值得买</span>
                                </div>
                            </div>
                            <div >
                                <div className="item" >
                                    <i className="cart "></i>
                                    <span>购物车</span>
                                </div>
                            </div>
                            <div >
                                <div className="item" >
                                    <i className="personal "></i>
                                    <span>个人</span>
                                </div>
                            </div>
                    </div>
                </div>
          )
    }

  
}
