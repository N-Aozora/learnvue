<template lang="html">
  <div id="change-password" class="app">
    <div class="item-input border-1px-bottom">
      <input type="password" required data-pattern="required" data-errmsg="请输入当前的密码"  placeholder="当前密码" v-model="nowPwd">
    </div>
    <div class="item-input">
      <input type="password" required data-pattern="required" data-errmsg="请输入新的密码" placeholder="新的密码" v-model="newPwd">
    </div>
    <div class="btn-box">
      <own-button @click.native="submit">完成</own-button>
    </div>
	</div>
</template>

<script>
import OwnButton from "components/button/button"
import Http from 'assets/js/http'

export default {
  data () {
    return {
      nowPwd: "",
      newPwd: ""
    }
  },
  computed: {
    validate () {
      const l = this.newPwd.trim().length
      return {
        nowPwd: this.newPwd.trim().length > 0,
        newPwd: l >= 6 && l <= 16
      }
    }
  },
  methods: {
    submit () {
      if (!this.validate.newPwd) {
        this.$toast("请输入6-16位密码")
        return
      } else if (!this.validate.nowPwd) {
        this.$toast("请输入当前密码")
        return
      }
      Http.post("/User/UserCore/UserPwdUpdate", { pwd: this.nowPwd, newpwd: this.newPwd }, result => {
        this.$toast("修改密码成功")
      }, {
        wrongMsg: "修改密码失败",
        wrong: () => {
          this.nowPwd = ""
          this.newPwd = ""
        }
      })
    }
  },
  components: {
    OwnButton
  }
}
</script>

<style lang="stylus" scoped>
#change-password
  padding-top: 1.7rem
  background-color: #f4f4f4
  .item-input
    background-color: #fff
    input
      height: 2.4rem;
      display: block;
      width: 100%;
      text-indent: .5rem;
      font-size: 14px;
  .btn-box
    padding: 0 .5rem
    margin-top: .7rem
  .border-1px-bottom::after
    border-color: #f0f0f0
</style>
