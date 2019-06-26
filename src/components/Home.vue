<template >
  <div id="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="image in imageList" :key="image.id">
        <img :src="image.url" alt>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-home">
             <span class="mui-badge">...</span>
          </span>-->
          <img src="../assets/images/ticket.png" alt>
          <div class="mui-media-body">工单管理</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/images/asset.png" alt>

          <div class="mui-media-body">资产管理</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
          <img src="../assets/images/servicerequest.png" alt>
          <div class="mui-media-body">服务请求</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-location"></span> -->
          <img src="../assets/images/user1.png" alt>
          <div class="mui-media-body">用户管理</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-search"></span> -->
          <img src="../assets/images/system.png" alt>
          <div class="mui-media-body">系统配置</div>
        </a>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-more"></span> -->
          <img src="../assets/images/more.png" alt>
          <div class="mui-media-body">更多</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imageList: [
        { id: "1", url: require("../assets/images/image1.jpeg") },
        { id: "2", url: require("../assets/images/image2.jpg") },
        { id: "3", url: require("../assets/images/image3.jpg") }
      ]
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      // this.$http.get("http://vue.studyit.io/api/getlunbo").then(
      //   result => {
      //     console.log(result.body);
      //   }
      // )
    }
  }
};
</script>

<style lang="less">
.mint-swipe {
  height: 200px;
  // .mint-swipe-item {
  //   &:nth-child(1) {
  //     background:url(../assets/images/image1.jpeg);
  //   }
  //   &:nth-child(2) {
  //     background: url(../assets/images/image2.jpg);
  //   }
  //   &:nth-child(3) {
  //     background: url(../assets/images/image3.jpg);
  //   }
  // }
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
