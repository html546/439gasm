<template>
  <div class="register">
    <div class="register_panel">
      <div class="register_panel_right">
        <div class="button_group">
          <el-row :gutter="40">
            <el-col :span="12">
              <button>{{$t('register.mobile')}}</button>
            </el-col>
            <el-col :span="12">
              <button>{{$t('register.email')}}</button>
            </el-col>
          </el-row>
        </div>
        <div
          class="register_form"
          v-for="(val,key) in regdata"
          :key="key"
        >
          <label for="">{{val.name}}</label>
          <input
            :name="key"
            type="text"
            v-if="val.input!=='hidden'&&val.input!=='select'"
            v-model="val.default"
          >
          <select
            :name="key"
            id=""
            v-else-if="val.input=='select'&&key!=='bank_name'"
            v-model="val.default"
          >
            <option
              v-for="(val1,key1) in val.select"
              :key="key1"
              :value="key1"
            >{{val1}}</option>
          </select>
          <select
            :name="key"
            v-else-if="val.input=='select'&&key=='bank_name'"
            v-model="val.default"
          >
            <option
              v-for="item in banks"
              :value="item.id"
              :key="item.id"
            >
              {{item.bank_names}}
            </option>
          </select>
        </div>
        <div class="register_form">
          <label for="">登錄密碼</label>
          <input
            type="password"
            v-model="pass1"
            name="pass1"
          >
        </div>
        <div class="register_form">
          <label for="">確認登錄密碼</label>
          <input
            type="password"
            v-model="pass1c"
            name="pass1c"
          >
        </div>
        <div class="register_form">
          <label for="">支付密碼</label>
          <input
            type="password"
            v-model="pass2"
            name="pass2"
          >
        </div>
        <div class="register_form">
          <label for="">確認支付密碼</label>
          <input
            type="password"
            v-model="pass2c"
            name="pass2c"
          >
        </div>
        <button
          class="register_btn1"
          type="submit"
          @click="handleSubmit"
        >{{$t('register.register')}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  layout: 'lorr',
  data() {
    return {
      regdata: {},
      banks: [],
      pass1: '',
      pass1c: '',
      pass2: '',
      pass2c: '',
    }
  },
  created() {
    console.log(this.$store.state.locale);
    axios.post('/api/webmember/register').then(res => {
      // console.log(res);
      this.regdata = res.data.data.regdatasets;
    }).catch(err => {
      console.log(err);
    })
    this.getBanks(1);
  },
  methods: {
    handleSubmit() {

    },
    getBanks(statetype) {
      axios.post('/api/webmember/getbanks', {
        statetype: statetype
      }).then(res => {
        // console.log(res);
        this.banks = res.data.data;
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>
<style>
body {
  background-repeat: repeat-y;
}
.register {
  width: 100%;
  height: 100%;
}
.register_panel {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.register_panel_right {
  width: 470px;
  height: auto;
  float: right;
  background: rgba(0, 0, 0, 0.4);
  margin-top: 60px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* .button_group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
} */
.button_group button {
  width: 165px;
  height: 40px;
  background: none;
  border-radius: 20px;
  color: #6f9feb;
  border: 1px solid #6f9feb;
  margin-top: 15px;
  cursor: pointer;
}
.button_group button:hover {
  background: #6f9feb;
  color: #fff;
}

.button_group button:focus {
  outline: none;
}
.register_form {
  margin-top: 8px;
}
.register_form select,
.register_form input {
  width: 240px;
  height: 40px;
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  border-bottom: 1px solid #7986a3;
}
.register_form select:focus {
  outline: none;
}
.register_form select option {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
  color: #333;
}
.register_form select option:hover {
  color: #fff;
}
.register_form label {
  color: #fff;
  font-size: 20px;
  width: 100px;
  text-align: right;
  display: inline-block;
}
.register_form input:focus {
  outline: none;
}
.register_btn1 {
  width: 350px;
  height: 45px;
  background: linear-gradient(to right, #5872e1, #7cbbf1);
  color: #fff;
  border: none;
  border-radius: 20px;
  margin: 20px 0 10px;
  cursor: pointer;
}
.register_btn1:focus {
  outline: none;
}
</style>
