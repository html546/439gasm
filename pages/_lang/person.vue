<template>
  <div>
    <div class="panel1">
      <div class="panel1_content">
        <el-row>
          <el-col :span="6">
            <div class="register">
              <div class="register_left">
              </div>
            </div>
          </el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
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

<style lang="" scoped>
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
}
</style>