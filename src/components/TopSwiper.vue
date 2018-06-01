<template>
  <div class="swiper">
    <swiper
      :indicator-dots='true'
      indicator-color='#dfdfdf'
      indicator-active-color='#EA5A49'
      :autoplay='true'
      :interval='6000'
      :duration='1000'
      :circular='true'>
      <div v-for="(top,key) in imgUrls" :key="key">
        <swiper-item>
          <img
            @click="toDeatil(item.id)"
            :key="item.id"
            mode='aspectFit'
            v-for="item in top"
            :src="item.image"
            class="slide-image"
            />
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>
<script>
import { chunk } from "@/util";
export default {
  props: ["tops"],
  data() {
    return {

    };
  },
  methods:{
    toDeatil(id){
      wx.navigateTo({
        url: '/pages/detail/main?id=' + id
      })
    }
  },
  computed: {
    imgUrls() {
      let res = this.tops
      return chunk(res, 3);
    }
  }
};
</script>
<style lang="scss" scoped>
.swiper{
  margin-top:5px;
  .slide-image{
    width:33%;
    height:250rpx;
  }
}
</style>
