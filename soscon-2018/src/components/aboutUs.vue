<template>
  <div style="background-image: url('../../static/img/Background-3.jpg');height: auto!important;background-size: cover;background-attachment: fixed">
    <div class="workers">
      <!--<div style="display: inline-block;text-align: center;margin-top: 7%">
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
      <div></div>-->
      <ul class="tabs tabs-fixed-width tab-demo z-depth-1" style="width:100%;border-radius:20px;margin-top: 13%;">
        <li class="tab"><a class="active" href="#test1">{{$t("AboutUs.about1")}}</a></li>
        <li class="tab"><a href="#test2">{{$t("AboutUs.about5")}}</a></li>
        <li class="tab"><a href="#test3">{{$t("AboutUs.about2")}}</a></li>
        <li class="tab"><a href="#test4">{{$t("AboutUs.about3")}}</a></li>
        <li class="tab"><a href="#test5">{{$t("AboutUs.about4")}}</a></li>
        <li class="tab"><a href="#test7">{{$t("AboutUs.about7")}}</a></li>
        <li class="tab"><a href="#test8">{{$t("AboutUs.about8")}}</a></li>
        <li class="tab"><a href="#test6">{{$t("AboutUs.about6")}}</a></li>
      </ul>
      <div id="modal1" class="modal">
        <div class="modal-content">
          <img src="../../static/img/laughter.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: xx-large;font-weight: 700">{{$t("AboutUs.about1")}}</p>
          <p style="vertical-align: top;font-size: xx-large;font-weight: 500">刘煜民</p>
          <p style="vertical-align: top;font-size: xx-large;font-weight: 500">Email: lbb@openingsource.org</p>
        </div>
      </div>
      <div id="modal2" class="modal">
        <div class="modal-content">
          <img src="../../static/img/haotian.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about5")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">刘昊天</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: volhtt@gmail.com</p>
        </div>
      </div>
      <div id="modal3" class="modal">
        <div class="modal-content">
          <img src="../../static/img/zhouxin.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about5")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">周新林</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: zxl120844854@gmail.com</p>
        </div>
      </div>
      <div id="modal5" class="modal">
        <div class="modal-content">
          <img src="../../static/img/head.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about5")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">董学竹</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: Brand_dxz@163.com</p>
        </div>
      </div>
      <div id="modal4" class="modal">
        <div class="modal-content">
          <img src="../../static/img/qrcode.png"/>
          <span style="vertical-align: top;font-size: xx-large;font-weight: 700">soscon2018</span>
        </div>
      </div>
      <div id="modal6" class="modal">
        <div class="modal-content">
          <img src="../../static/img/head.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about5")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">陈盛玮</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: dcfvzx@126.com
          </p>
        </div>
      </div>
      <div id="modal7" class="modal">
        <div class="modal-content">
          <img src="../../static/img/head.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about5")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">赵启铭</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: cmlfexponential@gmail.com</p>
        </div>
      </div>
      <div id="modal8" class="modal">
        <div class="modal-content">
          <img src="../../static/img/hc.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about2")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">蒋昊辰</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: jhc@openingsource.org</p>
        </div>
      </div>
      <div id="modal9" class="modal">
        <div class="modal-content">
          <img src="../../static/img/head.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about2")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">王心雁</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: 1026817845@qq.com</p>
        </div>
      </div>
      <div id="modal10" class="modal">
        <div class="modal-content">
          <img src="../../static/img/xiang.png" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about2")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">项子易</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: 1195417663@qq.com </p>
        </div>
      </div>
      <div id="modal11" class="modal">
        <div class="modal-content">
          <img src="../../static/img/head.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about2")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">屈艺欣</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: 945677877@qq.com</p>
        </div>
      </div>
      <div id="modal12" class="modal">
        <div class="modal-content">
          <img src="../../static/img/ywh1.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about3")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">叶伟豪</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: g17767078958@gmail.com</p>
        </div>
      </div>
      <div id="modal13" class="modal" style="width: 80%!important;">
        <div class="modal-content">
          <img src="../../static/img/head.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about3")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">吴迪峰</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: miniwa_meow_tsumiki@gmail.com</p>
        </div>
      </div>
      <div id="modal14" class="modal">
        <div class="modal-content">
          <img src="../../static/img/head.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about4")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">邵明琦</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: qichen0906@gmail.com</p>
        </div>
      </div>
      <div id="modal15" class="modal">
        <div class="modal-content">
          <img src="../../static/img/head.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about4")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">安雨洁</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: ayj@openingsource.org </p>
        </div>
      </div>
      <div id="modal16" class="modal">
        <div class="modal-content">
          <img src="../../static/img/head.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about4")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">田淙宇</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: glodxy@gmail.com </p>
        </div>
      </div>
      <div id="modal17" class="modal">
        <div class="modal-content">
          <img src="../../static/img/jia.png" class="headpic" align="right" hspace="5" vspace="5">
          <p style="vertical-align: top;font-size: x-large;font-weight: 700">{{$t("AboutUs.about4")}}</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">贾峥</p>
          <p style="vertical-align: top;font-size: x-large;font-weight: 500">Email: bleachhddh@gmail.com</p>
        </div>
      </div>
      <div id="test1" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <div class="row" style="margin-left:-1%">
          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open1">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/realcoder.jpg">
              </div>
              <div class="card-action" style="background-color:#282828;">
                <a style="color: white;margin: auto">{{$t("AboutUs.about1")}} 刘煜民</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="test2" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <div class="row" style="margin-left:-1%">
          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open2">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/haotian.jpg">
              </div>
              <div class="card-action" style="background-color:#282828;">
                <a style="color: white;margin: auto">{{$t("AboutUs.about5")}} 刘昊天</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open3">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/zhouxin11.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about5")}} 周新林</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open5">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/head.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about5")}} 董学竹</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open6">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/head.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about5")}} 陈盛玮</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open7">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/head.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about5")}} 赵启铭</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="test3" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <div class="row" style="margin-left:-1%">

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open8">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/hc.jpg">
              </div>
              <div class="card-action" style="background-color:#282828;">
                <a style="color: white;margin: auto">{{$t("AboutUs.about2")}} 蒋昊辰</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open9">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/head.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about2")}} 王心雁</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open10">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/xiang.png">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about2")}} 项子易</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open11">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/head.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about2")}} 屈艺欣</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div id="test4" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <div class="row" style="margin-left:-1%">

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open12">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/ywh1.jpg" >
              </div>
              <div class="card-action" style="background-color:#282828;">
                <a style="color: white;margin: auto">{{$t("AboutUs.about3")}} 叶伟豪</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open13">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/head.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about3")}} 吴迪峰</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="test5" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <div class="row" style="margin-left:-1%">

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open14">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/head.jpg">
              </div>
              <div class="card-action" style="background-color:#282828;">
                <a style="color: white;margin: auto">{{$t("AboutUs.about4")}} 邵明琦</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open15">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/head.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about4")}} 安雨洁</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open16">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/head.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about4")}} 田淙宇</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l3" style="margin-top: 3%" @click="open17">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;">
                <img src="../../static/img/jia1.png">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a style="color: white">{{$t("AboutUs.about4")}} 贾峥</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div id="test6" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
      <p style="font-size: xx-large;font-weight: 700">Coming soon</p>
      </div>
      <div id="test7" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <p style="font-size: xx-large;font-weight: 700">Coming soon</p>
      </div>
      <div id="test8" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <p style="font-size: xx-large;font-weight: 700">Coming soon</p>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import BottomBar from "./bottomBar";
  let h_screen = document.documentElement.clientHeight;
  export default {
    name: "aboutUs",
    components: {BottomBar},
    computed: {
      h_aboutUs() {
        return h_screen + 'px'
      },
    },
    mounted: function () {
      $('.tabs').tabs();
    },
    methods: {
      open1() {
        $('.modal').modal();
        $('#modal1').modal('open');
      },
      open2() {
        $('.modal').modal();
        $('#modal2').modal('open');
      },
      open4() {
        $('.modal').modal();
        $('#modal4').modal('open');
      },
      open3() {
        $('.modal').modal();
        $('#modal3').modal('open');
      },
      open5() {
        $('.modal').modal();
        $('#modal5').modal('open');
      },
      open6() {
        $('.modal').modal();
        $('#modal6').modal('open');
      },
      open7() {
        $('.modal').modal();
        $('#modal7').modal('open');
      },
      open8() {
        $('.modal').modal();
        $('#modal8').modal('open');
      },
      open9() {
        $('.modal').modal();
        $('#modal9').modal('open');
      },
      open10() {
        $('.modal').modal();
        $('#modal10').modal('open');
      },
      open11() {
        $('.modal').modal();
        $('#modal11').modal('open');
      },
      open12() {
        $('.modal').modal();
        $('#modal12').modal('open');
      },
      open13() {
        $('.modal').modal();
        $('#modal13').modal('open');
      },
      open14() {
        $('.modal').modal();
        $('#modal14').modal('open');
      },
      open15() {
        $('.modal').modal();
        $('#modal15').modal('open');
      },
      open16() {
        $('.modal').modal();
        $('#modal16').modal('open');
      },
      open17() {
        $('.modal').modal();
        $('#modal17').modal('open');
      },
    },
    mounted:function(){
      $('.tabs').tabs();
    }
  }
</script>

<style scoped>
  h4 {
    font-size: 1.5rem;
  }
</style>
