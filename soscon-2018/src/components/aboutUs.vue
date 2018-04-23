<template>
  <div class="about1">
    <div class="about">
      <div>
        <h4>{{$t("AboutUs.about")}}</h4>
        <p>————</p>
        <p>{{$t("AboutUs.about1")}}</p>
      </div>
      <div>
        <h4>{{$t("AboutUs.contact")}}</h4>
        <p>————</p>
        <p>{{$t("AboutUs.contact1")}}<br/>Email: lbb@openingsource.org</p>
      </div>
      <div>
        <h4>{{$t("AboutUs.attend")}}</h4>
        <p>————</p>
        <p>Offical Website SOSCON.top<br/>Offical Email soscon@openingsource.org<br/>Telegram Group https://t.me/soscon</p>
      </div>
      <hr/>
      <p style="font-size: smaller;color: gray">{{$t("AboutUs.foot")}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "aboutUs"
    }
</script>

<style scoped>
    h4{
      font-size: 1.5rem;
    }
</style>
