<template>
  <div>
    <headtop color="#000" />
    <nuxt />
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
    if (window.localStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem("store"))))
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  },
}
</script>

<style>
html,
body {
  background: url("~assets/bg.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>

