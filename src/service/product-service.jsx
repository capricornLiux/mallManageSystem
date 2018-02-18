import Util from 'util/index.jsx';
const util = new Util();
class User {

    /**
     * 获取商品列表
     * 
     * @param {any} pageNum 
     * @memberof User
     */
    getProductList(pageNum){
        return util.request({
            type: 'post',
            url: '/manage/product/list.do',
            data: {
                pageNum
            }
        })
    }
}
export default User;