<template>
  <div>
    <div class="ad"></div>
    <div class="friend">
      <el-card class="box-card">
        <div slot="header">
          <p style="text-align:left;">{{$t('friend.register')}}</p>
        </div>
        <div>
          <el-form
            ref="form"
            label-width="140px"
            style="width:560px"
            @submit.native="onSubmit"
          >
            <el-form-item :label="$t('friend.member')">
              <el-input
                name="username"
                v-model="username"
                :readonly="true"
              ></el-input>
            </el-form-item>
            <el-form-item
              v-for="(val,key) in formContent"
              :key="key"
              :label="val.name"
              v-show="val.input!=='hidden'"
            >
              <el-input
                v-model="val.default"
                :name="key"
                v-if="val.input=='text'"
              ></el-input>
              <el-select
                :name="key"
                v-else-if="val.input=='select'&&key=='sex'"
                v-model="sex"
                style="width:100%;"
              >
                <el-option
                  v-for="(val1,key1) in val.select"
                  :key="key1"
                  :label="val1"
                  :value="key1"
                >
                </el-option>
              </el-select>
              <el-select
                :name="key"
                v-else-if="val.input=='select'&&key=='memberrank'"
                v-model="memberrank"
                style="width:100%;"
              >
                <el-option
                  v-for="(val1,key1) in val.select"
                  :key="key1"
                  :label="val1"
                  :value="key1"
                >
                </el-option>
              </el-select>
              <el-select
                :name="key"
                v-else-if="val.input=='select'&&key=='bank_name'"
                v-model="bank_name"
                style="width:100%;"
              >
                <el-option
                  v-for="(item,index) in bank_names"
                  :key="index"
                  :label="item.bank_names"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('friend.pass1')">
              <el-input
                name="pass1"
                v-model="pass1"
              ></el-input>
            </el-form-item>
            <el-form-item :label="$t('friend.pass1c')">
              <el-input
                name="pass1c"
                v-model="pass1c"
              ></el-input>
            </el-form-item>
            <el-form-item :label="$t('friend.pass2')">
              <el-input
                name="pass2"
                v-model="pass2"
              ></el-input>
            </el-form-item>
            <el-form-item :label="$t('friend.pass2c')">
              <el-input
                name="pass2c"
                v-model="pass2c"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                native-type="submit"
              >{{$t('friend.submit')}}</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: '',
  data() {
    return {
      formContent: '',
      bank_names: '',
      pass1: '',
      pass1c: '',
      pass2: '',
      pass2c: '',
      province: '',
      city: '',
      area: '',
      provinces: [],
      citys: [],
      areas: [],
      bank_name: '',
      sex: '',
      memberrank: '',
      username: '',
    }
  },
  created() {
    this.getPage();
    this.getBanks();
  },
  methods: {
    getPage() {
      axios.post('/api/member/register', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid,
        type: 1
      }).then(res => {
        console.log(res);
        this.username = res.data.data.defaultname;
        this.formContent = res.data.data.regdatasets;
        for (const key in this.formContent) {
          if (key == 'sex' && this.formContent[key].default !== '') {
            this.sex = this.formContent[key].default;
          } else if (key == 'memberrank' && this.formContent[key].default !== '') {
            this.memberrank = this.formContent[key].default;
          } else if (key == 'bank_name' && this.formContent[key].default !== '') {
            this.bank_name = this.formContent[key].dafault;
          }
        }
      }).catch(err => {
        console.log(err);
      })
    },
    getBanks() {
      axios.post('/api/member/getbanks', {
        userid: this.$store.state.message.userid,
        sessionid: this.$store.state.message.sessionid
      }).then(res => {
        this.bank_names = res.data.data;
      }).catch(err => {
        console.log(err);;
      })
    },
    onSubmit(event) {
      console.log(event);
      event.preventDefault();
      var formdata = new FormData();
      for (let i = 0; i < event.target.length - 4; i++) {
        if (event.target[i].name == 'bank_name' || event.target[i].name == 'memberrank' || event.target[i].name == 'sex') {
          continue;
        }
        formdata.append(event.target[i].name, event.target[i].value);
      }
      formdata.append('username', this.username);
      formdata.append('userid', this.$store.state.message.userid);
      formdata.append('sessionid', this.$store.state.message.sessionid);
      formdata.append('bank_name', this.bank_name);
      formdata.append('sex', this.sex);
      formdata.append('memberrank', this.memberrank);
      axios.post('/api/member/registersave', formdata).then(res => {
        if (res.data.status == 1) {
          this.$message({
            message: res.data.msg,
            type: 'success',
            showClose: true
          })
        } else if (res.data.status == 0) {
          this.$message({
            message: res.data.msg,
            type: "error",
            showClose: true
          })
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>

<style >
.ad {
  width: 100%;
  background: url("~assets/ad.png") no-repeat center center;
  background-size: cover;
  height: 180px;
}
.friend {
  width: 1200px;
  margin: 55px auto 100px;
}
</style>