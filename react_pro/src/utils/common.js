
/**
 * @ 时间格式化处理
 * t: new Date(time)
 * f: '/' '-' '.' 连接符,可配 ['yyyy-MM-dd hh:mm:ss']
 * flag: true/false 表示是否转换为 'xxxx年xx月xx日'
 * 使用方式: selfDateFormat(new Date(t), 'yyyy/MM/dd hh:mm:ss', true)
 * */
export function selfDateFormat (t, f, flag) {
  if (t.toString().indexOf('Invalid Date') > -1) { // Invalid return
    return ''
  }
  var obj = {
    yyyy: t.getFullYear(),
    yy: ('' + t.getFullYear()).slice(-2),
    M: t.getMonth() + 1,
    MM: ('0' + (t.getMonth() + 1)).slice(-2),
    d: t.getDate(),
    dd: ('0' + t.getDate()).slice(-2),
    hh: ('0' + t.getHours()).slice(-2),
    h: t.getHours(),
    mm: ('0' + t.getMinutes()).slice(-2),
    ss: ('0' + t.getSeconds()).slice(-2)
  }
  var tarResult = ''
  tarResult += f.replace(/([a-z]+)/ig, function (r) {
    return obj[r]
  })
  if (flag) {
    var mark = f.charAt(f.indexOf('M') - 1)
    var markArr = ['年', '月', '日']
    var _tarResult = ''
    tarResult = tarResult.split(' ')
    tarResult[0].split(mark).forEach((item, index) => {
      _tarResult += item + markArr[index]
    })
    if (tarResult.length > 2) { // hours min sec
      tarResult[1] = tarResult[tarResult.length - 1]
    } else if (tarResult.length === 1) { // no hour min sec
      tarResult[1] = ''
    }
    tarResult = _tarResult + ' ' + tarResult[1]
  }
  return tarResult
}
