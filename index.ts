 
import verify from './verify';
import client from './client';
import transform from './transform';
import array from './array';
import color from './color';
import base from './base';
export default { ...verify, ...client, ...transform, ...array, ...color, ...base }


//去除html标签
export const removeHtmltag = (str: any) => {
  return str.replace(/<[^>]+>/g, '')
}
//获取url参数
export const getQueryString = (name: any) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const search = window.location.search.split('?')[1] || ''
  const r = search.match(reg) || []
  return r[2]
}
//动态引入js
export const injectScript = (src: any) => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = src
  const t: any = document.getElementsByTagName('script')[0]
  t.parentNode.insertBefore(s, t)
}
//根据url地址下载
export const download = (url: any) => {
  let isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1
  let isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1
  if (isChrome || isSafari) {
    let link = document.createElement('a')
    link.href = url
    if (link.download !== undefined) {
      let fileName = url.substring(url.lastIndexOf('/') + 1, url.length)
      link.download = fileName
    }
    if (document.createEvent) {
      let e = document.createEvent('MouseEvents')
      e.initEvent('click', true, true)
      link.dispatchEvent(e)
      return true
    }
  }
  if (url.indexOf('?') === -1) {
    url += '?download'
  }
  window.open(url, '_self')
  return true
}

//el是否包含某个class
export const hasClass = (el: any, className: any) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
//el添加某个class
export const addClass = (el: any, className: any) => {
  if (hasClass(el, className)) return
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
//el去除某个class
export const removeClass = (el: any, className: any) => {
  if (!hasClass(el, className)) return
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}


//获取滚动的坐标
export const getScrollPosition = (el: any = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

//滚动到顶部
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}
//el是否在视口范围内
export const elementIsVisibleInViewport = (el: any, partiallyVisible: any = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
      (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}


 
//判断类型集合
export const checkStr = (str:any, type:any) => {
  switch (type) {
    case 'phone': //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
    case 'tel': //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'card': //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal': //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str)
    case 'QQ': //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str)
    case 'URL': //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
        str
      )
    case 'IP': //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
        str
      )
    case 'date': //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
          str
        ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      )
    case 'number': //数字
      return /^[0-9]$/.test(str)
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str)
    case 'lower': //小写
      return /^[a-z]+$/.test(str)
    case 'upper': //大写
      return /^[A-Z]+$/.test(str)
    case 'HTML': //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    default:
      return true
  }
}








//去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
export const trim = (str:any, type:any) => {
  type = type || 1
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '')
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s*)/g, '')
    case 4:
      return str.replace(/(\s*$)/g, '')
    default:
      return str
  }
}

// //函数节流器
// export const debouncer = (fn:any, time:any, interval = 200) => {
//   if (time - (window.debounceTimestamp || 0) > interval) {
//     fn && fn()
//     window.debounceTimestamp = time
//   }
// } 

//在字符串中插入新字符串
export const insertStr = (soure:any, index:any, newStr:any) => {
  var str = soure.slice(0, index) + newStr + soure.slice(index)
  return str
} 
//判断两个对象是否键值相同
export const isObjectEqual = (a:any, b:any) => {
  var aProps = Object.getOwnPropertyNames(a)
  var bProps = Object.getOwnPropertyNames(b)
  if (aProps.length !== bProps.length) {
    return false
  }
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i]
    if (a[propName] !== b[propName]) {
      return false
    }
  }
  return true
} 





//追加url参数
export const appendQuery = (url:any, key:any, value:any) => {
  // var options = key
  // if (typeof options == 'string') {
  //   options = {}
  //   options[key] = value
  // }
  // options = $.param(options)
  // if (url.includes('?')) {
  //   url += '&' + options
  // } else {
  //   url += '?' + options
  // }
  // return url
}
//获取一个随机布尔值 (true/false)
export const randomBoolean = () => Math.random() >= 0.5;
//检查日期是否为工作日
export const isWeekday = (date:any) => date.getDay() % 6 !== 0;

//反转字符串
export const reverse = (str:any) => str.split('').reverse().join('');
//检查当前 Tab 页是否在前台
export const isBrowserTabInView = () => document.hidden;
//检查数字是否为奇数
export const isEven = (num:any) => num % 2 === 0;
//从日期中获取时间
export const timeFromDate = (date:any) => date.toTimeString().slice(0, 8);
//保留小数点（非四舍五入）
export const toFixed = (n:any, fixed:any) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
//检查元素当前是否为聚焦状态
export const elementIsInFocus = (el:any) => (el === document.activeElement);
//检查浏览器是否支持触摸事件
// const touchSupported = () => {
//   ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
// }




