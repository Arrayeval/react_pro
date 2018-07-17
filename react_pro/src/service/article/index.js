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

export default article