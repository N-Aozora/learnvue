<template lang="html">
  <div class="allinfo top-border bottom-border">
      <p class="alltoatl">参考总额<span class="pull-right">{{basicstotal|currency}}</span></p>
      <p class="shipfee">+运费<span class="pull-right">{{shipfee|currency}}</span></p>
  </div>

  <div class="usermsg bottom-border">
      <textarea name="" id="ordermsg" rows="3" ms-duplex="message" placeholder="想对卖家说点什么吗？请在这留言吧"></textarea>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
