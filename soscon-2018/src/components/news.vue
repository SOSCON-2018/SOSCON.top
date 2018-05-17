<template>
  <div><!--display:flex;-->
    <div class="row NewsBox">
      <router-link to="/news/climbing"><img class="col s12 m4 l8 imgstyle" src="../../static/img/climb.png"/>
      </router-link>
      <router-link to="/news/climbing">
        <div class="col s12 m4 l2 ImgWordStyle">
          <h5 class="ImgContent">SOSCON开发天团<br/>勇登高峰</h5>
          <div class="line"></div>
          <div style="height: 200px"></div>
          <div class="lineBigger"></div>
          <p class="contentfont">2018年5月12日<br/>来自西学家</p>
        </div>
      </router-link>
    </div>
    <!--<div class="row newsbelow">
      <div class="col s12 m6 l3" style="margin-right: 5%;background-color: #00b8d4;margin-top: 5%">
        <p class="newsbelowcontentfont">SOSCON前端工程师不慎遗失了他的头</p>
        <div style="height: 100px"></div>
        <div class="line"></div>
        <p class="newsbelowfontbelow">2018年5月13日<br/>来自头都没了的前端</p>
      </div>
      <div class="col s12 m6 l3" style="margin-right: 5%;background-color: #00b8d4;margin-top: 5%">
        <p class="newsbelowcontentfont" style="">SOSCON前端工程师不慎遗失了他的头</p>
        <div style="height: 100px"></div>
        <div class="line"></div>
        <p class="newsbelowfontbelow">2018年5月13日<br/>来自头都没了的前端</p>
      </div>
      <div class="col s12 m6 l3" style="margin-right: 5%;background-color: #00b8d4;margin-top: 5%">
        <p class="newsbelowcontentfont">SOSCON前端工程师不慎遗失了他的头</p>
        <div style="height: 100px"></div>
        <div class="line"></div>
        <p class="newsbelowfontbelow">2018年5月13日<br/>来自头都没了的前端</p>
      </div>
    </div>-->
    <div class="row newsbelow">
      <div class="col s12 m6 l3" style="margin-right:5%;background-color: #00b8d4;margin-top: 5%">
        <p class="newsbelowcontentfont">SOSCON前端工程师不慎遗失了他的头</p>
        <div style="height: 100px"></div>
        <div class="line"></div>
        <p class="newsbelowfontbelow">2018年5月13日<br/>来自头都没了的前端</p>
      </div>
      <div class="col s12 m6 l3" style="margin-right:5%;background-color: #00b8d4;margin-top: 5%">
        <p class="newsbelowcontentfont">SOSCON后台工程师顺利找回了他的头</p>
        <div style="height: 100px"></div>
        <div class="line"></div>
        <p class="newsbelowfontbelow">2018年5月14日<br/>来自懒得反抗的总召</p>
      </div>
      <div class="col s12 m6 l3" style="background-color: #00b8d4;margin-top: 5%">
        <p class="newsbelowcontentfont">然后他的头不行被总召给打爆了</p>
        <div style="height: 100px"></div>
        <div class="line"></div>
        <p class="newsbelowfontbelow">2018年5月15日<br/>来自模考咸鱼大师</p>
      </div>
    </div>
    <!--<div style="width: 80%;margin: 0 auto;overflow: hidden;margin-top: 5%!important;">
      <span style="font-size: small;color: gray">畅想未来，拥抱开源</span>
      <span class="foot" style="margin-left: 10px">Attending us</span>
      <span class="foot" style="margin-left: 10px">Follow us</span>
      <span class="foot">About us</span>
      <hr style="clear: both"/>
      <div style="vertical-align: bottom;overflow: hidden">
        <p style="font-size: small;color: gray;float: left;margin-bottom: 0">Copyright &copy; 2018 SOSCON 学生开源年会</p>
        &lt;!&ndash;<i class="iconfont icon" style="margin-left: 10px">&#xe8d0;</i>
        <i class="iconfont icon" style="margin-left: 10px">&#xe660;</i>
        <i class="iconfont icon">&#xe8db;</i>&ndash;&gt;
        <img class="icon icon2" src="../../static/img/Flickr-B.png" alt="Flickr"/>
        <img class="icon icon2" src="../../static/img/Youtube-B.png" alt="Youtube"/>
        <img class="icon" src="../../static/img/Telegram-B.png" alt="Telegram"/>
      </div>
    </div>-->
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
