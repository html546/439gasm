
<template>
  <div>
    <headtop color="#000" />
    <nuxt style="height:100%;" />
  </div>
</template>

<script>
import headtop from '~/components/headtop'
export default {
  components: {
    headtop
  },
  mounted() {
    //在页面加载时读取sessionStorage里的状态信息
    if (window.localStorage.getItem("store") && window.localStorage.getItem('store') !== '') {
      this.$store.dispatch('setMessage', JSON.parse(window.localStorage.getItem('store')));
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      if (this.$store.state.message !== '') {
        console.log('44444444444');
        localStorage.setItem('store', JSON.stringify(this.$store.state.message));
      }
    })
  },
}
</script>

<style>
@import url('~/assets/bg.css');
</style>

