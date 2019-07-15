import axios from '../index'
import webApi from '../webApi'
import qs from 'qs'
const tabs = {}

// 添加tabs
tabs.addTabs = (obj) => {
  let url = webApi.urlList.tabs.addTabs
  console.log("qs.stringify",qs.stringify(obj))
  return axios.post(url,obj,
    //qs.stringify(obj),
    {
      // headers: {
      //   'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
      // }
    })
}
// 获得tabs
tabs.getTabs = () => {
  let url = webApi.urlList.tabs.getTabs
  return axios.get(url)
}

// 获取模块信息
tabs.getTabInfo = (obj) => {
  let url = webApi.urlList.tabs.getTabInfo + "?tabID=" + obj.id
  return axios.get(url)
}

export default tabs