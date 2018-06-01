<template>
  <a :href="detailUrl">
    <div class="book-card">
      <div class="thumb">
        <image :src="book.image" class="img" mode="aspectFit" alt="" />
      </div>
      <div class="detail">
        <div class="row">
          <div class="right text-color rate-item">
            {{book.rate}}
            <Rate :value="book.rate"></Rate>
          </div>
          <div class="left text-color">
            {{book.title}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            浏览量:{{book.count}}
          </div>
          <div class="left">
            {{book.author}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            {{book.user_info.nickName}}
          </div>
          <div class="left">
            {{book.publisher}}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
import Rate from "@/components/Rate";
export default {
  components: {
    Rate
  },
  props: ["book"],
  computed: {
    detailUrl() {
      return "/pages/detail/main?id=" + this.book.id;
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.book-card {
  font-size: 14px;
  padding: 5px 10px 5px 5px;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 5px;
  .thumb {
    width: 90px;
    height: 90px;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    .img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail {
    font-size:12px;
    margin-left: 100px;
    .row {
      line-height: 20px;
      margin-bottom: 5px;
    }
  }
  .rate-item.right{
    height:20px;
    line-height: 20px;
  }
  .right {
    float: right;
    overflow: hidden;
  }
  .left {
    margin-right: 80px;
    overflow: hidden;

  }
  .text-color {
    color: #ea5149;
  }
}
</style>
