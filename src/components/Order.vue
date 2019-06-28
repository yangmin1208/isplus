<template>
  <div>
    <div class="mui-card" v-for="item in list" :key="item._id">
      <div class="mui-card-header mui-card-media">
        <img :src="item.pic" alt="图片" style="width:100%;height:100%;">
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>{{item.year}}-{{item.month}}-{{item.day}}</p>
          <p style="color: #333;">{{item.title}}</p>
          <p style="color: #333;">{{item.des}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">分享</a>
        <a class="mui-card-link">了解更多</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      month: "",
      day: ""
    };
  },
  created() {
    this.getCurrentDate();
    this.getDataList();
  },
  methods: {
    getCurrentDate(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      this.month = month;
      this.day = day;
      console.log(date)
    },
    getDataList() {
      this.axios
        .get("/toh", {
          // responseType: "json",
          // transformResponse: [
          //   function(data) {
          //     console.log(data)
          //     // let reader = new FileReader();
          //     // reader.readAsText(data, "GBK");
          //     // reader.onload = function(e) {
          //     //   console.log(reader);
          //     // };
          //     return data;
          //   }
          // ],
          params: {
            inCharset: "utf-8",
            outCharset: "utf-8",
            v: "1.0",
            month: this.month,
            day: this.day,
            key: "10fce8407add5d9df6c263ae408eb025"
          }
        })
        .then(response => {
          if (response.status == 200) {
            console.log(response);
            this.list = response.data.result;
          }
        });
    }
  }
};
</script>

<style lang="less">
</style>
