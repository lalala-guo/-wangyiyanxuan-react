import React from 'react'
import {Link, Route} from 'react-router-dom'
import Index from '../index/index'
import Category from '../category/index'
import Buy from '../buy/index'
import Cart from '../cart/index'
import Personal from '../personal/index'
import './index.css'
export default class NavLink extends React.Component {
    // state={
    //     activeFlag:'index'
    // }

    render(){
        // const { activeFlag } = this.state
        return(
            <>

                <div className="tabBarWrap">
                        <div className="tabBar">
                                <Link to="/">
                                    <div className="item">
                                        <i className="index" ></i>
                                        <span>首页</span>
                                    </div>
                                </Link>
                                <Link to="/category">
                                    <div className="item">
                                        <i className="category"></i>
                                        <span >分类</span>
                                    </div>
                                </Link>
                                <Link to="/buy" >
                                    <div className="item" >
                                        <i className="buy"></i>
                                        <span>值得买</span>
                                    </div>
                                </Link>
                                <Link to="/cart" >
                                    <div className="item" >
                                        <i className="cart "></i>
                                        <span>购物车</span>
                                    </div>
                                </Link>
                                <Link to="/personal" >
                                    <div className="item" >
                                        <i className="personal "></i>
                                        <span>个人</span>
                                    </div>
                                </Link>
                        </div>
                    </div>
            
                <Route path="/" exact component={Index} />
                <Route path="/category" component={Category} />
                <Route path="/buy" component={Buy} />
                <Route path="/cart" component={Cart} />
                <Route path="/personal" component={Personal} />
            </>
          )
    }

  
}
