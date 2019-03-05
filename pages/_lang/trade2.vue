<template>
  <div>
    <div class="detail">
      <h3>{{$t('trade2.detail')}}</h3>
      <p>TRANSACTION DETAILS</p>
      <el-table
        :data="detailData"
        :border="true"
        :stripe="true"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >

        <el-table-column
          prop="saleusername"
          :label="$t('trade2.number')"
        ></el-table-column>
        <el-table-column
          prop="num"
          :label="$t('trade2.num')"
        ></el-table-column>
        <el-table-column
          prop="oneprice"
          :label="$t('trade2.oneprice')"
        ></el-table-column>
        <el-table-column
          prop="all"
          :label="$t('trade2.total')"
        >
          <template slot-scope="scope">
            <p>{{scope.row.num* scope.row.oneprice}}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="state"
          :label="$t('trade2.state')"
        >
          <template slot-scope="scope">
            <div>
              <template v-if="scope.row.state == 0">
                {{$t('trade2.unpaid')}}
              </template>
              <template v-else-if="scope.row.state == 1">
                {{$t('trade2.paid')}}
              </template>
              <template v-else-if="scope.row.state == 2">
                {{$t('trade2.completed')}}
              </template>
              <template v-else-if="scope.row.state == 3">
                {{$t('trade2.rescinded')}}
              </template>
              <template v-else-if="scope.row.state == 4">
                {{$t('trade2.Arbitration')}}
              </template>
              <template v-else-if="scope.row.state == 5">
                {{$t('trade2.seller')}}
              </template>
              <template v-else-if="scope.row.state == 6">
                {{$t('trade2.buyer')}}
              </template>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="buytime"
          :label="$t('trade2.time')"
        >
          <template slot-scope="scope">
            <p>{{scope.row.buytime | timefilter}}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="fee"
          :label="$t('trade2.fee')"
        ></el-table-column>
        <el-table-column
          prop="usdtprice"
          :label="$t('trade2.pay')"
        ></el-table-column>
        <el-table-column
          prop="wealth"
          :label="$t('trade2.operate')"
        >
          <template slot-scope="scope">
            <div></div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev,pager,next"
        :total="total"
        class="pagination"
        background
        @prev-click="handlePrevClick"
        @current-change="handleChange"
        @next-click="handleNextClick"
        :current-page="currentPage"
      >
      </el-pagination>
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
      detailData: [],
      total: 0,
      currentPage: 1,
      loading: true
    }
  },
  created() {
    var page = this.$store.state.page3;
    if (page) {
      this.currentPage = Number(page);
      this.getPage(page);
    } else {
      this.getPage(1);
    }
  },
  methods: {
    getPage(page) {
      axios.post('/api/trade/buyinfo', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid,
        page: page
      }).then(res => {
        console.log(res);
        this.detailData = res.data.data.trade_buy;
        this.loading = false;
        this.total = res.data.data.total;
      }).catch(err => {
        console.log(err);
      })
    },
    handlePrevClick(val) {
      this.loading = true;
      this.getPage(val);
      this.$store.state.commit('SET_PAGE3', val);
    },
    handleNextClick(val) {
      this.loading = true;
      this.getPage(val);
      this.$store.state.commit('SET_PAGE3', val);
    },
    handleChange(val) {
      this.loading = true;
      this.getPage(val);
      this.$store.state.commit('SET_PAGE3', val);
    },
    t(...params) {
      return this.$t.apply(this, params)
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
.detail > h3 {
  font-size: 30px;
}
.detail > p {
  font-size: 14px;
  margin-bottom: 43px;
}
.pagination {
  margin-top: 20px;
}
</style>