<template>
  <div class="new">
    <div class="stars-content">
      <div class="stars-item" >
        <img :src="star.image" alt="">
        <span>{{star.nickName}}</span>
        <p>{{star.picks}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['star'],
  data() {
    return {};
  },
  computed:{

  },
  methods:{
  }
};
</script>
<style lang="scss">

</style>
