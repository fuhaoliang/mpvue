
export function formatTime (time, formatStr) {
  var str = formatStr
  var timeDate = new Date(time)
  var Week = ['日', '一', '二', '三', '四', '五', '六']

  str = str.replace(/yyyy|YYYY/, timeDate.getFullYear())
  str = str.replace(/yy|YY/, (timeDate.getYear() % 100) > 9 ? (timeDate.getYear() % 100).toString() : '0' + (timeDate.getYear() % 100))
  var month = timeDate.getMonth() + 1
  str = str.replace(/MM/, month > 9 ? month.toString() : '0' + month)
  str = str.replace(/M/g, month)

  str = str.replace(/w|W/g, Week[timeDate.getDay()])

  str = str.replace(/dd|DD/, timeDate.getDate() > 9 ? timeDate.getDate().toString() : '0' + timeDate.getDate())
  str = str.replace(/d|D/g, timeDate.getDate())

  str = str.replace(/hh|HH/, timeDate.getHours() > 9 ? timeDate.getHours().toString() : '0' + timeDate.getHours())
  str = str.replace(/h|H/g, timeDate.getHours())
  str = str.replace(/mm/, timeDate.getMinutes() > 9 ? timeDate.getMinutes().toString() : '0' + timeDate.getMinutes())
  str = str.replace(/m/g, timeDate.getMinutes())

  str = str.replace(/ss|SS/, timeDate.getSeconds() > 9 ? timeDate.getSeconds().toString() : '0' + timeDate.getSeconds())
  str = str.replace(/s|S/g, timeDate.getSeconds())
  return str
}

export function validate (typeArr, valueArr, callback) {
  const rules = {
    name: {
      reg: /^[a-zA-Z0-9]{3,10}$/,
      msg: '名称格式错误'
    },
    phone: {
      reg: /^1[3456789]\d{9}$/,
      msg: '名称格式错误'
    },
    pass: {
      reg: /^[a-zA-Z0-9]{6,12}$/,
      msg: '密码格式错误'
    },
    tel: {
      reg: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      msg: '座机号格式错误'
    },
    email: {
      reg: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    }
  }
  if ((typeof typeArr) === 'string') {
    let { reg, msg } = rules[typeArr]
    return reg.test(valueArr) ? 1 : msg
  } else if (Array.isArray(typeArr)) {
    let msgArr = []
    msgArr = typeArr.map(item => {
      let { reg, msg } = rules[item]
      return reg.test(valueArr) ? 1 : msg
    })
    return msgArr
  }
}

export default {
  formatTime,
  validate
}
