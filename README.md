# 工具方法

###### 邮箱 参数str

isEmail(str)

###### 手机号码 参数str

isMobile(str)

###### 电话号码 参数str

isPhone(str)

###### 是否url地址 参数str

isURL(str)

###### 是否字符串 参数str

isString(str)

###### 是否数字 参数str

isNumber(str)

###### 是否boolean 参数str

isBoolean(str)

###### 是否函数 参数str

isFunction(str)

###### 是否为null 参数str

isUndefined(str)

###### 是否对象 参数str

isObj(str)

###### 是否正则 参数str

isRegExp(str)

###### 是否数组 参数str

isArray(str)

###### 是否时间 参数str

isDate(str)

###### 是否错误对象 参数str

isError(str)

###### 是否Symbol函数 参数str

isSymbol(str)

###### 是否Promise对象 参数str

isPromise(str)

###### 是否Set对象 参数str

isSet(str)

###### 是否是微信浏览器

isWeiXin()

###### 是否是移动端

isDeviceMobile()

###### 是否是QQ浏览器

isQQBrowser()

###### 是否是爬虫

isSpider()

###### 是否ios

isIos()

###### 是否为PC端

isPC(str)

###### 去除html标签 参数str

removeHtmltag(str)

###### 获取url参数 参数str

getQueryString(str)

###### 动态引入js 参数str

injectScript(str)

###### 根据url地址下载 参数str

download(str)

###### el是否包含某个class (el,className)

hasClass(el,className)

###### el添加某个class (el,className)

addClass(el,className)

###### el去除某个class (el,className)

removeClass(el,className)

###### 获取滚动的坐标 (el)

removeClass(el)

###### el是否在视口范围内 (el,partiallyVisible)

partiallyVisible为true表示上下
partiallyVisible为false表示左右
elementIsVisibleInViewport(el,partiallyVisible)

###### 洗牌算法随机 (arr)

shuffle(arr)

###### 劫持粘贴板 (value)

copyTextToClipboard(arr)

###### 判断类型集合 (str,type)

type值为phone，tel，card，pwd，postal,QQ,email,money,URL,IP,date,number,english,chinese,lower,upper,HTML
checkStr(str,type)

###### 严格的身份证校验 (value)

isCardID(value)

###### 随机数范围 (min,max)

random(min,max)

###### 将阿拉伯数字翻译成中文的大写数字 (num)

numberToChinese(num)

###### 将数字转换为大写金额 (num)

changeToChinese(num)

###### 判断一个元素是否在数组中 (arr,val)

contains(arr,val)

###### 数组排序， 1：从小到大 2：从大到小 3：随机 (arr,type)

sort(arr,type)

###### 去重 (arr)

unique(arr)

###### 求两个集合的并集 (a, b)

union(a, b)

###### 求两个集合的交集 (a, b)

intersect(a, b)

###### 删除其中一个元素 (arr, ele)

remove(arr, ele)

###### 将类数组转换为数组 (arr)

formArray(arr)

###### 最大值 (arr)

max(arr)

###### 最小值 (arr)

min(arr)

###### 求和 (arr)

sum(arr)

###### 平均值 (arr)

average(arr)

###### 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格 (arr,type)

trim(arr,type)

###### 字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写

changeCase(arr,type)

###### 在字符串中插入新字符串

insertStr(soure, index, newStr)

###### 判断两个对象是否键值相同

isObjectEqual(a, b)

###### 16进制颜色转RGBRGBA字符串 opa(透明度)

colorToRGB(val, opa)

###### 追加url参数

appendQuery(url, key, value)
