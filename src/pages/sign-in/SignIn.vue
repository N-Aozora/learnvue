<template lang="html">
  <div id="sign-in" class="app">
     <div class="date-title">
       <i class="iconfont icon-zuojiantou1" id="last-month"></i>
       <span id="timeTxt">{{year}}年{{month>8?month+1:'0'+(month+1)}}月</span>
       <i class="iconfont i-next icon-zuojiantou1 disabled" id="next-month"></i>
     </div>
     <div class="data-content">
       <table>
         <tr>
           <th>一</th>
           <th>二</th>
           <th>三</th>
           <th>四</th>
           <th>五</th>
           <th>六</th>
           <th>日</th>
         </tr>
         <tr v-for="n in 6">
            <td v-for="el in dateList.slice((n-1)*7,n*7)">{{el}}</td>
         </tr>
       </table>
     </div>
   </div>
</template>

<script>
import { getCalendar } from "assets/js/calendar"

export default {
  data () {
    return {
      nowDate: new Date(),
      dateList: [],
      firstDay_index: "",
      nextMonth_firstDay_index: "",
      signInList: [],
      year: "",
      month: "",
      day: ""
    }
  },
  created () {
    this.year = this.nowDate.getFullYear()
    this.month = this.nowDate.getMonth()
    this.day = this.nowDate.getDate()
    this.dateList = getCalendar(this.year, this.month, this.day)
    this.firstDay_index = this.dateList.indexOf(1)
    this.nextMonth_firstDay_index = this.dateList.indexOf(1, this.firstDay_index)
  },
  methods: {
    lastMonth () {
      if (this.month === 1) {
        this.month = 11
        this.year --
      } else {
        this.month --
      }
      this.day = 1
      this.dateList = getCalendar(this.year, this.month, 1)
    },
    nextMonth () {
      let _y, _m
      if (this.month === 11) {
        _m = 1
        _y = this.year + 1
      } else {
        _m = this.month + 1
      }
      if (new Date(_y, _m, 1) > nowDate) return
      this.year = _y
      this.month = _m
      this.day = 1
      this.dateList = getCalendar(_y, _m, 1)
    },
    getSignInData (year, month, isFirst) {
      Http.get("/User/UserCore/UserSign", { year: this.year, month: this.mont + 1 }, result => {
        isFirst && this.$toast("签到成功")
        this.signinList = result.data.signtime || []
      }, {
        wrongMsg: isFirst ? "签到失败" : "查询签到记录失败",
        wrong: () => result.code === 12 && his.$toast("今日已签到")
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  #sign-in
    font-size: .7rem
    background-color: #f1f1f1

  .date-title
    position: relative
    background-color: #de6262
    text-align: center
    color: #fff
    line-height: 2.5rem
    span
      vertical-align: middle
      font-size: .8rem
      font-weight: bold
    i
      display: inline-block
      vertical-align: middle
      font-size: 1.2rem
      margin: 0 .4rem
      &.disabled
        opacity: .5
    .i-next
      transform: rotate(180deg)
      margin-top: -.18rem

  .data-content
    padding: 0 15px
    table
      border-spacing: 0
      border-collapse: collapse
      width: 100%
      color: #666
    th, td
      text-align: center
      padding: 11px 8px
    th
      color: #de6262
    td
      background-color: #fff
      border: 1px solid #e8e8e8
      position: relative
    td.now-day
        background-color: #eb8282
        color: #fff
    td.not-now-month
        border: none
        background-color: transparent
        color: #c0c0c0
    td.hassignin
      color: #de6262
      &::after
        font: normal normal normal 14px/1 "weui"
        content: "\EA08"
        position: absolute
        bottom: 2px
        right: 4px
        font-size: 10px
        color: #de6262
</style>
