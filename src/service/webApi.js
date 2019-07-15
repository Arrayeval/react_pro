let mangageBase = window.location.protocol + '//' + window.location.hostname + ':8000/'

const urlList ={
  // 模块编辑
  tabs:{
    addTabs: mangageBase +'tabs/addTabs/',
    getTabs: mangageBase +'tabs/',
    getTabInfo: mangageBase + 'tabs/getTabInfo'
  },
  
  // 文章编辑
  articles:{
    addArticle: mangageBase +'article/addArticle/',
    getArticleList: mangageBase + 'article/getArticleList',
    getArticleItem: mangageBase + 'article/getArticleItem',
    getSpecialArticleList: mangageBase + 'article/getSpecialArticleList'
  },

  // 上传[图片，文件]
  uploadFile:{
    uploadImg: mangageBase + 'upload/uploadImg/',  // 多张一次传
    // uploadSingle: mangageBase + 'upload/uploadImg', // 一次传一张  
  },

  // 用户相关
  userHandle: {
    login: mangageBase + 'user/login'
  },

  // 获取外部数据
  getOuterData: {
    // 掘金列表数据
    getListData: mangageBase + 'getouterdata/getJueJinData'
  }
}

export default {urlList}