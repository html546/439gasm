
<template>
  <div class="lorr">
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
  },
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}
.lorr {
  width: 100%;
  height: 100%;
  background-image: url("~assets/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>

