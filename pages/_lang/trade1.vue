<template>
  <div>
    <div class="trade1">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-table
            :data="tableData"
            :border="true"
          >
            <el-table-column
              label="掛單時間"
              prop="time"
            >
              <template slot-scope="scope">
                <div>
                  {{scope.row.time | timefilter}}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="用戶編號"
              prop="username"
            ></el-table-column>
            <el-table-column
              label="交易數量"
              prop="num"
            ></el-table-column>
            <el-table-column
              label="單價"
              prop="oneprice"
            ></el-table-column>
            <el-table-column
              label="信譽級別"
              prop="credit"
            ></el-table-column>
            <el-table-column
              label="操作"
              prop="wealth"
            >
              <template slot-scope="scope">
                <div>
                  <el-button
                    type="primary"
                    size="mini"
                    @click="handleBuy(scope.row,1)"
                  >買入</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            layout="prev,pager,next"
            :total="total"
            style="text-align:center;margin-top:20px;"
            @prev-click="handlePrevClick"
            @current-change="handleChange"
            @next-click="handleNextClick"
          >
          </el-pagination>
        </el-col>
        <el-col :span="12">
          <el-table
            :data="tableData1"
            :border="true"
          >
            <el-table-column
              label="掛單時間"
              prop="time"
            >
              <template slot-scope="scope">
                <div>
                  {{scope.row.time | timefilter}}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="用戶編號"
              prop="username"
            ></el-table-column>
            <el-table-column
              label="交易數量"
              prop="num"
            ></el-table-column>
            <el-table-column
              label="單價"
              prop="oneprice"
            ></el-table-column>
            <el-table-column
              label="信譽級別"
              prop="credit"
            ></el-table-column>
            <el-table-column
              label="操作"
              prop="wealth"
            >
              <template slot-scope="scope">
                <div>
                  <el-button
                    type="primary"
                    size="mini"
                    @click="handleBuy(scope.row,2)"
                  >賣出</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            layout="prev,pager,next"
            :total="total1"
            style="text-align:center;margin-top:20px;"
            @prev-click="handlePrevClick1"
            @current-change="handleChange1"
            @next-click="handleNextClick1"
          ></el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  layout: 'trade',
  data() {
    return {
      tableData: [],
      tableData1: [],
      total: 0,
      total1: 0,
    }
  },
  created() {
    console.log(this.$store.state);
  },
  mounted() {
    this.getData(1, 1);
    this.getData(1, 2);
  },
  methods: {
    getData(page, type) {
      axios.post('/api/trade/index', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid,
        page: page,
        tradetype: type
      }).then(res => {
        console.log(res);
        if (type == 1) {
          this.tableData = res.data.data.trades.data;
        } else if (type == 2) {
          this.tableData1 = res.data.data.trades.data;
        }
      }).catch(err => {
        console.log(err);
      })
    },
    handlePrevClick(val) {
      this.getData(val, 1);
      this.$store.state.commit('SET_PAGE', val);
    },
    handleNextClick(val) {
      this.getData(val, 1);
      this.$store.state.commit('SET_PAGE', val);
    },
    handleChange(val) {
      this.getData(val, 1);
      this.$store.state.commit('SET_PAGE', val);
    },
    handlePrevClick1(val) {
      this.getData(val, 2);
      this.$store.state.commit('SET_PAGE2', val);
    },
    handleNextClick1(val) {
      this.getData(val, 2);
      this.$store.state.commit('SET_PAGE2', val);
    },
    handleChange1(val) {
      this.getData(val, 2);
      this.$store.state.commit('SET_PAGE2', val);
    },
    handleBuy(row, type) {
      axios.post('/api/trade/buytrade', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid,
        id: row.id,
        buynum: row.num,
      }).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.$message({
            type: 'success',
            message: res.data.msg,
            showClose: true,
            onClose: this.onclose(type)
          })
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg,
            showClose: true
          })
        }
      }).catch(err => {
        console.log(err);
      })
    },
    onclose(type) {
      if (type == 1) {
        this.getData(this.$store.state.page1, 1);
        this.$store.commit('SET_PAGE', this.$store.state.page1);
      } else {
        this.getData(this.$store.state.page2, 1);
        this.$store.commit('SET_PAGE2', this.$store.state.page2);
      }
    }
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
@import url("~/assets/trade1.css");
</style>