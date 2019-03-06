<template>
  <div>
    <p>我是獎金管理詳情頁面</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: '',
  data() {
    return {

    }
  },
  created() {
    this.getData(1);
  },
  methods: {
    getData(page) {
      axios.post('/api/prize/index', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid,
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