import axios from '../index'
import webApi from '../webApi'
import qs from 'qs'
const article = {}

// 添加文章
article.addArticle = (obj) => {
  let url = webApi.urlList.articles.addArticle
  return axios.post(url, qs.stringify(obj),{
    headers: {
      'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
    }
    // headers: {'Access-Control-Allow-Origin': '*'}
  })
}

// 获得文章列表
article.getArticleList = (obj) => {
  let url = webApi.urlList.articles.getArticleList+"?type="+obj.type+ "&pageStart=" + obj.pageStart
  return axios.get(url)
}

// 获取文章详情数据
article.getArticleItem = (obj) => {
  let url =  webApi.urlList.articles.getArticleItem + "?id = " + obj.id
  return axios.get(url)
}
export default article