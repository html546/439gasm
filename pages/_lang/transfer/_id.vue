<template>
  <div>
    <div class="transfer_detail">
      <div class="form_box1">
        <el-form
          ref="form"
          label-width="120px"
        >
          <el-form-item label="賬戶餘額">
            <el-input
              v-model="form.money1"
              :readonly="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="轉賬金額">
            <el-input v-model="form.money"></el-input>
          </el-form-item>
          <el-form-item label="轉賬類型">
            <el-select
              v-model="form.type"
              placeholder="請選擇轉賬類型"
              style="width:100%;"
              @change="handleChange"
            >
              <el-option
                v-for="(item,index) in transfers"
                :key="index"
                :value="index"
                :label="item.giveTo"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="轉入人編號"
            v-if="!form.isme"
          >
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="最小轉賬金額">
            <el-input
              v-model="form.minmoney"
              :readonly="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="最大轉賬金額">
            <el-input
              v-model="form.maxmoney"
              :readonly="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="整數倍">
            <el-input
              v-model="form.multiple"
              :readonly="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="匯率">
            <el-input
              v-model="form.rate"
              :readonly="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="手續費">
            <el-input
              v-model="form.fee"
              :readonly="true"
            ></el-input>
          </el-form-item>
        </el-form>
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
      form: {
        money1: '',
        money: '',
        type: '',
        minmoney: '',
        maxmoney: '',
        multiple: '',
        rate: '',
        fee: '',
        username: '',
        isme: true
      },
      transfers: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios.post('/api/finance/transfer', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid,
        type: this.$route.params.id
      }).then(res => {
        console.log(res);
        this.form.money1 = res.data.data.money;
        this.transfers = res.data.data.transfers;
      }).catch(err => {
        console.log(err);
      })
    },
    handleChange(val) {
      this.transfers.forEach((item, index) => {
        if (index == val) {
          this.form.minmoney = item.minmoney;
          this.form.maxmoney = item.maxmoney;
          this.form.multiple = item.multiple;
          this.form.rate = item.exchange_rate;
          this.form.fee = item.servicecharge;
          if (item.isme == '0') {
            this.form.isme = false;
          }
        }
      })
    }
  },
}
</script>

<style >
.transfer_detail {
  width: 1200px;
  margin: 50px auto;
}
.form_box1 {
  width: 600px;
  margin: 0 auto;
}
</style>