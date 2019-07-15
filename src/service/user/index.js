import axios from '../index'
import webApi from '../webApi'
export const UserApi = {
    login (obj) {
        let url = webApi.urlList.userHandle.login
        return axios.post(url, obj)
    },
    loginOUt () {
        // 每个用户都应该返回一个唯一id ,便于登出
    }

}
