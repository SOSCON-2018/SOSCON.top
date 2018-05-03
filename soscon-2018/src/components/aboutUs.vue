<template>
  <!--<div class="about1">
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
  </div>-->
  <div style="background-image: url('../../static/img/Background-3.jpg');height: auto!important;background-size: cover;background-attachment: fixed">
    <div class="workers">
      <div style="display: inline-block;text-align: center;margin-top: 7%">
        <h4 style="background-color: black;color: white;padding: 20px 20px;margin: 0;">{{$t("AboutUs.about")}}</h4>
      </div>
      <p class="group" style="margin-top: 40px">————</p>
      <p class="group">{{$t("AboutUs.about1")}}</p><!--总召-->
      <figure class="block">
        <img src="../../static/img/headPortrait.jpg" class="img"/>
        <figcaption class="person">刘煜民</figcaption>
      </figure>
      <p class="group">{{$t("AboutUs.about5")}}</p>
      <div>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">刘昊天</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">周新林</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">董学竹</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">赵启铭</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">陈盛玮</figcaption>
        </figure>
      </div>
      <!--<p class="group">行政组</p>
      <div>
        <figure class="block" style="margin: 0;margin-right: -30px!important;">
          <img src="../../static/img/headPortrait.jpg" style="width: 50%;height: 50%"/>
          <figcaption class="person" style="width:50%;text-align: center">abcd</figcaption>
        </figure>
        <figure class="block" style="margin: 0;margin-right: -30px!important;">
          <img src="../../static/img/headPortrait.jpg" style="width: 50%;height: 50%"/>
          <figcaption class="person" style="width:50%;text-align: center">efgh</figcaption>
        </figure>
      </div>-->
      <p class="group">{{$t("AboutUs.about2")}}</p>
      <div>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">蒋昊辰</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">阿廿</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">项子易</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">屈艺欣</figcaption>
        </figure>
      </div>
      <p class="group">{{$t("AboutUs.about3")}}</p>
      <div>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">叶伟豪</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">吴迪峰</figcaption>
        </figure>
      </div>
      <p class="group">{{$t("AboutUs.about4")}}</p>
      <div>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">邵明琦</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">安雨洁</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">田淙宇</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">贾峥</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">曹煜泽</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">李小琦</figcaption>
        </figure>
        <figure class="block">
          <img src="../../static/img/headPortrait.jpg" class="img"/>
          <figcaption class="person">彭启标</figcaption>
        </figure>
      </div>
      <div style="display: inline-block;text-align: center;margin-top: 7%">
        <h4 style="background-color: black;color: white;padding: 20px 20px;margin: 0;">{{$t("AboutUs.contactWay")}}</h4>
      </div>
      <div>
        <p class="contact"><span>{{$t("AboutUs.email")}}</span><span>:</span><br/><span>soscon@openingsource.org</span></p>
      </div>
      <div>
        <p class="contact"><span>{{$t("AboutUs.email1")}}</span><span>:刘煜民</span><br/><span>lbb@openingsource.org</span></p>
      </div>
      <div>
        <p class="contact"><span>{{$t("AboutUs.email2")}}</span><span>:刘昊天</span><br/><span>volhtt@gmail.com</span></p>
      </div>
      <div>
        <p class="contact"><span>{{$t("AboutUs.email3")}}</span><span>:蒋昊辰</span><br/><span>jhc@openingsource.org</span></p>
      </div>
      <div>
        <p class="contact"><span>{{$t("AboutUs.email4")}}</span><span>:叶伟豪</span><br/>1348067084@qq.com<span></span></p>
      </div>
      <div>
        <p class="contact"><span>{{$t("AboutUs.email5")}}</span><span>:邵明琦</span><br/><span>qichen0906@gmail.com</span></p>
      </div>
      <div></div>
    </div>
    <div style="background-color: white;margin-bottom: -3% ">
      <div style="width:80%; left: 0;right: 0;margin: 0 auto 10px auto;overflow: hidden;">
        <p>   </p>
        <span style="font-size: small;color: gray">{{$t("AboutUs.footer1")}}</span>
        <span style="font-size: small;color: gray;margin-left: 3%">{{$t("AboutUs.contact")}}</span>
        <br>
        <div>
          <span class="foot" style="margin-left: 10px">Attending us</span>
          <span class="foot" style="margin-left: 10px">Follow us</span>
          <span class="foot">About us</span>
        </div>
        <hr style="clear: both"/>
        <div style="vertical-align: bottom;overflow: hidden">
<<<<<<< HEAD
          <p style="font-size: small;color: gray;float: left;margin-bottom: 0"><span>Copyright &copy; 2018 SOSCON</span><span> {{$t("AboutUs.footer")}}</span></p>
          <!--<i class="iconfont icon" style="margin-left: 10px">&#xe8d0;</i>
          <i class="iconfont icon" style="margin-left: 10px">&#xe660;</i>
          <i class="iconfont icon">&#xe8db;</i>-->
          <a href="https://t.me/soscon"><img class="icon icon2" src="../../static/img/Flickr-B.png" alt="Flickr"/></a>
          <a><img class="icon icon2" src="../../static/img/Youtube-B.png" alt="Youtube"/></a>
          <a href="https://t.me/soscon"><img class="icon" src="../../static/img/Telegram-B.png" alt="Telegram"/></a>
=======
          <p style="font-size: small;color: gray;float: left;margin-bottom: 0">Copyright &copy; 2018 SOSCON {{$t("AboutUs.footer")}}</p>
          <div>
            <a><img class="icon icon2" src="../../static/img/Flickr-B.png" alt="Flickr"/></a>
            <a><img class="icon icon2" src="../../static/img/Youtube-B.png" alt="Youtube"/></a>
            <a href="https://t.me/soscon"><img class="icon" src="../../static/img/Telegram-B.png" alt="Telegram"/></a>
          </div>
>>>>>>> 549f13efb6bb17c7ad1c57ea906a54abec730ca2
        </div>
      </div>
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
