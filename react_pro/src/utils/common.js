// loading [用于数据接口的延时处理]
let needLoadingRequestCount = 0
export function showFullScreenLoading () {
  // var Indicator = require('mint-ui')
  if (needLoadingRequestCount === 0) {
    console.log("正在加载")
  }
  needLoadingRequestCount++
}

export function hideFullScreenLoading () {
  // var Indicator = require('mint-ui')
  if (needLoadingRequestCount > 0) {
    needLoadingRequestCount--
  }
  if (needLoadingRequestCount === 0) {
     console.log("结束加载")
  }
}

