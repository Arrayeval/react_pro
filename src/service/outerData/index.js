import axios from '../index'
import webApi from '../webApi'
import qs from 'qs'
export const GetDataAPi = {
    getList (obj) {
        let url = webApi.urlList.getOuterData.getListData + "?" + qs.stringify(obj)
        return axios.get(url)
    }

}
