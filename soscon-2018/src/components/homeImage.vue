<template>
    <div :class="title">
      <a v-if="lang ==='zhCHS'" class="homeButton1" href="#about"></a>
      <a v-else-if="lang==='en'" class="enHomeButton1" href="#about"></a>
      <a v-else class="twHomeButton1" href="#about"></a>


      <router-link v-if="lang ==='zhCHS'" to="/apply" class="homeButton2"></router-link>
      <router-link v-else-if="lang==='en'" to="/apply" class="enHomeButton2"></router-link>
      <router-link v-else to="/apply" class="twHomeButton2"></router-link>
    </div>
</template>

<script>
    export default {
        name: "homeImage",
        computed:{
          lang:function () {
            return localStorage.lang
          },
          title:function () {
            if(this.lang ==='zhCHS') {
              return "homeTitle"
            }
            else if(this.lang==='en')
              return "enHomeTitle"
            else
              return "twHomeTitle"
          }
        },
    }
</script>

<style scoped>

</style>
