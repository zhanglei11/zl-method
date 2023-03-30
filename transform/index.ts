
//严格的身份证校验
const _isCardID = (sId: any) => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log('你输入的身份证长度或格式错误')
    return false
  } //身份证城市
  let aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  }
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.log('你的身份证地区非法')
    return false
  } // 出生日期验证
  let sBirthday = (
    sId.substr(6, 4) +
    '-' +
    Number(sId.substr(10, 2)) +
    '-' +
    Number(sId.substr(12, 2))
  ).replace(/-/g, '/'),
    d = new Date(sBirthday)
  if (
    sBirthday !=
    d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
  ) {
    console.log('身份证上的出生日期非法')
    return false
  } 
  // 身份证号码校验     
  let codes: any = 'X9876543210'
  if (codes.indexOf(sId[sId.length - 1]) == -1) {
    console.log('你输入的身份证号非法')
    return false
  }
  return true
}

//将阿拉伯数字翻译成中文的大写数字
const _numberToChinese = (num: any) => {
  let AA = new Array(
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十'
  )
  let BB = new Array('', '十', '百', '仟', '萬', '億', '点', '')
  let a: any = ('' + num).replace(/(^0*)/g, '').split('.'),
    k = 0,
    re = ''
  for (let i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re
        break
      case 4:
        if (!new RegExp('0{4}//d{' + (a[0].length - i - 1) + '}$').test(a[0]))
          re = BB[4] + re
        break
      case 8:
        re = BB[5] + re
        BB[7] = BB[5]
        k = 0
        break
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
      re = AA[0] + re
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re
    k++
  }
  if (a.length > 1) {
    re += BB[6]
    for (let i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)]
  }
  if (re == '一十') re = '十'
  if (re.match(/^一/) && re.length == 3) re = re.replace('一', '')
  return re
}

//将数字转换为大写金额
const _changeToChinese = (Num: any) => {
  //判断如果传递进来的不是字符的话转换为字符
  if (typeof Num == 'number') {
    Num = new String(Num)
  }
  Num = Num.replace(/,/g, '') //替换tomoney()中的“,”
  Num = Num.replace(/ /g, '') //替换tomoney()中的空格
  Num = Num.replace(/￥/g, '') //替换掉可能出现的￥字符
  if (isNaN(Num)) {
    //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return ''
  }
  //字符处理完毕后开始转换，采用前后两部分分别转换
  let part = String(Num).split('.')
  let newchar: any = '' //小数点前进行转化
  for (let i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return ''
      //若数量超过拾亿单位，提示
    }
    let tmpnewchar: any = ''
    let perchar: any = part[0].charAt(i)
    switch (perchar) {
      case '0':
        tmpnewchar = '零' + tmpnewchar
        break
      case '1':
        tmpnewchar = '壹' + tmpnewchar
        break
      case '2':
        tmpnewchar = '贰' + tmpnewchar
        break
      case '3':
        tmpnewchar = '叁' + tmpnewchar
        break
      case '4':
        tmpnewchar = '肆' + tmpnewchar
        break
      case '5':
        tmpnewchar = '伍' + tmpnewchar
        break
      case '6':
        tmpnewchar = '陆' + tmpnewchar
        break
      case '7':
        tmpnewchar = '柒' + tmpnewchar
        break
      case '8':
        tmpnewchar = '捌' + tmpnewchar
        break
      case '9':
        tmpnewchar = '玖' + tmpnewchar
        break
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + '元'
        break
      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + '拾'
        break
      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + '佰'
        break
      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + '仟'
        break
      case 4:
        tmpnewchar = tmpnewchar + '万'

        break
      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + '拾'
        break
      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + '佰'
        break
      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + '仟'

        break
      case 8:
        tmpnewchar = tmpnewchar + '亿'
        break
      case 9:
        tmpnewchar = tmpnewchar + '拾'
        break
    }
    newchar = tmpnewchar + newchar
  }
  //小数点之后进行转化
  if (Num.indexOf('.') != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2)
    }
    for (let i = 0; i < part[1].length; i++) {
      let tmpnewchar: any = ''
      let perchar: any = part[1].charAt(i)
      switch (perchar) {
        case '0':
          tmpnewchar = '零' + tmpnewchar
          break
        case '1':
          tmpnewchar = '壹' + tmpnewchar
          break
        case '2':
          tmpnewchar = '贰' + tmpnewchar
          break
        case '3':
          tmpnewchar = '叁' + tmpnewchar
          break
        case '4':
          tmpnewchar = '肆' + tmpnewchar
          break
        case '5':
          tmpnewchar = '伍' + tmpnewchar
          break
        case '6':
          tmpnewchar = '陆' + tmpnewchar
          break
        case '7':
          tmpnewchar = '柒' + tmpnewchar

          break
        case '8':
          tmpnewchar = '捌' + tmpnewchar
          break
        case '9':
          tmpnewchar = '玖' + tmpnewchar
          break
      }
      if (i == 0) tmpnewchar = tmpnewchar + '角'
      if (i == 1) tmpnewchar = tmpnewchar + '分'
      newchar = newchar + tmpnewchar
    }
  }
  //替换所有无用汉字
  while (newchar.search('零零') != -1) newchar = newchar.replace('零零', '零')
  newchar = newchar.replace('零亿', '亿')
  newchar = newchar.replace('亿万', '亿')
  newchar = newchar.replace('零万', '万')
  newchar = newchar.replace('零元', '元')
  newchar = newchar.replace('零角', '')
  newchar = newchar.replace('零分', '')
  if (newchar.charAt(newchar.length - 1) == '元') {
    newchar = newchar + '整'
  }
  return newchar
}

//字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
const _changeCase = (str: any, type: any) => {
  type = type || 4
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word: any) {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        )
      })
    case 2:
      return str.replace(/\b\w+\b/g, function (word: any) {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        )
      })
    case 3:
      return str
        .split('')
        .map(function (word: any) {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase()
          } else {
            return word.toLowerCase()
          }
        })
        .join('')
    case 4:
      return str.toUpperCase()
    case 5:
      return str.toLowerCase()
    default:
      return str
  }
}




export default {
  _isCardID,
  _numberToChinese,
  _changeToChinese,
  _changeCase,
}
