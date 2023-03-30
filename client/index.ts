//是否是微信浏览器
const ua: any = navigator.userAgent.toLowerCase()
const _isWeiXin = () => {
  return ua.match(/microMessenger/i) == 'micromessenger'
}

//是否是移动端
const _isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

//是否是QQ浏览器
const _isQQBrowser = () => {
  return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}

//是否是IE浏览器
const _isIE = () => {
  return !!ua.match(/msie/i)
}
//是否是火狐
const _isFirefox = () => {
  return !!ua.match(/firefox/i)
}
//是否是谷歌
const _isChrome = () => {
  return !!ua.match(/chrome/i)
}
//是否是Opera
const _isOpera = () => {
  return !!ua.match(/opera/i)
}
//是否是Safari
const _isSafari = () => {
  return !!ua.match(/safari/i)
}
//是否是爬虫
const _isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua)
}

//下面试不将其转为小写
let u: any = navigator.userAgent
//是否ios
const _isIos = () => {
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    //安卓手机         
    return false
  } else if (u.indexOf('iPhone') > -1) {
    //苹果手机         
    return true
  } else if (u.indexOf('iPad') > -1) {
    //iPad         
    return false
  } else if (u.indexOf('Windows Phone') > -1) {
    //winphone手机        
    return false
  } else {
    return false
  }
}
//是否为PC端
const _isPC = () => {
  let Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  ]
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (u.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}


export default {
  _isWeiXin,
  _isDeviceMobile,
  _isQQBrowser,
  _isIE,
  _isFirefox,
  _isChrome,
  _isOpera,
  _isSafari,
  _isSpider,
  _isIos,
  _isPC,
}
