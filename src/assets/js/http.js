/**
* @param {String} url 请求地址
* @param {Object} params 包含的查询字符串对象
* @param {String|Boolean} abnormal_msg code不为 0 情况下提示信息
* @param {Function} expect_fn code为 0 情况下执行操作
* @param {Object} indicator mint-ui indicator方法的参数对象
* @param {Function} success_fn 响应成功执行操作，用以处理正常逻辑之外的操作，如隐藏加载框
* @param {Function} error_fn 请求失败的操作
* @param {Function} abnormal_fn code非 0 情况下操作
*/

import Vue from 'vue'

function requestGet (url, params, abnormal_msg, expect_fn, indicator, success_fn, error_fn, abnormal_fn) {
  const o = { params }
  if (typeof indicator === "object") {
    o.before = function () {
      Vue.$indicator.open(indicator)
    }
  }
  return Vue.http.get(url, o).then(response => {
    indicator && Vue.$indicator.close()
    success_fn && success_fn(response)
    if (response.body.code === 0) {
      if (expect_fn) {
        return expect_fn(response.body)
      }
    } else {
      abnormal_msg && Vue.$toast(response.body.msg || abnormal_msg)
      if (abnormal_fn) {
        return abnormal_fn(response)
      }
    }
  }, response => {
    Vue.$toast({
      message: "网络错误",
      position: 'top'
    })
    if (error_fn) {
      return error_fn(response)
    }
  })
}

export default {
  get: requestGet
}
