<template>
  <div id="app">
    <mt-header title="ISPLUS智能服务助手">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <transition>
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/order">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">订单</span>
      </router-link>
      <router-link class="mui-tab-item" to="/find">
        <span class="mui-icon mui-icon-pengyouquan"></span>
        <span class="mui-tab-label">咨询</span>
      </router-link>
      <router-link class="mui-tab-item" to="/my">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
//按需导入
import { Toast } from "mint-ui";
import "./assets/css/app.css";
import "./assets/css/mui/examples/hello-mui/css/mui.min.css";
export default {
  name: "App"
};
</script>

<style lang="less" scoped>
html {
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
.mint-header {
  height: 50px;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>
