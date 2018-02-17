import Util from 'util/index.jsx';
const util = new Util();

class Statistic {
    getHomeCount(){
        return util.request({
            url: '/manage/statistic/base_count.do',
            
        })
    }
}

export default Statistic;