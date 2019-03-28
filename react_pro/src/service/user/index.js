import axios from '../index'
import webApi from '../webApi'
export const UserApi = {
    login (obj) {
        let url = webApi.urlList.userHandle.login
        return axios.post(url, obj)
    }

}
