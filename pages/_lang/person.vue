<template>
  <div>
    <div class="panel1">
      <div class="panel1_content">
        <el-row>
          <el-col :span="6">
            <div class="register">
              <img
                src="~assets/register.png"
                alt=""
              >
              <div class="register_right">
                <h3>會員註冊</h3>
                <el-button
                  type="primary"
                  plain
                  round
                >點擊查看</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="register">
              <img
                src="~assets/links.png"
                alt=""
              >
              <div class="register_right">
                <h3>推廣鏈接</h3>
                <el-button
                  type="primary"
                  plain
                  round
                >點擊查看</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="register">
              <img
                src="~assets/order.png"
                alt=""
              >
              <div class="register_right">
                <h3>我的會員訂單</h3>
                <el-button
                  type="primary"
                  plain
                  round
                >點擊查看</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="register">
              <img
                src="~assets/list.png"
                alt=""
              >
              <div class="register_right">
                <h3>操作記錄</h3>
                <el-button
                  type="primary"
                  plain
                  round
                >點擊查看</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="friend_banner">
      <div class="friend_content">
        <nuxt-link to="">
          <div class="friend_item">
            <img
              src="~assets/organize.png"
              alt=""
            >
            <p>组织图</p>
          </div>
        </nuxt-link>
        <nuxt-link to="">
          <div class="friend_item">
            <img
              src="~assets/prize.png"
              alt=""
            >
            <p>奖金管理</p>
          </div>
        </nuxt-link>
        <nuxt-link to="">
          <div class="friend_item">
            <img
              src="~assets/finance.png"
              alt=""
            >
            <p>财务管理</p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="list">
      <div class="list_panel">
        <div
          class="ltc"
          id="canvas-frame"
        ></div>
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

    }
  },
  created() {

  },
  mounted() {
    var container = document.getElementById("canvas-frame");
    // 创建Gio控制器
    var controller = new GIO.Controller(container);
    controller.setSelectedColor(0x00FF00);
    // 添加数据
    controller.addData(this.data);
    // 初始化并渲染地球
    controller.init();
  },
  asyncData() {
    return axios.get('/data/sampleData.json')
      .then(res => {
        console.log(res);
        return { data: res.data }
      })
  },
}
</script>

<style>
.panel1 {
  width: 100%;
  height: 220px;
}
.panel1_content {
  width: 1200px;
  margin: 0 auto;
}
.register {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 70px;
}
.register_right {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}
.register_right button {
  width: 110px;
  height: 25px;
  line-height: 25px;
  margin-top: 10px;
}
.register_right .el-button.is-round {
  padding: 0;
}
.friend_banner {
  background: url("~assets/friend_banner.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 400px;
}
.friend_content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.friend_item {
  width: 260px;
  height: 250px;
  border: 1px solid #fff;
  border-radius: 20px;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
}
.friend_item:hover {
  background: linear-gradient(#38aeec, #235ff6);
  background: -moz-linear-gradient(#38aeec, #235ff6);
  background: -webkit-linear-gradient(#38aeec, #235ff6);
  background: -o-linear-gradient(#38aeec, #235ff6);
  border: none;
}
.friend_item p {
  color: #fff;
  font-size: 24px;
}
.list {
  width: 100%;
  height: 950px;
  background: #f3f3f3;
}
.list_panel {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.list_panel .ltc {
  width: 600px;
  height: 750px;
  margin-top: 75px;
  background: url("~assets/circle.jpg") no-repeat center center;
  background-size: cover;
}
</style>