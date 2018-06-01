<template>
  <div class="container">
    <TopSwiper :tops='tops'></TopSwiper>
    <Card :key="book.id" v-for="book in books" :book='book'></Card>
    <p class="text-footer" v-if="!more">没有更多数据</p>
  </div>
</template>
<script>
import { get } from "@/util";
import Card from "@/components/Card";
import TopSwiper from "@/components/TopSwiper";

export default {
  components: {
    Card,TopSwiper
  },
  data() {
    return {
      books: [],
      page: 0,
      more: true,
      tops:[]
    };
  },
  methods: {
    async getList(init) {
      if (init) {
        this.page = 0;
      }

      wx.showNavigationBarLoading();
      const book = await get("/weapp/booklist", { page: this.page });
      if (book.list.length < 6 && this.page > 0) {
        this.more = false;
      }
      if (init) {
        this.books = book.list;
        wx.stopPullDownRefresh();
      } else {
        // 下拉刷新，不能覆盖。需要累加
        this.books = this.books.concat(book.list);
      }
      wx.hideNavigationBarLoading();
    },
    async getTop() {
      const tops = await get("/weapp/top");
      this.tops = tops.list;
    }
  },
  onPullDownRefresh() {
    this.getList(true);
    this.getTop();
  },
  onReachBottom() {
    if (!this.more) {
      //没有更多了
      return false;
    }
    this.page = this.page + 1;
    this.getList();
  },
  mounted() {
    this.getList(true);
    this.getTop();
  }
};
</script>
<style>
</style>
