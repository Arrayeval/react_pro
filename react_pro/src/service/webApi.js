let mangageBase = window.location.protocol + '//' + window.location.hostname + ':3001/'

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
  },

  // 上传[图片，文件]
  uploadFile:{
    uploadImg: mangageBase + 'upload/uploadImg/',  // 多张一次传
    // uploadSingle: mangageBase + 'upload/uploadImg', // 一次传一张  
  }
}

export default {urlList}