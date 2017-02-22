<template lang="html">
  <div id="user-info" class="app">
    <div class="user-wrap">
      <mt-cell title="头像" :is-link="false">
        <img :src="avatar" class="avatar" width="50" alt="" >
      </mt-cell>
      <mt-field label="昵称" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-cell title="性别" class="usersex-box" :is-link="false">
        <select class="usersex" name="" v-model="usersex">
          <option value="0">男</option>
          <option value="1">女</option>
        </select>
      </mt-cell>
      <mt-field label="生日"  placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
    </div>
    <div class="btn-box">
      <own-button @click.native="submit">保存</own-button>
    </div>
  </div>
</template>

<script>
import OwnButton from 'components/button/button'
import Http from 'assets/js/http'

export default {
  data () {
    return {
      username: this.$store.getters.name,
      avatar: this.$store.getters.avatar,
      usersex: this.$store.getters.usersex || 0,
      birthday: this.$store.getters.birthday,
      disabled: false
    }
  },
  methods: {
    submit () {
      const params = {
          fullname: this.username,
          birthday: this.birthday,
          usersex: this.usersex,
          // avatar: this.avatar
      }
      Http.post("/User/UserCore/UserModifyUpdate", params, result => {
        this.$toast({
          message: '添加成功',
          iconClass: 'mintui mintui-success',
          className: 'mintui-toast-success',
          duration: 2000
        })
        this.$store.dispatch("getUserInfo")
      }, {
        wrongMsg: "保存失败",
        before: () => {
          this.disabled = true
          this.$indicator.open({
            text: "正在提交...",
            spinnerType: "double-bounce"
          })
        },
        complete: () => {
          this.$indicator.close()
          this.disabled = false
        }
      })
    }
  },
  components: {
    OwnButton
  }
}
</script>

<style media="screen" lang="stylus">
#user-info .usersex-box
  .mint-cell-title
    width: 105px
    flex: none
  .mint-cell-value
    flex: 1

</style>
<style lang="stylus" scoped>
#user-info
  background-color: #f4f4f4
  padding-top: 1.7rem
  .btn-box
    margin: 1rem .5rem 0
  .avatar
    margin: 5px
    border-radius: 50%
  .usersex
    appearance: none
    background-color: transparent
    border: none
    width: 100%
    line-height: 1.6
    font-size: inherit

</style>
