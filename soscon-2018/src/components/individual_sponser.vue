<template>
  <div>
    <div style="background-image: url('../../static/img/Background-3.jpg');height: auto!important;background-size: cover;background-attachment: fixed">
      <!--<img src="../../static/img/Background-3.jpg" :style="{height:h1}" style="width: 100%;position: fixed;" ></img>-->
      <div style="width:100%;margin: 0 auto;">
        <div id="modal4" class="modal">
          <div class="modal-content">
            <img src="../../static/img/qrcode.png"/>
            <span style="vertical-align: top;font-size: xx-large;font-weight: 700">soscon2018</span>
          </div>
        </div>
        <div>
          <div class="col s4"></div>
          <div class="col s4" style="display: inline-block;text-align: center;margin-top:100px">
            <!--<h5 style="background-color: lightgoldenrodyellow;color:black;padding: 13px 16px;">支持我们</h5>-->
          </div>
          <div class="col s4"></div>
          <div class="row" style="margin-top:2%;">
            <div class="col s12" style="background-color:#67beb0;filter: opacity(0.8);">
              <p style="color: white;font-size:40px;margin-left:70px;margin-right:70px;margin-top:80px;line-height: 100%">
              {{$t("Individual.support1")}}
              </p>
              <p style="color: white;font-size:22px;margin-left:70px;margin-right:70px;margin-top:80px">
                {{$t("Individual.support2")}}
              </p>
              <p style="color: white;font-size:22px;margin-left:70px;margin-right:70px">
                {{$t("Individual.support3")}}
              </p>
            </div>
          </div>

          <!--<p>
          <div class="row" style="margin-left:72px;margin-top:50px">

          <div class="col s12 m6 l3" style="margin-top:5%">
                  &lt;!&ndash;<img src="../../static/img/pku1.jpg" style="height:150px">&ndash;&gt;
            <img src="../../static/img/zhifubao.jpg" style="height:400px">
          </div>
          <div class="col s12 m6 l3" style="margin-top:5%">
            &lt;!&ndash;<img src="../../static/img/pku1.jpg" style="height:150px">&ndash;&gt;
            <img src="../../static/img/weixinzhifu.png" style="height:400px">
          </div>

          </div>
          </p>-->
          <div style="display: flex;flex-wrap: wrap;justify-content:center">
            <img src="../../static/img/zhifubao.jpg" class="support">
            <img src="../../static/img/weixinzhifu.png" style="height:400px;">
          </div>
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
    <bottom-bar></bottom-bar>
  </div>

</template>

<script>
  import BottomBar from "./bottomBar";
  export default {
    name: "community",
    components: {BottomBar},
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
