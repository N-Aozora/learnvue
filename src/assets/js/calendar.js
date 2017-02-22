export function getCalendar (year, month, day = 1) {
  let dateList = []
  const nowDate = new Date(year, month, day)
  let time = nowDate.getTime()

  dateList.unshift(nowDate.getDate())

  const nowYear = nowDate.getFullYear()  //当月年份
  const nowMonth = nowDate.getMonth()    //当前月份
  const days = nowDate.getDate()         //当前号数

  //当月1号是星期几
  let weekDay = [7,1,2,3,4,5,6][(new Date(nowYear, nowMonth, 1)).getDay()]

  //从当前号数开始向前遍历，添加之前的号数
  for ( let i = 0; i < days - 1; i++ ) {
    time = new Date(time - 24*60*60*1000)
    dateList.unshift(time.getDate())
  }

  //更具当月1号是星期几，在向前遍历显示的前一月的那几天
  if (weekDay == 1) weekDay = 8

  for (let i = 1; i < weekDay; i++ ) {
    time = new Date(time - 24*60*60*1000)
    dateList.unshift(time.getDate())
  }

  //向后遍历下月显示的那几天
  let nextMonth = nowDate
  while (dateList.length < 42) {
    nextMonth = new Date(nextMonth.getTime() + 24*60*60*1000)
    dateList.push(nextMonth.getDate())
  }

  console.log(dateList)

  return dateList

}
