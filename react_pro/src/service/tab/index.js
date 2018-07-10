import axios from '../index'
import webApi from '../webApi'
const tabs = {}

// 添加tabs
tabs.addTabs = (obj) => {
  let url = webApi.urlList.tabs.addTabs
  return axios.post(url, obj)
}
// 获得tabs
tabs.getTabs = (obj) => {
  let url = webApi.urlList.tabs.getTabs
  return axios.get(url)
}
export default tabs