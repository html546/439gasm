<template>
  <div>
    <p>我是财务管理页面</p>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {

    }
  },
  created() {
    this.getData(1)
  },
  methods: {
    getData(page) {
      axios.post('/api/finance/info', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid,
        type: 1,
        page: page
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>
<style>
</style>