
/**
 * 邮箱验证
 * a-zA-Z0-9和_- 不限数字不限长度
 * '@' 符合后面 a-zA-Z0-9和_-
 * '.' 符合后面 a-zA-Z0-9和_-
 */
const _isEmail = (s: any) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * 1开头
 * 11位数
 */
const _isMobile = (s: any) => {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * '-' 前 0-9 三四位数
 * '-' 符合
 * '-' 后 0-9 七八位数
 */
const _isPhone = (s: any) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * 是否url地址
 * 只要有以下两种特征既符合 https:// http://
 */
const _isURL = (s: any) => {
  return /^http[s]?:\/\/.*/.test(s)
}

/**
 * 是否字符串
 * 传入字符串或者空字符串返回true，
 * 不传或传其他类型值返回false
 */
const _isString = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

/**
 * 是否数值
 * 传入数字返回true，
 * 不传或传其他类型值返回false
 */
const _isNumber = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

/**
 * 是否boolean
 * 传入true,false返回true
 * 不传或传其他类型值返回false
 */
const _isBoolean = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

/**
 * 是否函数
 * 传入方法返回true
 * 不传或传其他类型值返回false
 */
const _isFunction = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

/**
 * 是否为undefined
 * 传入undefined返回true
 * 不传或传其他类型值返回false
 */
const _isUndefined = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

/**
 * 是否对象
 * 传入{a:1}对象返回true
 * 不传或传其他类型值返回false
 */
const _isObj = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}
/**
 * 是否数组
 * 传入[{a:1}]数组返回true
 * 不传或传其他类型值返回false
 */
const _isArray = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

/**
 * 是否时间
 * 传入时间new Date() 返回true
 * 不传或传其他类型值返回false
 * 传 '2023-01-10'返回false
 */
const _isDate = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}
/**
 * 是否正则
 * 传入正则  /abc/ 返回true
 * 不传或传其他类型值返回false
 */
const _isRegExp = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

//是否错误对象
const _isError = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

//是否Symbol函数
const _isSymbol = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

//是否Promise对象
const _isPromise = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

//是否Set对象
const _isSet = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

export default {
  _isEmail, 
  _isMobile, 
  _isPhone, 
  _isURL, 
  _isString, 
  _isNumber, 
  _isBoolean,
  _isFunction, 
  _isUndefined, 
  _isObj, 
  _isArray, 
  _isDate, 
  _isRegExp,
  _isError, 
  _isSymbol, 
  _isPromise, 
  _isSet
}