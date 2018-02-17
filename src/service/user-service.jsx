import Util from 'util/index.jsx';
const util = new Util();
class User {
    login(para) {
        return util.request({
            type: 'post',
            // url: 'http://admintest.happymmall.com/manage/user/login.do',
            url: '/manage/user/login.do',
            data: para
        })
    }
    // 校验用户名和密码是否合法
    checkLoginInfo(loginInfo) {
        const username = $.trim(loginInfo.username);
        const password = $.trim(loginInfo.password);
        if (typeof username !== 'string' || username.length === 0) {
            return {status: false, msg: '用户名不能为空'}
        }
        if (typeof password !== 'string' || password.length === 0) {
            return {status: false, msg: '密码不能为空'}
        }
        return {status: true, msg: '用户名和密码合法'}
    }

    /**
     * 退出登录
     * 
     * @memberof User
     */
    logout(){
        return util.request({
            type: 'post',
            url: '/user/logout.do'
        })
    }
}
export default User;