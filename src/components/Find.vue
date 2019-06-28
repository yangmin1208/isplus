<template>
  <div>
    <!--下拉刷新容器-->
    <!-- <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
    <div class="mui-scroll">-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="news in showList" :key="news.uniquekey">
          <a class="mui-navigate-right" :href="news.url">
            <img class="mui-media-object mui-pull-left" :src="news.thumbnail_pic_s">
            <div class="mui-media-body">
              <div class="author">{{news.author_name}}</div>
              <p class="mui-ellipsis">{{news.title}}</p>
            </div>
          </a>
        </li>
      </ul>
    </van-pull-refresh>
  </div>
  <!-- </div>
  </div>-->
</template>


<script>
export default {
  data() {
    return {
      newsList: [],
      count: 0,
      isLoading: false,
      showList: []
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.axios
        .get("/api/index", {
          params: {
            type: "top",
            key: "173519276aab7633df8a01e1c2f3c04f"
          }
        })
        .then(response => {
          if (response.status == 200) {
            console.log(response.data.result.data);
            if (response.data.result!=null) {
              this.newsList = response.data.result.data;
              this.showList  = this.newsList.slice(0,10);
            }
          } else {
            console.log("调api接口失败");
          }
        });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("加载成功");
        this.isLoading = false;
        this.count+=5;
        this.showList  = this.newsList.slice(0,10+this.count);
      }, 500);
    }
  }
};
// mui.init({
//   pullRefresh: {
//     container: "#pullrefresh",
//     down: {
//       callback: pulldownRefresh
//     },
//     up: {
//       contentrefresh: "正在加载...",
//       callback: pullupRefresh
//     }
//   }
// });
/**
 * 下拉刷新具体业务实现
 */
// function pulldownRefresh() {
//   setTimeout(function() {
//     var table = document.body.querySelector(".mui-table-view");
//     var cells = document.body.querySelectorAll(".mui-table-view-cell");
//     for (var i = cells.length, len = i + 3; i < len; i++) {
//       var li = document.createElement("li");
//       li.className = "mui-table-view-cell";
//       li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + "</a>";
//       //下拉刷新，新纪录插到最前面；
//       table.insertBefore(li, table.firstChild);
//     }
//     mui("#pullrefresh")
//       .pullRefresh()
//       .endPulldownToRefresh(); //refresh completed
//     mui.toast("为你推荐了5篇文章");
//   }, 1500);
// }
// var count = 0;
// /**
//  * 上拉加载具体业务实现
//  */
// function pullupRefresh() {
//   setTimeout(function() {
//     mui("#pullrefresh")
//       .pullRefresh()
//       .endPullupToRefresh(++count > 2); //参数为true代表没有更多数据了。
//     var table = document.body.querySelector(".mui-table-view");
//     var cells = document.body.querySelectorAll(".mui-table-view-cell");
//     for (var i = cells.length, len = i + 5; i < len; i++) {
//       var li = document.createElement("li");
//       li.className = "mui-table-view-cell";
//       li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + "</a>";
//       table.appendChild(li);
//     }
//   }, 1500);
// }
</script>

<style lang="less">
.author {
  text-align: left;
}
.mui-scroll-wrapper {
  top: 50px;
}
</style>
