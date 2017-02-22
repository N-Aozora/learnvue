<template lang="html">
  <div id="grade-explain" class="app">
    <section>
      <h2>普通等级对应经验值<small>（当前LV{{level}}）</small></h2>
      <table>
        <tr>
          <th>等级</th>
          <th>升级所需经验</th>
        </tr>
        <tr v-for="item in gradedata">
          <td class="bottom-border">{{item.grade}}</td>
          <td class="bottom-border">{{item.product}}</td>
        </tr>
      </table>
    </section>

    <section>
      <h2>如何获得经验</h2>
      <table>
        <tr>
          <th width="50%">任务</th>
          <th width="50%">获得奖励</th>
        </tr>
        <tr v-for="item in channeldata">
          <td class="bottom-border"><p>{{item.explain}}</p></td>
          <td class="bottom-border">+{{item.product}}经验</span></td>
        </tr>
      </table>
    </section>

    <section class="upgrade_benefit">
      <h2>升级的好处</h2>
      <p>随着要客等级升高，在要客商城购买商品可以享受更低的折扣。</p>
      <p>而普通会员升级所获得的经验即是你所拥有的积分，可用于在积分商城兑换物品。</p>
    </section>
  </div>
</template>

<script>
import Http from 'assets/js/http'

export default {
  data () {
    return {
      gradedata: [],
      channeldata: [],
      level: 1
    }
  },
  created () {
    Http.get("/User/UserCore/UserGradeObtainExplain", null, result => {
      this.gradedata = result.data.gradedata || []
      this.channeldata = result.data.channeldata
      this.level = result.data.getlevel || 1
    }, {
      wrongMsg: "获取信息失败",
      before: () => this.$indicator.open({ text: "加载中...", spinnerType: "triple-bounce" }),
      complete: () => this.$indicator.close()
    })
  }
}
</script>
<style lang="stylus" scoped>
#grade-explain
  height: auto
  min-height: 100%
  background-color: #f8f8f8;
  font-size: .7rem;
  section
    margin: 1rem 1rem 1.5rem
    h2
        font-size: .7rem
        line-height: 1
        text-indent: .3rem
        border-left: 2px solid #de6262
        margin-bottom: .7rem
        color: #444
        font-weight: normal
    table
      width: 100%
      font-size: .6rem
      border-collapse: collapse
      background-color: #fff
      box-shadow: 0 0 1px #eee
      tr
        line-height: 1.5rem
      th
        font-weight: normal
        text-align: center
        background-color: #eee
        color: #888
      td
        text-align: center
        p
          line-height: 1.2
          padding: 5px
    &.upgrade_benefit p
      line-height: 1.4
      color: #777

</style>
