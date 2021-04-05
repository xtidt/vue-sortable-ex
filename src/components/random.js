// 定义随机数生成函数
// function getRandomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

function getRandomArrs(min, max, length) {
  // 定义空数组，用于接收随机数
  var arr = []

  // 循环10次获取10个随机数
  for (var i = 0; i < length; i++) {
    // 控制台打印i验证
    // 控制台打印调用随机函数验证
    // 将随机产生的数字,存入预先定义的空数组
    arr.push({
      key: i + min,
      name: i + min
    })
  }

  return arr
}

export default getRandomArrs
