import React from 'react';
import {Link} from 'react-router-dom';
import Util from 'util/index.jsx';
import UserService from 'service/user-service.jsx';
const util = new Util();
const userService = new UserService();
class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: util.getStorage('userInfo').username || ''
        }
    }
    logout(){
        userService.logout().then(res=>{
            util.removeStorage('userInfo');
            
            // this.props.history.push('/login');
            window.location.href = '/login';
        }).catch(errMsg=>{
            util.errorTips(errMsg);
        })
    }
    render() {
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <b>Happy</b>Mall    
                    </Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a
                            className="dropdown-toggle"
                            href="javascript:;">
                            <i className="fa fa-user fa-fw"></i>
                            {
                                this.state.username ? <span>欢迎,{this.state.username}</span> : <span>欢迎您</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={()=>{this.logout()}}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopNav;