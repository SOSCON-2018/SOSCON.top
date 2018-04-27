<template>
  <div class="about1">
  <img src="../../static/img/pic6.jpg" :style="{height:h_aboutUs}" style="width: 100%;position: fixed" ></img>
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
        <p>{{$t("AboutUs.contact5")}}<br/>Email: volhtt@gmail.com</p>
        <p>{{$t("AboutUs.contact2")}}<br/>Email: 1348067084@qq.com</p>
        <p>{{$t("AboutUs.contact3")}}<br/>Email: jhc@openingsource.org</p>
        <p>{{$t("AboutUs.contact4")}}<br/>Email: qichen0906@gmail.com</p>
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
    let h_screen = document.documentElement.clientHeight
    export default {
        name: "aboutUs",
        computed: {
          h_aboutUs() {
            return h_screen + 'px'
          },
        }
    }
</script>

<style scoped>
    h4{
      font-size: 1.5rem;
    }
</style>
