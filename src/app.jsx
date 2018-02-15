import React from 'react';
import ReactDOM from 'react-dom';

// import {HashRouter as Router, Route, Link} from "react-router-dom";
// http://localhost:9999/dist/#/a

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// http://localhost:9999/a 直接复制粘贴地址在新标签中访问的话,没有结果,直接请求到后端

// BrowserRouter h5实现; hashRouter 哈希实现; route 路由规则; switch 路由多次匹配; Link 路由跳转;
// NavLink; Redirect

class A extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        a
        {/* 参数: {this.props.match.params.id} */}
        <Switch>

          <Route exact path={`${this.props.match.path}`}
          render={(route)=>{
            return <p>不带参数的a</p>
          }}/>

          <Route path={`${this.props.match.path}/sub`}
          render={(route)=>{
            return <p>sub</p>
          }}/>

          <Route exact path={`${this.props.match.path}/:id`}
          render={(route)=>{
            return <p>带参数的a,参数是{route.match.params.id}</p>
          }}/>

        </Switch>
      </div>
    )
  }
}

class B extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>b</div>
    )
  }
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to="/a">组件a</Link>
        <br/>
        <Link to="/b">组件b</Link>
        <br/>
        <Link to="/a/123">带参数的组件a</Link>
        <br/>
        <Link to="/a/sub">sub</Link>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Wrapper>
      {/* <A/> */}
      {/* <B/> */}
      {/* <Route path='/a/:id' component={A}/> */}
      {/* 这样没有参数的a就匹配不到了 */}

      <Route path='/a' component={A}></Route>

      <Route path='/b' component={B}/>
    </Wrapper>
  </Router>,
document.getElementById('app'))
