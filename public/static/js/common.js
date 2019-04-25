export default {
  getStorage (name) {
    return window.localStorage.getItem(name) || ''
  },
  setStorage (name, val) {
    window.localStorage.setItem(name, val)
  },
  formatSeconds (value) {
    var theTime = parseInt(value)// 秒
    var middle = 0// 分
    var hour = 0// 小时

    if (theTime > 60) {
      middle = parseInt(theTime / 60)
      theTime = parseInt(theTime%60)
      if (middle > 60) {
        hour = parseInt(middle/60);
        middle = parseInt(middle%60);
      }
    }
    var result = '' + parseInt(theTime) + ''
    if (parseInt(theTime) < 10) result = '0' + result
    if (middle >= 0) {
      result = ''+parseInt(middle)+':'+result
    }
    if(hour> 0) {
      result = "" + parseInt(hour)+":"+result;
    }
    return result
  },
  sleep (numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime)
        return;
    }
  },
  format (sj) {
  //shijianchuo是整数，否则要parseInt转换
    var time = new Date(sj);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    if(m<10) m = '0'+m
    if(d<10) d = '0'+m
    // var h = time.getHours();
    // var mm = time.getMinutes();
    // var s = time.getSeconds();
    return y+'-'+m+'-'+d;
}
}
