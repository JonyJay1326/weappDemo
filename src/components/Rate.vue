<template>
  <div class="rate">
    <span>☆☆☆☆☆</span>
    <div class="hollow" :style="style">★★★★★</div>
  </div>
</template>
<script>
export default {
  props:['value'],
  data() {
    return {};
  },
  computed:{
    style(){
      return `width:${this.value*10}%`
    }
  }
};
</script>
<style lang="scss">
.rate {
  margin-left: 4px;
  display: inline;
  font-size: 16px;
  position: relative;
  .hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
  }

}
</style>
