<template>
  <div>
    <div class="wallet">
      <el-table
        :data="tableData"
        style="width:100%;"
        :border="true"
        :stripe="true"
        v-loading="loading"
      >
        <el-table-column
          prop="id"
          label="id"
        ></el-table-column>
        <el-table-column
          prop="time"
          label="变动时间"
        >
          <template slot-scope="scope">
            {{scope.row.time | timefilter}}
          </template>
        </el-table-column>
        <el-table-column
          prop="username"
          label="会员编号"
        ></el-table-column>
        <el-table-column
          prop="type"
          label="消費類型"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="變動金額"
        ></el-table-column>
        <el-table-column
          prop="balance"
          label="錢包餘額"
        ></el-table-column>
        <el-table-column
          prop="mome"
          label="備註"
        ></el-table-column>
      </el-table>
      <el-pagination
        layout="prev,pager,next"
        :total="total"
        style="text-align:center;margin-top:20px;"
        @prev-click="handlePrevClick"
        @current-change="handleChange"
        @next-click="handleNextClick"
        background
        :current-page.sync="currentPage1"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: '',
  data() {
    return {
      tableData: [],
      loading: true,
      total: 0,
      currentPage1: 1
    }
  },
  created() {
    let page = this.$store.state.finance;
    if (page > 1) {
      this.currentPage1 = Number(page);
      this.getPage(page);
    } else {
      this.getPage(1);
    }
  },
  methods: {
    getPage(page) {
      axios.post('/api/finance/info', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid,
        type: this.$route.params.id,
        page: page
      }).then(res => {
        console.log(res);
        this.loading = false;
        this.tableData = res.data.data.finances;
        this.total = res.data.data.total;
      }).catch(err => {
        console.log(err);
      })
    },
    handlePrevClick(val) {
      this.loading = true;
      this.getPage(val);
      this.$store.state.commit('SET_FINANCE', val);
    },
    handleNextClick(val) {
      this.loading = true;
      this.getPage(val);
      this.$store.state.commit('SET_FINANCE', val);
    },
    handleChange(val) {
      this.loading = true;
      this.getPage(val);
      this.$store.state.commit('SET_FINANCE', val);
    },
  },
  filters: {
    timefilter(val) {
      return format1(val * 1000);
    }
  }
}
function add0(m) { return m < 10 ? '0' + m : m }
function format1(shijianchuo) {
  var time = new Date(shijianchuo);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  return y + '-' + add0(m) + '-' + add0(d);
}
</script>

<style>
.wallet {
  width: 1200px;
  margin: 50px auto;
}
</style>