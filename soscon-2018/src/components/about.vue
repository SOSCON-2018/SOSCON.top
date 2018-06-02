<template>
  <div>
    <div style="width: 80%;margin: 0 auto;">
      <div>
        <div style="display: inline-block;text-align: center;margin-top: 135px">
          <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >SOSCON<span style="color:#66ccff;">18</span></p>-->
          <h4 style="background-color: black;color: white;padding: 20px 20px;">SOSCON<span
            style="color: #66ccff">18</span></h4>
        </div>
        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 600;font-size: large">{{$t("About.soscon")}}</p>
        <p>
          {{$t("About.sosconp1")}}
          <br>
          {{$t("About.sosconp2")}}
        </p>
        <p style="font-weight: 600;font-size: large">{{$t("About.hoping")}}</p>
        <p>
          {{$t("About.hopingp1")}}
          <br>
          {{$t("About.hopingp2")}}
          <br>
          {{$t("About.hopingp3")}}
        </p>

      </div>
      <div>
        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 700;font-size: large;display: inline;margin-right: 20px">{{$t("About.time")}}<span
          style="font-weight: normal">{{$t("About.time1")}}</span></p>
        <p style="font-weight: 700;font-size: large;display: inline">{{$t("About.place")}}<span
          style="font-weight: normal">{{$t("About.place1")}}</span></p>
      </div>
      <div style="margin-top: 2%;margin-bottom: 50px">
        <iframe v-bind:width="mapWidth" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=106.45307779312135%2C29.56162451639962%2C106.48067235946656%2C29.574968703557974&amp;layer=mapnik&amp;marker=29.56830242911509%2C106.46686649270123"
                style="border: 1px solid black"></iframe>
        <br/>
        <small><a
          href="https://www.openstreetmap.org/?mlat=29.5683&amp;mlon=106.4669#map=16/29.5683/106.4669&amp;layers=N">查看更大的地图</a>
        </small>
      </div>
      <!--<div style="overflow: hidden;">
        <span style="font-size: small;color: gray">{{$t("AboutUs.footer1")}}</span>
        <span style="font-size: small;color: gray;margin-left: 3%">{{$t("AboutUs.contact")}}</span>
        <span class="foot" style="margin-left: 10px">Attending us</span>
        <span class="foot" style="margin-left: 10px">Follow us</span>
        <span class="foot">About us</span>
        <hr style="clear: both"/>
        <div style="vertical-align: bottom;overflow: hidden">
          <p style="font-size: small;color: gray;float: left;margin-bottom: 0"><span>Copyright &copy; 2018 SOSCON</span><span> {{$t("AboutUs.footer")}}</span>
          </p>
          &lt;!&ndash;<i class="iconfont icon" style="margin-left: 10px">&#xe8d0;</i>
          <i class="iconfont icon" style="margin-left: 10px">&#xe660;</i>
          <i class="iconfont icon">&#xe8db;</i>&ndash;&gt;
          <a href="https://t.me/soscon"><img class="icon icon2" src="../../static/img/Flickr-B.png" alt="Flickr"/></a>
          <a><img class="icon icon2" src="../../static/img/Youtube-B.png" alt="Youtube"/></a>
          <a href="https://t.me/soscon"><img class="icon" src="../../static/img/Telegram-B.png" alt="Telegram"/></a>
        </div>
      </div>-->
    </div>
    <div style="width: 100%;height: 135px;background-color:#282828;margin-top: 3%">
      <div style="width:80%;height:100%;left:0;right:0;margin:0 auto;padding-top: 3vw">
        <!--<span style="height:100%;display:inline-block;vertical-align:middle;margin-left: 8%"></span>-->
        <a :href="['https://openingsource.org']"><img class="iconstyleA" src="../../static/img/openingsource.svg"/></a>
        <a :href="['https://t.me/soscon']"><img class="iconstyle" src="../../static/img/Telegram.svg"/></a>
        <a :href="['https://www.youtube.com/channel/UCpqv0HaFB0rAK-9G_V9yOOA']"><img class="iconstyle" src="../../static/img/Youtube.svg"/></a>
        <a><img class="iconstyle" src="../../static/img/Facebook.svg"/></a>
        <a :href="['https://plus.google.com/u/0/111192234176729671386']"><img class="iconstyle" src="../../static/img/Google+.svg"/></a>
        <a :href="['https://twitter.com/soscon2018']"><img class="iconstyle" src="../../static/img/Twitter.svg"/></a>
        <a :href="['http://weibo.com/u/6557396839']"><img class="iconstyle" src="../../static/img/Weibo.svg"/></a>
        <a><img class="iconstyle" src="../../static/img/WeChat.svg"/></a>
        <a><img class="iconstyle" src="../../static/img/QQ.svg"/></a>
        <!--<img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Youtube-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Flickr-W.png"/>-->
        <span class="bottomwords">{{$t("About.bottom1")}}。  Copyright© SOSCON {{$t("About.foot")}} 2018</span>
        <div style="clear: both"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        aboutUsWidth: '100px'
      }
    },
    computed: {
      w_screen: function () {
        return document.documentElement.clientWidth
      },
      mapWidth: function () {
        return this.w_screen / 1.26 + 'px'
      }

    },

  }


</script>

<style scoped>
  body {
    font-size: 1rem;
  }
</style>
