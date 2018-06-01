<template>
  <div>
    <div style="background-image: url('../../static/img/Background-3.jpg');height: auto!important;background-size: cover;background-attachment: fixed">
      <!--<img src="../../static/img/Background-3.jpg" :style="{height:h1}" style="width: 100%;position: fixed;" ></img>-->
      <div style="width:100%;margin: 0 auto;">
        <div>
          <div class="col s4"></div>
          <div class="col s4" style="display: inline-block;text-align: center;margin-top:100px">
            <!--<h5 style="background-color: lightgoldenrodyellow;color:black;padding: 13px 16px;">支持我们</h5>-->
          </div>
          <div class="col s4"></div>
          <div class="row" style="margin-top:2%;">
            <div class="col s12" style="background-color:#67beb0;filter: opacity(0.8);">
              <p style="color: white;font-size:40px;margin-left:70px;margin-right:70px;margin-top:80px">
              {{$t("Individual.support1")}}
              </p>
              <p style="color: white;font-size:22px;margin-left:70px;margin-right:70px;margin-top:80px">
                {{$t("Individual.support2")}}
              </p>
              <p style="color: white;font-size:22px;margin-left:70px;margin-right:20px">
                {{$t("Individual.support3")}}
              </p>
            </div>
          </div>

          <p>
          <div class="row" style="margin-left:72px;margin-top:50px">

          <div class="col s12 m6 l3" style="margin-top:5%">
                  <!--<img src="../../static/img/pku1.jpg" style="height:150px">-->
            <img src="../../static/img/zhifubao.jpg" style="height:400px">
          </div>
          <div class="col s12 m6 l3" style="margin-top:5%">
            <!--<img src="../../static/img/pku1.jpg" style="height:150px">-->
            <img src="../../static/img/weixinzhifu.png" style="height:400px">
          </div>

          </div>
          </p>
        </div>

        <p style="color:transparent;font-size: x-large;margin-top:15%;margin-bottom: 0;padding-bottom: 3%"><b>————</b></p>
      </div>
    </div>
    <!--<div style="width: 80%;margin: auto">
      <span style="font-size: small;color: gray">{{$t("AboutUs.footer1")}}</span>
      <span style="font-size: small;color: gray;margin-left: 3%">{{$t("AboutUs.contact")}}</span>
      <span class="foot" style="margin-left: 10px">Attending us</span>
      <span class="foot" style="margin-left: 10px">Follow us</span>
      <span class="foot">About us</span>
      <hr style="clear: both"/>
      <div style="vertical-align: bottom;overflow: hidden">
        <p style="font-size: small;color: gray;float: left;margin-bottom: 0"><span>Copyright &copy; 2018 SOSCON</span><span> {{$t("AboutUs.footer")}}</span></p>
        &lt;!&ndash;<i class="iconfont icon" style="margin-left: 10px">&#xe8d0;</i>
        <i class="iconfont icon" style="margin-left: 10px">&#xe660;</i>
        <i class="iconfont icon">&#xe8db;</i>&ndash;&gt;
        <a href="https://t.me/soscon"><img class="icon icon2" src="../../static/img/Flickr-B.png" alt="Flickr"/></a>
        <a><img class="icon icon2" src="../../static/img/Youtube-B.png" alt="Youtube"/></a>
        <a href="https://t.me/soscon"><img class="icon" src="../../static/img/Telegram-B.png" alt="Telegram"/></a>
      </div>
    </div>-->
    <div style="width: 100%;height: 135px;background-color:#282828;">
      <div style="width:80%;height:100%;left:0;right:0;margin:0 auto;padding-top: 3vw">
        <!--<span style="height:100%;display:inline-block;vertical-align:middle;margin-left: 8%"></span>-->
        <a :href="['https://openingsource.org']"><img class="iconstyleA" src="../../static/img/openingsource.svg"/></a>
        <a :href="['https://t.me/soscon']"><img class="iconstyle" src="../../static/img/Telegram.svg"/></a>
        <a :href="['https://www.youtube.com/channel/UCpqv0HaFB0rAK-9G_V9yOOA']"><img class="iconstyle"
                                                                                     src="../../static/img/Youtube.svg"/></a>
        <a><img class="iconstyle" src="../../static/img/Facebook.svg"/></a>
        <a :href="['https://plus.google.com/u/0/111192234176729671386']"><img class="iconstyle"
                                                                              src="../../static/img/Google+.svg"/></a>
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
    name: "community"
  }
</script>

<style scoped>

</style>
