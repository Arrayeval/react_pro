let mangageBase = window.location.protocol + '//' + window.location.hostname + ':3001/'

const urlList ={
  tabs:{
    addTabs: mangageBase +'tabs/addTabs/',
    getTabs: mangageBase +'tabs/',
  },
  articles:{
    addArticle: mangageBase +'article/addArticle/',
  }
}

export default {urlList}