// 处理文件上传的逻辑
// import axios from '../index'
import webApi from '../webApi'

const uploadFun = {
  // 多张
  uploadMutliImg () {
    let url =  webApi.urlList.uploadFile.uploadImg;
    return url;
    // axios.post().then((res)=>{
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // });
  },
  // 一张
  uploadSingleImg () {
    let url =  webApi.urlList.uploadFile.uploadImg;
    return url;
    // axios.post().then((res)=>{
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // });
  }
};
export default uploadFun;