<template>
  <p>我是列表详情页面</p>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  created() {
    console.log(this.$route.params.id, 4444444);
  },
}
</script>

<style>
</style>