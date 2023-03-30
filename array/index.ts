//洗牌算法随机
const _shuffle = (arr: any) => {
  let result = []
  let random
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length)
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result
}


//判断一个元素是否在数组中
const _contains = (arr: any, val: any) => {
  return arr.indexOf(val) != -1 ? true : false
}

//数组排序，{type} 1：从小到大 2：从大到小 3：随机
const _sort = (arr: any, type: any = 1) => {
  return arr.sort((a: any, b: any) => {
    switch (type) {
      case 1:
        return a - b
      case 2:
        return b - a
      case 3:
        return Math.random() - 0.5
      default:
        return arr
    }
  })
}

//去重
const _unique = (arr: any) => {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr))
  } else {
    let n = {},
      r = []
    for (let i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true
        r.push(arr[i])
      }
    }
    return r
  }
}
//求两个集合的并集
const _union = (a: any, b: any) => {
  let newArr = a.concat(b)
  return _unique(newArr)
}

//求两个集合的交集
const _intersect = (a: any, b: any) => {
  a = _unique(a)
  return a.map((o: any) => {
    return _contains(b, o) ? o : null
  })
}
//过滤值不存在,1
const _filter = (arr: any, type = '') => {
  return arr.filter((s: any) => {
    console.log(s !== type)
    return s !== type;
  });
}

//将类数组转换为数组
const _formArray = (ary: any) => {
  let arr = []
  if (Array.isArray(ary)) {
    arr = ary
  } else {
    arr = Array.prototype.slice.call(ary)
  }
  return arr
}

//随机数范围
const _random = (min: any, max: any) => {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

//删除其中一个元素
const _remove = (arr: any, ele: any) => {
  let index = arr.indexOf(ele)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}

//最大值
const _max = (arr: any) => {
  return Math.max.apply(null, arr)
}
//最小值
const _min = (arr: any) => {
  return Math.min.apply(null, arr)
}
//求和
const _sum = (arr: any) => {
  return arr.reduce((pre: any, cur: any) => {
    return pre + cur
  })
}
//平均值
const _average = (arr: any) => {
  return _sum(arr) / arr.length
}


export default {
  _shuffle,
  _contains,
  _sort,
  _unique,
  _union,
  _intersect,
  _filter,
  _formArray,
  _random,
  _remove,
  _max,
  _min,
  _sum,
  _average
}
