// 工具类
class Util {
    request(param) {
        return new Promise((resolve, reject)=>{
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success(res){
                    // console.log(res);
                    if(res.status === 0) {
                        // 成功
                        typeof resolve === 'function' && resolve(res.data);
                    } else if (res.status === 10) {
                        // 未登录
                        this.doLogin();
                    } else {
                        // 失败, 但是状态是200
                        typeof reject === 'function' && reject(res.msg);
                    }
                },
                error(err){
                    // console.log(res);
                    typeof reject === 'function' && reject(err.statusText);
                }
            })
        })
        
    }
    // 跳转登录
    doLogin(){
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`
    }
}

export default Util;