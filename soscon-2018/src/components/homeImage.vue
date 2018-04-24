<template>
    <div :class="title">
      <a v-if="isnotEN" class="homeButton1" href="#about"></a>
      <a v-else class="enHomeButton1" href="#about"></a>

      <router-link v-if="isnotEN" to="/apply" class="homeButton2"></router-link>
      <router-link v-else to="/apply" class="enHomeButton2"></router-link>
    </div>
</template>

<script>
    export default {
        name: "homeImage",
        computed:{
          isnotEN:function () {
            return localStorage.lang!=='en'
          },
          title:function () {
            if(this.isnotEN) {
              return "homeTitle"
            }
            return "enHomeTitle"
          }
        },
    }
</script>

<style scoped>

</style>
