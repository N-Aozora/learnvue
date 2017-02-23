<template lang="html">
  <div id="sign-in" class="app">
     <div class="date-title">
       <i class="iconfont icon-zuojiantou1"
        :class="{ 'disabled': lastDisabled }"
        @click="lastMonth">
      </i>
       <span id="timeTxt">{{year}}年{{month>8?month+1:'0'+(month+1)}}月</span>
       <i class="iconfont i-next icon-zuojiantou1"
        :class="{'disabled': nextDisabled }"
        @click="nextMonth">
      </i>
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
         <tr v-for="(n, index) in 6">
            <td
              v-for="(el, i) in dateList.slice((n-1)*7,n*7)"
              :class="{'not-now-month': classCheck(index,i,1), 'hassignin': classCheck(index,i,2), 'now-day': classCheck(index,i,3)}">{{el}}
            </td>
         </tr>
       </table>
     </div>
   </div>
</template>

<script>
import { getCalendar } from "assets/js/calendar"
import Http from "assets/js/http"

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
    this.getFirstDayIndex()
    this.getSignInData(true)
  },
  computed: {
    nextDisabled () {
      return new Date(this.year, this.month, 1) >= new Date(this.nowDate.getFullYear(), this.nowDate.getMonth(), 1)
    },
    lastDisabled () {
      return this.year < 2017
    }
  },
  methods: {
    getFirstDayIndex () {
      this.firstDay_index = this.dateList.indexOf(1)
      this.nextMonth_firstDay_index = this.dateList.indexOf(1, this.firstDay_index + 1)
    },
    classCheck (index, i, type) {
      const n = index * 7 + i
      const bl = n < this.firstDay_index  || n > this.nextMonth_firstDay_index - 1
      if (type === 1) {
        return bl
      } else if (type === 2) {
        return !bl && this.signInList.indexOf(this.dateList[n]) > -1
      } else {
        return !bl && this.dateList[n] === this.day
      }
    },
    lastMonth () {
      if (this.year < 2017) return
      if (this.month < 1) {
        this.month = 11
        this.year --
      } else {
        this.month --
      }
      this.day = 1
      this.dateList = getCalendar(this.year, this.month, 1)
      this.getFirstDayIndex()
      this.getSignInData()
    },
    nextMonth () {
      let _y, _m
      if (this.month === 11) {
        _m = 0
        _y = this.year + 1
      } else {
        _m = this.month + 1
        _y = this.year
      }
      if (new Date(_y, _m, 1) > this.nowDate) return
      this.year = _y
      this.month = _m
      if (this.year === this.nowDate.getFullYear() && this.month === this.nowDate.getMonth()) {
        this.day = this.nowDate.getDate()
      } else {
        this.day = 1
      }
      this.dateList = getCalendar(_y, _m, 1)
      this.getFirstDayIndex()
      this.getSignInData()
    },
    getSignInData (isFirst) {
      Http.get("/User/UserCore/UserSign", { year: this.year, month: this.mont + 1 }, result => {
        isFirst && this.$toast("签到成功")
        this.signInList = result.data.signtime || []
      }, {
        wrongMsg: isFirst ? "签到失败" : "查询签到记录失败",
        wrong: () => result.code === 12 && this.$toast("今日已签到"),
        before: () => this.$indicator.open(),
        complete: () => this.$indicator.close()
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
    td.not-now-month
      border: none
      background-color: transparent
      color: #c0c0c0
    td.hassignin
      color: #de6262
      &::after
        content: ""
        position: absolute
        bottom: 7px
        right: 4px
        height: 4px
        width: 7px
        border-left: 2px solid #de6262
        border-bottom: 2px solid #de6262
        transform: rotate(-45deg)
    td.now-day
      background-color: #eb8282
      color: #fff
</style>
