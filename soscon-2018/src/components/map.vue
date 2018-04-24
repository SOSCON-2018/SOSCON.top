<template>

</template>

<script>
  export default {
    name : 'baiduMap',
    data () {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3
      }
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 106.475186
        this.center.lat = 29.571111
        this.zoom = 15
      }
    }
  }
</script>

<style scoped>


</style>
