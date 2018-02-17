import React from 'react';
import './index.scss';
import Util from 'util/index.jsx';
import UserService from 'service/user-service.jsx';

const util = new Util();
const userService = new UserService();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: util.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount(){
        document.title = '登录 - HAPPY MALL'
    }
    inputOnKeyUp(e){
        if(e.keyCode === 13){
            this.clickLogin();
        }
    }
    inputChange(e){
        let key = e.target.name;
        let value = e.target.value;
        this.setState({
            [key] : value
        })
    }
    // 点击登录按钮
    clickLogin(){
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        };
        let checkLoginInfoResult = userService.checkLoginInfo(loginInfo);
        if(checkLoginInfoResult.status){
            userService.login(loginInfo).then((res)=>{
                // 登录成功,跳转页面
                this.props.history.push(this.state.redirect);
            }).catch((errMsg)=>{
                // 错误提示
                util.errorTips(errMsg);
            })
        } else {
            util.errorTips(checkLoginInfoResult.msg);
        }
        
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading text-center">欢迎登录</div>
                    <div className="panel-body">
                    <div>
                        <div className="form-group">
                            {/* for是关键词, 使用htmlfor */}
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="请输入用户名"
                                name="username"
                                onKeyUp={e=>{this.inputOnKeyUp(e)}}
                                onChange={e=>{this.inputChange(e)}}/>
                            {/* jsx要有结束标签/ */}
                        </div>
                        <div className="form-group">
                            <input type="password" 
                                className="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="请输入密码"
                                name="password"
                                onKeyUp={e=>{this.inputOnKeyUp(e)}}
                                onChange={e=>{this.inputChange(e)}}/>
                        </div>
                        
                        <button 
                            className="btn btn-primary btn-lg btn-block"
                            onClick={e=>{this.clickLogin(e)}}>
                            登录
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;