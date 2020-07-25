import React, { Component } from 'react'
import BScroll from "@better-scroll/core";
import './index.css'

export default class Index extends Component {

    componentDidMount(){
        this.init()
    }
    init() {
        this.bs = new BScroll(this.refs.scroll, {
          mouseWheel: true,
          disableMouse:false,
          disableTouch: false,
          resizePolling: 0,
          click: true,
          scrollX: true,
          probeType: 3 // listening scroll hook
        });
        this._registerHooks(["scroll", "scrollEnd"], pos => {
        });
      }
      _registerHooks(hookNames, handler) {
        hookNames.forEach(name => {
          this.bs.on(name, handler);
        });
      }

    render() {
        return (
            <div>
                <div className="headerContainer">
                    <div className="header">
                        <a href="/" src="../../static/images/logo.webp"></a>
                        <div className="inputContainer" >
                        <i className="icon"></i>
                        <span>搜索商品, 共34087款好物</span>
                        </div>
                        <div className="btn" >登录</div>
                    </div>
                    <div className="navContainer" ref="scroll">
                        <div className="left">
                        <div className="navItem">
                            <span>推荐</span>
                        </div>
                        <div className="navItem" >
                            <span>居家生活</span>
                        </div>
                        <div className="navItem" >
                            <span>居家生活</span>
                        </div>
                        <div className="navItem" >
                            <span>居家生活</span>
                        </div>
                        <div className="navItem" >
                            <span>居家生活</span>
                        </div>
                        <div className="navItem" >
                            <span>居家生活</span>
                        </div>
                        <div className="navItem" >
                            <span>居家生活</span>
                        </div>
                        </div>
                        <div className="right">
                        <div className="linear"></div>
                        <div className="xiala">
                            <div className="icon" ></div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
