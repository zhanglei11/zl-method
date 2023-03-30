
//16进制颜色转RGBRGBA字符串 #ffffff opa透明度
const _colorToRGB = (val: any, opa: any) => {
  let pattern = /^(#?)[a-fA-F0-9]{6}$/ //16进制颜色值校验规则
  let isOpa = typeof opa == 'number' //判断是否有设置不透明度
  if (!pattern.test(val)) {
    //如果值不符合规则返回空字符
    return ''
  }
  let v = val.replace(/#/, '') //如果有#号先去除#号
  let rgbArr = []
  let rgbStr = ''
  for (let i = 0; i < 3; i++) {
    let item = v.substring(i * 2, i * 2 + 2)
    let num = parseInt(item, 16)
    rgbArr.push(num)
  }
  rgbStr = rgbArr.join()
  rgbStr =
    'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')'
  return rgbStr
}

export default {
  _colorToRGB,
}