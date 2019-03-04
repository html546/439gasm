<template>
  <div>
    <div class="detail">
      <h3>交易明細</h3>
      <p>TRANSACTION DETAILS</p>
      <el-table :data="detailData">
        <el-table-column
          prop="saleusername"
          label="賣家編號"
        ></el-table-column>
        <el-table-column
          prop="username"
          label="買家編號"
        ></el-table-column>
        <el-table-column
          prop="num"
          label="交易數量"
        ></el-table-column>
        <el-table-column
          prop="oneprice"
          label="單價"
        ></el-table-column>
        <el-table-column
          prop="all"
          label="總額"
        >
          <template slot-scope="scope">
            <p>{{scope.row.num* scope.row.oneprice}}</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  layout: 'default',
  name: '',
  data() {
    return {
      detailData: []
    }
  },
  created() {
    this.getPage(1);
  },
  methods: {
    getPage(page) {
      console.log(this.$store.state.message.userid);
      axios.post('/api/trade/buyinfo', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid,
        page: page
      }).then(res => {
        console.log(res);
        this.detailData = res.data.data.trade_buy;
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>

<style >
html,
body {
  background: none;
}
.detail {
  width: 1200px;
  margin: 70px auto 185px;
  text-align: center;
}
.detail h3 {
  font-size: 30px;
}
.detail p {
  font-size: 14px;
}
</style>