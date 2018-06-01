// 工具函数库
import config from './config'

// http get工具函数 获取数据
export function get(url, data) {
  return request(url, 'GET', data)
}
export function post(url, data) {
  return request(url, 'POST', data)
}

function request(url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      header,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModal('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

export function showModal(title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}
export function showSuccess(text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
export function chunk(array, size) {
  /*
   * max() 方法可返回两个指定的数中带有较大的值的那个数。
   * 所以这里用Math.max方法是用来判断size是否大于0，大于0则size = size 否则为0
   * 问：为什么不用三元运算符运算方程
   */
  size = Math.max(size, 0)
  /*
   *  三元计算 -- 如果array不存在则长度为0，否则为array的长度
   */
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  /*
   *  Math.ceil() === 向上取整
   */
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size))
  }
  return result
}

function baseSlice(array, start, end) {
  let index = -1
  let { length } = array

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  // >>>的意思是二进制右移一位 比如 2 >>> 1 === 1
  // 2 的二进制为 0010 右移一位等于 0001
  // >>>= 的意思是右移并赋值
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

