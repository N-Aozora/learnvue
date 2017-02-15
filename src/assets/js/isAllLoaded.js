/**
* @param {Number} pagesize 设定的每页数据条数
* @param {Object} pagedata 服务器返回的分页对象，应当包含 pageindex当前取得的第几页， pagecount数据总条数， pagesize本次取出的数量
* @param {Function} update_pageindex 更新分页索引所执行函数，将服务器返回的当前索引作为参数返回
* @param {Function} nomore 没有更多数据时执行函数
*/

export default function (pagesize, pagedata, update_pageindex, nomore) {
  if (pagedata) {
      const pageindex = parseInt(pagedata.pageindex)
      pageindex && update_pageindex(pageindex)
      if (parseInt(pagedata.pagecount) <= (pageindex - 1) * pagesize + parseInt(pagedata.pagesize)) {
        nomore()
      }
  } else {
    nomore()
  }
}
