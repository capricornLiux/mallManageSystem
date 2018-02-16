import Util from 'util/index.jsx';
const util = new Util();
class User{
    login(para){
        return util.request({
            type: 'post',
            // url: 'http://admintest.happymmall.com/manage/user/login.do',
            url: '/manage/user/login.do',
            data: para
        })
    }
}
export default User;