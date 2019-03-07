<template>
  <div class="finance">
    <div class="finance_btn">
      <el-button
        type="danger"
        @click="dialogShow(1)"
      >激活账户</el-button>
      <el-button
        type="warning"
        @click="dialogShow(2)"
      >现金账户</el-button>
      <el-button
        type="success"
        @click="dialogShow(3)"
      >注册账户</el-button>
    </div>
    <el-dialog
      title="跳转提示"
      :visible.sync="centerDialogVisible"
    >
      <nuxt-link :to="link">
        <el-button type="primary">查看详情</el-button>
      </nuxt-link>
      <el-button
        type="danger"
        v-if="transfer"
      >转账</el-button>
      <el-button
        type="success"
        v-if="recharge"
      >充值</el-button>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="centerDialogVisible= false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      centerDialogVisible: false,
      transfer: false,
      recharge: false,
      link: ''
    }
  },
  created() {
  },
  methods: {
    dialogShow(type) {
      this.centerDialogVisible = true;
      this.link = this.$i18n.path(`pass/${type}`);
      if (type == 1) {
        this.recharge = true;
        this.transfer = false;
      } else if (type == 3) {
        this.transfer = true;
        this.recharge = false;
      } else {
        this.recharge = false;
        this.transfer = false;
      }
    }
  },
}
</script>
<style>
.finance {
  width: 1200px;
  margin: 50px auto;
}
.finance_btn {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.finance_btn .el-button {
  margin: 10px 0;
}
</style>