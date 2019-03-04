
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
    /* //在页面加载时读取sessionStorage里的状态信息
    if (window.localStorage.getItem("store")) {
      this.$store.dispatch('setMessage', JSON.parse(window.localStorage.getItem('message')));
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem('store', JSON.stringify(this.$store.state.message));
    }) */
  },
}
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  background-image: url("~assets/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>

