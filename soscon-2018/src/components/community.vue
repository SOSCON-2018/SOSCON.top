<template>
  <div>
    <div style="background-image: url('../../static/img/Background-3.jpg');height: auto!important;background-size: cover;background-attachment: fixed">
      <!--<img src="../../static/img/Background-3.jpg" :style="{height:h1}" style="width: 100%;position: fixed;" ></img>-->
      <div style="width: 80%;margin: 0 auto;">
        <div>
          <div id="modal4" class="modal">
            <div class="modal-content">
              <img src="../../static/img/qrcode.png"/>
              <span style="vertical-align: top;font-size: xx-large;font-weight: 700">soscon2018</span>
            </div>
          </div>
          <div>
            <div style="display: inline-block;text-align: center;margin-top: 80px">
              <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >SOSCON<span style="color:#66ccff;">18</span></p>-->
              <h5 style="background-color: black;color: white;padding: 13px 16px;">{{$t("Community.community2")}}</h5>
            </div>
            <p style="font-weight: 700;font-size: x-large;margin-top: 0%;margin-bottom: -2%"><b>————</b></p>
            <div class="row" style="margin-left:-1%">
              <div class="col s12 m6 l3"style="margin-top: 3%">
                <div class="card" style="width: 225px;height: 256px;">
                  <div class="card-image" style="height: 220px;" >
                    <img src="../../static/img/openingsource.svg" style="position: relative;top:40%;">
                  </div>
                  <div class="card-action"style="background-color:#282828;" >
                    <a href="https://openingsource.org" style="color: white;margin: auto">开源工场</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style="display: inline-block;text-align: center;margin-top: 80px">
              <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >SOSCON<span style="color:#66ccff;">18</span></p>-->
              <h5 style="background-color: black;color: white;padding: 13px 16px;">{{$t("Community.school")}}</h5>
            </div>
            <p style="font-weight: 700;font-size: x-large;margin-top: 0%;margin-bottom: -2%"><b>————</b></p>
            <div class="row" style="margin-left:-1%">
              <div class="col s12 m6 l3"style="margin-top: 3%">
                <div class="card" style="width: 225px;height: 256px;">
                  <div class="card-image" style="height: 220px;" >
                    <img src="../../static/img/cqu.jpg" style="top: 10px" >
                  </div>
                  <div class="card-action"style="background-color:#282828;" >
                    <a href="http://www.cse.cqu.edu.cn/" style="color: white;margin: auto;font-size: 0.9rem">重庆大学大数据与软件学院</a>
                  </div>
                </div>
              </div>
              <div class="col s12 m6 l3"style="margin-top: 3%">
                <div class="card" style="width: 225px;height: 256px;">
                  <div class="card-image" style="height: 220px;" >
                    <img src="../../static/img/Continue.jpg" style="position: relative;">
                  </div>
                  <div class="card-action"style="background-color:#282828;" >
                    <a  style="color: white;margin: auto">重庆大学CONTINUE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div style="display: inline-block;text-align: center;margin-top: 80px">
            <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >SOSCON<span style="color:#66ccff;">18</span></p>-->
            <h5 style="background-color: black;color: white;padding: 13px 16px;">{{$t("Community.community")}}</h5>
          </div>
          <p style="font-weight: 700;font-size: x-large;margin-top: 0%;margin-bottom: -2%"><b>————</b></p>

          <p>
          <div class="row" style="margin-left:-1%">

            <div class="col s12 m6 l3"style="margin-top: 3%">
              <div class="card" style="width: 225px;height: 256px;">
                <div class="card-image" style="height: 220px;" >
                  <img src="../../static/img/tuna.jpg">
                </div>
                <div class="card-action"style="background-color:#282828;" >
                  <a href="https://tuna.moe/" style="color: white;margin: auto">Tuna</a>
                </div>
              </div>
            </div>

            <div class="col s12 m6 l3" style="margin-top: 3%">
              <div class="card" style="width: 225px;height: 256px;">
                <div class="card-image" style="height: 220px;" >
                  <img src="../../static/img/opencas.png" style="position: relative;top:30%;">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="https://www.opencas.org/" style="color: white">opencas</a>
                </div>
              </div>
            </div>

            <div class="col s12 m6 l3" style="margin-top: 3%">
              <div class="card" style="width: 225px;height: 256px;">
                <div class="card-image" style="height: 220px;" >
                  <img src="../../static/img/zkdlug.png" >
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="https://lug.ustc.edu.cn/wiki/" style="color: white">中科大LUG</a>
                </div>
              </div>
            </div>

            <div class="col s12 m6 l3" style="margin-top: 3%">
              <div class="card" style="width: 225px;height: 256px;">
                <div class="card-image" style="height: 220px;" >
                  <img src="../../static/img/Continue.jpg" >
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="#" style="color: white">重庆大学Continue</a>
                </div>
              </div>
            </div>

            <div class="col s12 m6 l3" style="margin-top: 3%">
              <div class="card" style="width: 225px;height: 256px;">
                <div class="card-image" style="height: 220px;" >
                  <img src="../../static/img/xinanxiehui.png" style="width: 180px;position: relative;left:18px;top:8px">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="https://swuosa.org/" style="color: white">西南大学开源协会</a>
                </div>
              </div>
            </div>

          <div class="col s12 m6 l3" style="margin-top: 3%">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;" >
                <img src="../../static/img/cquptlug.jpg" >
              </div>
              <div class="card-action" style="background-color:#282828">
                <a href="#" style="color: white">重邮开源协会</a>
              </div>
            </div>
          </div>

          <!--<div class="col s12 m6 l3" style="margin-top: 3%">
            <div class="card" style="width: 225px;height: 256px;">
              <div class="card-image" style="height: 220px;" >
                <img src="../../static/img/taiwandaxue.png"style="position: relative;top:70px" >
              </div>
              <div class="card-action" style="background-color:#282828">
                <a href="https://ntuosc.org/" style="color: white">臺灣大學開源社</a>
              </div>
            </div>
          </div>-->

          </div>
          </p>
        </div>
        <div>
          <div style="display: inline-block;text-align: center;margin-top: 80px">
            <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >SOSCON<span style="color:#66ccff;">18</span></p>-->
            <h5 style="background-color: black;color: white;padding: 13px 16px;">{{$t("Community.community3")}}</h5>
          </div>
          <p style="font-weight: 700;font-size: x-large;margin-top: 0%;margin-bottom: -5%"><b>————</b></p>
          <div class="row" style="margin-left:-1%">
            <div class="col s12 m4 l2"style="margin-top:7%" >
              <div class="card" style="width: 170px;height: 170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/ls.png">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="https://linuxstory.org/" style="color: white;text-transform: none">LinuxStory</a>
                </div>
              </div>
            </div>
            <div class="col s12 m4 l2"style="margin-top:7%" >
              <div class="card" style="width: 170px;height: 170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/oschina.jpg" style="position: relative;top: 20%">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="https://www.oschina.net/" style="color: white">开源中国</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="display: inline-block;text-align: center;margin-top: 80px">
            <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >SOSCON<span style="color:#66ccff;">18</span></p>-->
            <h5 style="background-color: black;color: white;padding: 13px 16px;">{{$t("Community.community1")}}</h5>
          </div>
          <p style="font-weight: 700;font-size: x-large;margin-top: 0%;margin-bottom: -5%"><b>————</b></p>

          <p>
          <div class="row" style="margin-left:-1%">
            <!--<div class="col s12 m4 l2"style="margin-top:7%" >
              <div class="card" style="width: 170px;height: 170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/ls.png">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="https://linuxstory.org/" style="color: white">Linuxstory</a>
                </div>
              </div>
            </div>-->

            <div class="col s12 m4 l2" style="margin-top: 7%!important">
              <div class="card" style="width: 170px;height:170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/pku1.jpg" style="height:150px">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="http://www.pkuosa.org/" style="color: white">北大开源协会</a>
                </div>
              </div>
            </div>

            <div class="col s12 m4 l2" style="margin-top:7%">
              <div class="card" style="width: 170px;height:170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/xdosc.svg" style="height:150px">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="https://linux.xidian.edu.cn/" style="color: white">西电开源社区</a>
                </div>
              </div>
            </div>


            <div class="col s12 m4 l2" style="margin-top:7%">
              <div class="card" style="width: 170px;height:170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/isdc.png" style="height:150px">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="https://www.scuisdc.org/" style="color: white;margin-left: -3%;margin-right: -15%;">四川大学信网协会</a>
                </div>
              </div>
            </div>

            <div class="col s12 m4 l2" style="margin-top: 7%!important">
              <div class="card" style="width: 170px;height:170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/xiyoulinux.png" style="height:150px">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="https://www.xiyoulinux.org/#" style="color: white;margin-left: -10%;margin-right: -15%;;text-transform: none">西邮Linux兴趣小组</a>
                </div>
              </div>
            </div>


            <div class="col s12 m4 l2" style="margin-top: 7%!important">
              <div class="card" style="width: 170px;height:170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/xalg.jpg"style="height:150px;width: 150px;position:relative;left: 5%">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="http://xautlinux.net/blog/" style="color: white;margin-left: -3%;margin-right: -15%;">西安理工大学计协</a>
                </div>
              </div>
            </div>

            <div class="col s12 m4 l2" style="margin-top:7%">
              <div class="card" style="width: 170px;height:170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/cqsf.png" style="position: relative;top:35%;left:-12%;width: 220px">
                </div>
                <div class="card-action"style="background-color:#282828">
                  <a href="#" style="color:white; margin-left: -5%;margin-right: -15%;">重师开源软件协会</a>
                </div>
              </div>
            </div>

            <div class="col s12 m4 l2" style="margin-top:7%">
              <div class="card" style="width: 170px;height:170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/logo-locezed-green.png"style="width: 150px;height: 150px;align-items: center;position: relative;left: 11px;">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="http://scaulug.org/home/" style="color: white;margin-left: -15%;margin-right: -15%;">华南农业大学LUG</a>
                </div>
              </div>
            </div>


          <div class="col s12 m4 l2" style="margin-top:7%">
              <div class="card" style="width: 170px;height:170px;">
                <div class="card-image" style="height: 150px;" >
                  <img src="../../static/img/tjdx.png" style="height:150px">
                </div>
                <div class="card-action" style="background-color:#282828">
                  <a href="#" style="color: white;margin-left: -5%;margin-right: -15%;">同济大学开源社区</a>
                </div>
              </div>
            </div>

          <div class="col s12 m4 l2" style="margin-top:7%">
            <div class="card" style="width: 170px;height:170px;">
              <div class="card-image" style="height: 150px;" >
                <img src="../../static/img/chongqingjiaotong.svg" style="height:150px">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a href="#"style="color: white;margin-left: -35%;margin-right: 2%;position: relative;left:25px;font-size: 13px">重庆交通大学人工智能协会</a>
              </div>
            </div>
          </div>

          <div class="col s12 m4 l2" style="margin-top:7%">
            <div class="card" style="width: 170px;height:170px;">
              <div class="card-image" style="height: 150px;" >
                <img src="../../static/img/geekpie.jpg" style="height:150px">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a href="https://geekpie.org/" style="color: white;margin-left: -5%;margin-right: -15%;;text-transform: none">Geekpie</a>
              </div>
            </div>
          </div>

          <div class="col s12 m4 l2" style="margin-top:7%">
            <div class="card" style="width: 170px;height:170px;">
              <div class="card-image" style="height: 150px;" >

                <img src="../../static/img/beiyou.svg" style="height:150px">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a href="http://byrio.org/" style="color: white;margin-left: -35%;margin-right: 2%;position: relative;left:22px;">北邮互联网与开源社区</a>
              </div>
            </div>
          </div>

          <div class="col s12 m4 l2" style="margin-top:7%">
            <div class="card" style="width: 170px;height:170px;">
              <div class="card-image" style="height: 150px;" >

                <img src="../../static/img/shanghailug.jpg" style="height: 140px;width: 140px;position: relative;left:13px;top:10px;">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a href="https://osc.shu.edu.cn/" style="color: white;margin-left: -5%;margin-right: -15%;">上海大学开源协会</a>
              </div>
            </div>
          </div>

          <div class="col s12 m4 l2" style="margin-top:7%">
            <div class="card" style="width: 170px;height:170px;">
              <div class="card-image" style="height: 150px;" >

                <img src="../../static/img/dianzi.jpg">
              </div>
              <div class="card-action" style="background-color:#282828">
                <a href="http://cnss.studio/" style="color: white;margin-left: -5%;margin-right: -15%;">电子科技大学cnss</a>
              </div>
            </div>
          </div>

          </div>
        </div>


        <p style="font-weight: 700;font-size: x-large;margin-top: 20%;margin-bottom: 0;padding-bottom: 3%"><b>————</b></p>
      </div>
    </div>
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
