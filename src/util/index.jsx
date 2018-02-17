// 工具类
class Util {
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success(res) {
                    // console.log(res);
                    if (res.status === 0) {
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
                error(err) {
                    // console.log(res);
                    typeof reject === 'function' && reject(err.statusText);
                }
            })
        })

    }
    // 跳转登录
    doLogin() {
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`
    }

    /**
     * 获取url字段
     * @param {名字} name
     */
    getUrlParam(name) {
        const queryString = window
            .location
            .search
            .split('?')[1] || '';
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // /(^|&)param=([^&]*)(&|$)/
        const result = queryString.match(reg);
        return result
            ? decodeURIComponent(result[2])
            : null;
    }

    /**
     * 错误提示
     *
     * @param {错误信息} errMsg
     * @memberof Util
     */
    errorTips(errMsg) {
        alert(errMsg || 'error');
    }

    /**
     * 存储信息到localstorage
     *
     * @param {any} name
     * @param {any} data
     * @memberof Util
     */
    setStorage(name, data) {
        let dataType = typeof data;
        if (dataType === 'object') {
            ;
            localStorage.setItem(name, JSON.stringify(data));
        } else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
            localStorage.setItem(name, data);
        } else {
            alert('本地存储不支持该类型的数据');
        }
    }

    /**
     * 读取localstorage的信息
     * 
     * @param {any} name 
     * @memberof Util
     */
    getStorage(name){
        let data = localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        } else {
            return '';
        }
    }

    /**
     * 删除localstorage内容
     * 
     * @param {any} name 
     * @memberof Util
     */
    removeStorage(name){
        localStorage.removeItem(name);
    }

}

export default Util;