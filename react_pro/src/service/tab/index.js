import axios from '../index'
import webApi from '../webApi'
import qs from 'qs'
const tabs = {}

// 添加tabs
tabs.addTabs = (obj) => {
  let url = webApi.urlList.tabs.addTabs
  return axios.post(url, qs.stringify(obj),{
    headers: {
      'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
    }
    // headers: {'Access-Control-Allow-Origin': '*'}
  })
}
// 获得tabs
tabs.getTabs = (obj) => {
  let url = webApi.urlList.tabs.getTabs
  return axios.get(url)
}
export default tabs