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
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  }
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
</style>