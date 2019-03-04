<template>
  <div>
    <div class="trade1">
      <el-row :gutter="45">
        <el-col :span="12">
          <el-table
            :data="tableData"
            :border="true"
          >
            <el-table-column
              label="訂單"
              prop="id"
            ></el-table-column>
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
              label="手續費"
              prop="fee"
            ></el-table-column>
            <el-table-column
              label="單價"
              prop="oneprice"
            ></el-table-column>
            <el-table-column
              label="信譽級別"
              prop="credit"
            ></el-table-column>
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
              label="訂單"
              prop="id"
            ></el-table-column>
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
              label="手續費"
              prop="fee"
            ></el-table-column>
            <el-table-column
              label="單價"
              prop="oneprice"
            ></el-table-column>
            <el-table-column
              label="信譽級別"
              prop="credit"
            ></el-table-column>
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
      total1: 0
    }
  },
  created() {
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
    },
    handleNextClick(val) {
      this.getData(val, 1);
    },
    handleChange(val) {
      this.getData(val, 1);
    },
    handlePrevClick1(val) {
      this.getData(val, 2);
    },
    handleNextClick1(val) {
      this.getData(val, 2);
    },
    handleChange1(val) {
      this.getData(val, 2);
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
.trade1 {
  width: 1200px;
  margin: 20px auto;
}
.footer {
  width: 100%;
  height: 270px;
  background: #313131;
}
.footer_content {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.footer_top {
  height: 127px;
  border-bottom: 1px solid #4a4a4a;
}
.footer_top .footer_content h3 {
  margin: 20px 0;
  font-size: 18px;
}
.footer_top .footer_content * {
  color: #fff;
  text-decoration: none;
}
.footer_top .footer_content p {
  float: left;
  margin-right: 40px;
}
.footer_bottom {
  height: auto;
}
.footer_bottom .footer_content {
  margin-top: 30px;
}
.space_between {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  align-self: center;
}
.space_between1 {
  align-items: flex-end;
}
.space_between p {
  line-height: 25px;
}
.el-menu-item a {
  display: inline-block;
  width: 100%;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.el-table th,
.el-table tr {
  background-color: #001a2b !important;
  color: #fff;
}
.el-table,
.el-table__expanded-cell {
  background-color: #001a2b;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #162d3d;
}
.el-table--border,
.el-table--group {
  border: 1px solid #162d3d;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: #162d3d;
}
.el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: none;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #162d3d;
}
</style>