<template>
  <div>
  <div style="width: 100%;min-height: 135px;height:auto;background-color:#282828">
    <div style="width:80%;height:100%;left:0;right:0;margin:0 auto;padding-top: 3vw">
      <!--<span style="height:100%;display:inline-block;vertical-align:middle;margin-left: 8%"></span>-->
      <a :href="['https://openingsource.org']"><img class="iconstyleA" src="../../static/img/openingsource.svg"/></a>
      <a :href="['https://t.me/soscon']"><img class="iconstyle" src="../../static/img/Telegram.svg"/></a>
      <a :href="['https://www.youtube.com/channel/UCpqv0HaFB0rAK-9G_V9yOOA']"><img class="iconstyle" src="../../static/img/Youtube.svg"/></a>
      <a :href="['https://www.facebook.com/SOSCON.top/']"><img class="iconstyle" src="../../static/img/Facebook.svg"/></a>
      <a :href="['https://plus.google.com/u/0/111192234176729671386']"><img class="iconstyle" src="../../static/img/Google+.svg"/></a>
      <a :href="['https://twitter.com/soscon2018']"><img class="iconstyle" src="../../static/img/Twitter.svg"/></a>
      <a :href="['http://weibo.com/u/6557396839']"><img class="iconstyle" src="../../static/img/Weibo.svg"/></a>
      <a style="cursor: pointer" @click="open4"><img class="iconstyle" src="../../static/img/WeChat.svg"/></a>
      <a :href="['http://qm.qq.com/cgi-bin/qm/qr?k=yF0lluoacOOlRVTX_jFmpivy1ToU15u7']"><img class="iconstyle" src="../../static/img/QQ.svg"/></a>
      <!--<img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Youtube-W.png"/>
      <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Flickr-W.png"/>-->
      <span class="bottomwords">{{$t("About.bottom1")}}。  Copyright© SOSCON {{$t("About.foot")}} 2018</span>
      <span class="bottomwords">{{$t("About.commun1")}}{{$t("About.commun2")}}&emsp;{{$t("About.school1")}}{{$t("About.school2")}}</span>
      <div style="clear: both"></div>
    </div>
  </div>
    <div id="modal4" class="modal">
      <div class="modal-content">
        <img src="../../static/img/qrcode.png"/>
        <span style="vertical-align: top;font-size: xx-large;font-weight: 700">soscon2018</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bottomBar",
      methods:{
        open4(){
          $('.modal').modal();
          $('#modal4').modal('open');
        },
      }
    }
</script>

<style scoped>
</style>
