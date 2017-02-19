/**
*@method
*  get (url, params, expect_fn, options)
*  post(url, params, expect_fn, options)
*
** @param {String} url 请求地址
** @param {Object} params 包含的提交信息对象
** @param {Function} expect_fn code为 0 情况下执行操作
** @param {Object} options 可选 额外参数
**
*** options
*** @param {Function} before    发送请求前执行函数
*** @param {Function} complete 请求完成执行函数，无论成功或失败
*** @param {Function} success 请求成功执行函数
*** @param {Function} error  请求失败执行函数
*** @param {Function} wrong  code非 0 情况下执行函数
*** @param {String} wrongMsg code非 0 情况下提示信息， 默认弹出后台返回信息，没有则取该信息， 传 null 可取消弹出信息
*** @param {String} errorPosition  mint-ui，toast 请求失败错误提示弹出位置   top | middle | bottom
*** @param {Boolean} cache  是否禁用缓存
*** @param {Boolean} deDuplication  去重
*/


import Vue from 'vue'

const de_duplication_obj = { }

function request (type, url, params, expect_fn,
{ before, complete, success, error, wrong, deDuplication, cache, wrongMsg = "操作失败", errorPosition = "top" } = {}) {

  if (cache) {
    if (params instanceof Object) {
      params.__ = new Date().getTime()
    } else {
      params = { __: new Date().getTime() }
    }
  }

  let o = null
  let postOption = null
  if (type === "post") {
    o = params
    if (typeof before === "function") {
      postOption = { before }
    }
  } else {
    o = params ? { params } : {}
    if (typeof before === "function") {
      o.before = before
    }
  }

  if (deDuplication) {
    if (url in de_duplication_obj) {
      de_duplication_obj[url] ++
    } else {
      de_duplication_obj[url] = 0
    }
  }

  const __n__ = de_duplication_obj[url]

  return Vue.http[type](url, o, postOption).then(response => {
    if (deDuplication && de_duplication_obj[url] !== __n__) return

    typeof complete === "function" && complete(response)
    typeof success === "function" && success(response)

    if (response.body.code === 0) {
      if (expect_fn) {
        return expect_fn(response.body)
      }
    } else {
      wrongMsg && Vue.$toast(response.body.msg || wrongMsg)
      if (wrong) {
        return wrong(response.body)
      }
    }
  }, response => {
    typeof complete === "function" && complete(response)

    Vue.$toast({
      message: "网络错误",
      position: errorPosition
    })

    if (error) {
      return error(response)
    }
  })
}

export default {
  get (...agr) {
    return request("get", ...agr)
  },
  post (...agr) {
    return request("post", ...agr)
  }
}
