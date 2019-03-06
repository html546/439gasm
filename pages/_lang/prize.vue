<template>
  <div>
    <div class="prize">
      <div class="table_box">
        <el-table
          :data="tableData"
          :border="true"
          :stripe="true"
          style="width:100%;"
        >
          <el-table-column
            prop="bonus1"
            :label="label1"
          ></el-table-column>
          <el-table-column
            prop="bonus2"
            :label="label2"
          >
          </el-table-column>
          <el-table-column
            prop="bonus3"
            :label="label3"
          ></el-table-column>
          <el-table-column
            prop="calc_date"
            label="獲獎日期"
          >
            <template slot-scope="scope">
              <p>{{scope.row.calc_date | timefilter}}</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="prize"
            label="獎金"
          ></el-table-column>
          <el-table-column
            prop="income"
            label="收入"
          ></el-table-column>
          <el-table-column
            prop="total_income"
            label="累計收入"
          ></el-table-column>
          <el-table-column
            prop="wealth"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
              >查看詳情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
      label1: '',
      label2: '',
      label3: ''
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
        this.tableData = res.data.data.res;
        var bonus = res.data.data.bonus;
        for (var i in bonus) {
          if (bonus[i].sheet == 'bonus1') {
            this.label1 = bonus[i].name;
          } else if (bonus[i].sheet == 'bonus2') {
            this.label2 = bonus[i].name;
          } else if (bonus[i].sheet == 'bonus3') {
            this.label3 = bonus[i].name;
          }
        }
      }).catch(err => {
        console.log(err);
      })
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
.prize {
  width: 1200px;
  margin: 50px auto;
}
.table_box {
  width: 800px;
  margin: 0 auto;
}
</style>