<template>
  <div>
    <div style="width: 80%;margin: 0 auto;">
      <div>
        <div style="display: inline-block;text-align: center;margin-top: 135px">
          <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >SOSCON<span style="color:#66ccff;">18</span></p>-->
        <h4 style="background-color: black;color: white;padding: 20px 20px;">SOSCON<span style="color: #66ccff">18</span></h4>
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
        <p style="font-weight: 700;font-size: large;display: inline;margin-right: 20px">{{$t("About.time")}}<span style="font-weight: normal">{{$t("About.time1")}}</span></p>
        <p style="font-weight: 700;font-size: large;display: inline">{{$t("About.place")}}<span style="font-weight: normal">{{$t("About.place1")}}</span></p>
      </div>
      <div style="margin-top: 2%;margin-bottom: 50px" >
        <iframe v-bind:width="mapWidth" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=106.45307779312135%2C29.56162451639962%2C106.48067235946656%2C29.574968703557974&amp;layer=mapnik&amp;marker=29.56830242911509%2C106.46686649270123" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=29.5683&amp;mlon=106.4669#map=16/29.5683/106.4669&amp;layers=N">查看更大的地图</a></small>
      </div>
    </div>
    <div style="width: 80%; left: 0;right: 0;margin: 50px auto 10px auto;overflow: hidden;">
      <span style="font-size: small;color: gray">{{$t("About.bottom1")}}</span>
      <span style="font-size: small;color: gray;margin-left: 3%">{{$t("About.bottom2")}}</span>
      <span class="foot" style="margin-left: 10px">Attending us</span>
      <span class="foot" style="margin-left: 10px">Follow us</span>
      <span class="foot">About us</span>
      <hr style="clear: both"/>
      <span style="font-size: small;color: gray;">Copyright &copy; 2018 SOSCON{{$t("About.foot")}}</span><!--学生开源年会-->
      <!--<i class="iconfont icon" style="margin-left: 10px">&#xe8d0;</i>
      <i class="iconfont icon" style="margin-left: 10px">&#xe660;</i>
      <i class="iconfont icon">&#xe8db;</i>-->
      <img class="icon icon2" src="../../static/img/Flickr-B.png" alt="Flickr"/>
      <img class="icon icon2" src="../../static/img/Youtube-B.png" alt="Youtube"/>
      <img class="icon" src="../../static/img/Telegram-B.png" alt="Telegram"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "about",
        data(){
          return {
            center: {lng: 0, lat: 0},
            zoom: 3,
            aboutUsWidth: '100px'
          }
        },
      computed:{
          w_screen:function(){
            return document.documentElement.clientWidth
          },
          mapWidth:function () {
              return this.w_screen / 1.26 + 'px'
            }

      },

    }


</script>

<style scoped>
  body{
    font-size: 1rem;
  }
</style>
