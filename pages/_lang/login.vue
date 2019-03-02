<template>
  <div class="login">
    <div class="login_panel">
      <div class="login_panel_right">
        <div class="button_group">
          <button class="login_btn">{{$t('login.account')}}</button>
        </div>
        <div class="login_form">
          <label for="">{{$t('login.username')}}</label>
          <input
            type="text"
            v-model="username"
          >
        </div>
        <div class="login_form">
          <label for="">{{$t('login.pass')}}</label>
          <input
            type="password"
            v-model="password"
          >
        </div>
        <button
          class="login_btn1"
          type="submit"
          @click="handleSubmit"
        >{{$t('login.submit')}}</button>
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
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      axios.post('/api/login/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          /* this.$router.push({
            path: '/'
          }) */
          this.$store.commit('setLogin');
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>
<style>
.login {
  width: 100%;
  height: 100%;
}
.login_panel {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.login_panel_right {
  width: 470px;
  height: 530px;
  float: right;
  background: rgba(0, 0, 0, 0.4);
  margin-top: 120px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login_btn {
  background: #6f9feb;
  color: #fff;
  width: 160px;
  height: 40px;
  border-radius: 20px;
  border: none;
  margin-top: 65px;
  cursor: pointer;
}
.login_btn:focus {
  outline: none;
}
.login_form {
  margin-top: 58px;
}
.login_form input {
  width: 240px;
  height: 40px;
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  border-bottom: 1px solid #7986a3;
}
.login_form label {
  color: #fff;
  font-size: 20px;
  width: 60px;
}
.login_form input:focus {
  outline: none;
}
.login_btn1 {
  width: 350px;
  height: 45px;
  background: linear-gradient(to right, #5872e1, #7cbbf1);
  color: #fff;
  border: none;
  border-radius: 20px;
  margin-top: 80px;
  cursor: pointer;
}
.login_btn1:focus {
  outline: none;
}
</style>
