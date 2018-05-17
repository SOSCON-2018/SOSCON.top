<template>
  <div><!--display:flex;-->
    <div class="row NewsBox">
      <router-link to="/news/climbing"><img class="col s12 m4 l8 imgstyle" src="../../static/img/climb.png"/>
      </router-link>
      <router-link to="/news/climbing">
        <div class="col s12 m4 l2 ImgWordStyle">
          <h5 class="ImgContent">SOSCON开发天团<br/>勇登高峰</h5>
          <div class="line"></div>
          <div style="height: 200px;overflow: auto"></div>
          <div class="lineBigger"></div>
          <p class="contentfont">2018年5月12日<br/>来自西学家</p>
        </div>
      </router-link>
    </div>
    <div class="row newsbelow">
      <div class="col s12 m6 l3 newsbelowboxstyle">
        <p class="newsbelowcontentfont">SOSCON前端工程师不慎遗失了他的头</p>
        <div style="height: 20vh;overflow: auto;"></div>
        <div class="line1"></div>
        <p class="newsbelowfontbelow">2018年5月13日<br/>来自头都没了的前端</p>
      </div><!-- style="margin-right:5%;background-color: #00b8d4;margin-top: 5%;height: 45vh;position: relative;"-->
      <div class="col s12 m6 l3 newsbelowboxstyle">
        <p class="newsbelowcontentfont">SOSCON后台工程师顺利找回了他的头</p>
        <div style="height: 20vh;overflow: auto;"></div>
        <div class="line1"></div>
        <p class="newsbelowfontbelow">2018年5月14日<br/>来自懒得反抗的总召</p>
      </div>
      <div class="col s12 m6 l3 newsbelowboxstyle">
        <p class="newsbelowcontentfont">然后他的头不行被总召给打爆了</p>
        <div style="height: 20vh;overflow: auto;"></div>
        <div class="line1"></div>
        <p class="newsbelowfontbelow">2018年5月15日<br/>来自模考咸鱼大师</p>
      </div>
    </div>
    <div style="width: 100%;height: 135px;background-color:#282828;">
      <div style="width:80%;height:100%;left:0;right:0;margin:0 auto;padding-top: 3vw">
        <!--<span style="height:100%;display:inline-block;vertical-align:middle;margin-left: 8%"></span>-->
        <a :href="['https://openingsource.org']"><img style="vertical-align:middle;margin-left: 1%;height:35px;" src="../../static/img/openingsource-W(1).png"/></a>
        <a :href="['https://t.me/soscon']"><img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Telegram-W.png"/></a>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Youtube-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Flickr-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Youtube-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Flickr-W.png"/>
        <span style="color: #5f5f5f;float: right">{{$t("About.bottom1")}}。  Copyright© SOSCON {{$t("About.foot")}} 2018</span>
        <div style="clear: both"></div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "news"
  }
</script>

<style scoped>

</style>
