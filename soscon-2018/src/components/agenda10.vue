<template>
  <div class="Background">
    <div class="workers">
      <ul class="tabs tabs-fixed-width tab-demo z-depth-1" style="width:100%;border-radius:20px;margin-top: 13%">
        <li class="tab"><a class="active" href="#test1">{{$t("Agenda.main")}}</a></li>
        <li class="tab"><a href="#test2">{{$t("Agenda.other1")}}</a></li>
        <li class="tab"><a href="#test3">{{$t("Agenda.other2")}}</a></li>
        <li class="tab"><a href="#test0">{{$t("Agenda.other4")}}</a></li>
      </ul>
      <div id="modal3" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda10.speach1")}}</h4>
          <p>{{$t("Agenda10.speach2")}}</p>
        </div>
      </div>
      <div id="modal4" class="modal">
        <div class="modal-content">
          <img src="../../static/img/qrcode.png"/>
          <span style="vertical-align: top;font-size: xx-large;font-weight: 700">soscon2018</span>
        </div>
      </div>
      <div id="modal5" class="modal">
        <div class="modal-content">
          <img src="../../static/img/speaker4.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach5")}}</h4>
          <p>{{$t("Agenda10.speach6")}}</p>
          <p>{{$t("Agenda10.speakers1")}}</p>
          <p>{{$t("Agenda10.speach7")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal6" class="modal">
        <div class="modal-content">
          <img src="../../static/img/speaker1.png" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach8")}}</h4>
          <p>{{$t("Agenda10.speach30")}}</p>
          <p>{{$t("Agenda10.speakers2")}}</p>
          <p>{{$t("Agenda10.speach9")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal7" class="modal">
        <div class="modal-content">
          <img src="../../static/img/speaker5.png" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach12")}}</h4>
          <p>{{$t("Agenda10.speach32")}}</p>
          <p>{{$t("Agenda10.speakers11")}}</p>
          <p>{{$t("Agenda10.speach13")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal8" class="modal">
        <div class="modal-content">
          <img src="../../static/img/speaker7.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach10")}}</h4>
          <p>{{$t("Agenda10.speach11")}}</p>
          <p>{{$t("Agenda10.speakers3")}}</p>
          <p>{{$t("Agenda10.speach31")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal9" class="modal">
        <div class="modal-content">
          <img src="../../static/img/speaker2.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach14")}}</h4>
          <p>{{$t("Agenda10.speach33")}}</p>
          <p>{{$t("Agenda10.speakers4")}}</p>
          <p>{{$t("Agenda10.speach15")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal10" class="modal">
        <div class="modal-content">
          <img src="../../static/img/headPortrait.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach16")}}</h4>
          <p>{{$t("Agenda10.speakers9")}}</p>
          <p>{{$t("Agenda10.speakers10")}}</p>
          <p>{{$t("Agenda10.speach17")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal12" class="modal">
        <div class="modal-content">
          <img src="../../static/img/speaker3.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach18")}}</h4>
          <p>{{$t("Agenda10.speach19")}}</p>
          <p>{{$t("Agenda10.speakers5")}}</p>
          <p>{{$t("Agenda10.speach20")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal13" class="modal">
        <div class="modal-content">
          <img src="../../static/img/speaker6.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach21")}}</h4>
          <p>{{$t("Agenda10.speach34")}}</p>
          <p>{{$t("Agenda10.speakers6")}}</p>
          <p>{{$t("Agenda10.speach22")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal14" class="modal">
        <div class="modal-content">
          <img src="../../static/img/headPortrait.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach23")}}</h4>
          <p>{{$t("Agenda10.speach24")}}</p>
          <p>{{$t("Agenda10.speakers7")}}</p>
          <p>{{$t("Agenda10.speakers8")}}</p>
          <p>{{$t("Agenda10.speach25")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal15" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda10.process27")}}</h4>
          <p>{{$t("Agenda10.speach50")}}</p>
        </div>
      </div>
      <div id="modal17" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda10.process16")}}</h4>
          <p>{{$t("Agenda10.speach29")}}</p>
        </div>
      </div>
      <div id="modal18" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda10.speach35")}}</h4>
          <p>{{$t("Agenda10.speach36")}}</p>
          <br/>
          <span>{{$t("Agenda10.speach37")}}</span><br/>
          <span>{{$t("Agenda10.speach38")}}</span><br/>
          <span>{{$t("Agenda10.speach39")}}</span><br/>
          <span>{{$t("Agenda10.speach40")}}</span><br/>
          <span>{{$t("Agenda10.speach41")}}</span>
          <br/>
          <br/>
          <span>{{$t("Agenda10.speach42")}}</span><br/>
          <span>{{$t("Agenda10.speach43")}}</span><br/>
          <span>{{$t("Agenda10.speach44")}}</span><br/>
          <span>{{$t("Agenda10.speach45")}}</span><br/>
          <span>{{$t("Agenda10.speach46")}}</span><br/>
          <span>{{$t("Agenda10.speach47")}}</span><br/>
          <span>{{$t("Agenda10.speach48")}}</span><br/>
          <br/>
          <span>{{$t("Agenda10.workshop1")}}</span><br/>
          <span>{{$t("Agenda10.workshop2")}}</span><br/>
          <span>{{$t("Agenda10.workshop3")}}</span>
          <p>{{$t("Agenda10.workshop4")}}</p>
          <p>{{$t("Agenda10.workshop5")}}</p>
        </div>
      </div>
      <div id="modal19" class="modal">
        <div class="modal-content">
          <img src="../../static/img/8.speaker8.jpeg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach51")}}</h4>
          <p>{{$t("Agenda10.speach52")}}</p>
          <p>{{$t("Agenda10.speach58")}}</p>
          <p>{{$t("Agenda10.speach53")}}</p>
          <p>{{$t("Agenda10.speach54")}}</p>
          <p>{{$t("Agenda10.speach55")}}</p>
          <p>{{$t("Agenda10.speach56")}}</p>
          <p>{{$t("Agenda10.speach57")}}</p>
        </div>
      </div>
      <div id="modal20" class="modal">
        <div class="modal-content">
          <!--<img src="../../static/img/8.speaker8.jpeg" class="headpic" align="right" hspace="5" vspace="5">-->
          <p>10:10——10:50</p>
          <span>{{$t("Agenda10.b1")}}</span>
          <p>11:20——12:00</p>
          <span>{{$t("Agenda10.b2")}}</span>
          <p>13:10——14:10</p>
          <p>{{$t("Agenda10.b3")}}</p>
        </div>
      </div>
      <div id="modal21" class="modal">
        <div class="modal-content">
          <img src="../../static/img/headPortrait.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach59")}}</h4>
          <p>{{$t("Agenda10.speach60")}}</p>
          <p>{{$t("Agenda10.speach61")}}</p>
          <p>{{$t("Agenda10.speach62")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="modal22" class="modal">
        <div class="modal-content">
          <img src="../../static/img/speaker8.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach63")}}</h4>
          <p>{{$t("Agenda10.speach64")}}</p>
          <p>{{$t("Agenda10.speach65")}}</p>
          <p>{{$t("Agenda10.speach66")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
        </div>
      </div>
      <div id="test1" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <a class="waves-effect waves-light modal-trigger processstyle">
          <div class="AgendaProcess colorA">
            <span class="time">7:40-8:20</span>
            <span class="process">{{$t("Agenda10.process1")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorA">
            <span class="time">8:20-8:30</span>
            <span class="process">{{$t("Agenda10.process2")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorB">
            <span class="time">8:30-9:10</span>
            <span class="process">{{$t("Agenda10.process4")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorC">
            <span class="time">9:10-9:15</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open12">
          <div class="AgendaProcess colorD">
            <span class="time">9:15-9:45</span>
            <span class="process">{{$t("Agenda10.process12")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open9">
          <div class="AgendaProcess colorE">
            <span class="time">9:45-10:05</span>
            <p class="process">{{$t("Agenda10.process8")}}</p>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open14">
          <div class="AgendaProcess colorA">
            <span class="time">10:05-11:25</span>
            <span class="process">{{$t("Agenda10.process24")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorB">
            <span class="time">10:25-10:30</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open8">
          <div class="AgendaProcess colorC">
            <span class="time">10:30-11:00</span>
            <span class="process">{{$t("Agenda10.process6")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open21">
          <div class="AgendaProcess colorC">
            <span class="time">11:00-11:30</span>
            <span class="process">{{$t("Agenda10.process28")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open7">
          <div class="AgendaProcess colorD">
            <span class="time">11:30-12:00</span>
            <span class="process">{{$t("Agenda10.process22")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorE">
            <span class="time">12:00-13:10</span>
            <span class="process">{{$t("Agenda10.process7")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open19">
          <div class="AgendaProcess colorA">
            <span class="time">13:10-13:30</span>
            <span class="process">{{$t("Agenda10.process26")}}</span>
          </div>
        </a>
        <!--<a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorB">
            <span class="time">14:10-14:20</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>-->
        <a class="waves-effect waves-light modal-trigger processes" @click="open10">
          <div class="AgendaProcess colorB">
            <span class="time">13:30-14:00</span>
            <span class="process">{{$t("Agenda10.process23")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorC">
            <span class="time">14:00-14:05</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open5">
          <div class="AgendaProcess colorD">
            <span class="time">14:05-14:35</span>
            <span class="process">{{$t("Agenda10.process9")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open6">
          <div class="AgendaProcess colorE">
            <span class="time">14:35-15:15</span>
            <span class="process">{{$t("Agenda10.process21")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorA">
            <span class="time">15:15-15:35</span>
            <span class="process">{{$t("Agenda10.process13")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open22">
          <div class="AgendaProcess colorA">
            <span class="time">15:35-16:00</span>
            <span class="process">{{$t("Agenda10.process29")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open13">
          <div class="AgendaProcess colorB">
            <span class="time">16:00-16:30</span>
            <span class="process">{{$t("Agenda10.process14")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open15">
          <div class="AgendaProcess colorC">
            <span class="time">16:30-16:40</span>
            <span class="process">{{$t("Agenda10.process27")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open17">
          <div class="AgendaProcess colorD">
            <span class="time">16:40-17:40</span>
            <span class="process">{{$t("Agenda10.process16")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorE">
            <span class="time">17:40-17:55</span>
            <span class="process">{{$t("Agenda10.process17")}}</span>
          </div>
        </a>
      </div>
      <div id="test2" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <a class="waves-effect waves-light modal-trigger processstyle" @click="open18">
          <div class="AgendaProcess colorA">
            <span class="time">13:00-17:30</span>
            <span class="process">{{$t("Agenda10.process19")}}</span>
          </div>
        </a>
      </div>
      <div id="test3" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <a class="waves-effect waves-light modal-trigger processstyle" @click="open20">
          <div class="AgendaProcess colorA">
            <span class="time">10:10-14:10</span>
            <span class="process">{{$t("Agenda10.speach49")}}</span>
          </div>
        </a>
      </div>
      <div id="test0" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <div class="colorA" style="filter: opacity(.8);font-weight: 700;margin-top: 0;padding-left: 2%">
          <h5 style="padding-top: 2%;margin-top: 0;">{{$t("Agenda10.act1")}}</h5>
          <p><!--{{$t("Agenda10.act2")}}<br/>
            {<br/>
            {{$t("Agenda10.act3")}}<br/>
            {{$t("Agenda10.act4")}}<br/>
            }<br/>
            <br/>-->
            {{$t("Agenda10.act5")}}<br/>
            <br/>
            {{$t("Agenda10.act6")}}<br/>
            <br/>
            <br/>
            <!--{{$t("Agenda10.act8")}}<br/>
            {<br/>
            {{$t("Agenda10.act9")}}<br/>
            {{$t("Agenda10.act10")}}<br/>
            {{$t("Agenda10.act11")}}<br/>
            {{$t("Agenda10.act12")}}<br/>
            {{$t("Agenda10.act13")}}<br/>
            <br/>
            {{$t("Agenda10.act14")}}<br/>
            {{$t("Agenda10.act15")}}<br/>
            }<br/>-->
          </p></div>
      </div>
    </div>
    <div style="width: 100%;height: 135px;background-color:#282828;margin-top: 3%">
      <div style="width:80%;height:100%;left:0;right:0;margin:0 auto;padding-top: 3vw">
        <a :href="['https://openingsource.org']"><img class="iconstyleA" src="../../static/img/openingsource.svg"/></a>
        <a :href="['https://t.me/soscon']"><img class="iconstyle" src="../../static/img/Telegram.svg"/></a>
        <a :href="['https://www.youtube.com/channel/UCpqv0HaFB0rAK-9G_V9yOOA']"><img class="iconstyle" src="../../static/img/Youtube.svg"/></a>
        <a :href="['https://www.facebook.com/SOSCON.top/']"><img class="iconstyle" src="../../static/img/Facebook.svg"/></a>
        <a :href="['https://plus.google.com/u/0/111192234176729671386']"><img class="iconstyle" src="../../static/img/Google+.svg"/></a>
        <a :href="['https://twitter.com/soscon2018']"><img class="iconstyle" src="../../static/img/Twitter.svg"/></a>
        <a :href="['http://weibo.com/u/6557396839']"><img class="iconstyle" src="../../static/img/Weibo.svg"/></a>
        <a style="cursor: pointer" @click="open4"><img class="iconstyle" src="../../static/img/WeChat.svg"/></a>
        <a :href="['http://qm.qq.com/cgi-bin/qm/qr?k=yF0lluoacOOlRVTX_jFmpivy1ToU15u7']"><img class="iconstyle" src="../../static/img/QQ.svg"/></a>
        <span class="bottomwords">{{$t("About.bottom1")}}。  Copyright© SOSCON {{$t("About.foot")}} 2018</span>
        <span class="bottomwords">{{$t("About.commun1")}}{{$t("About.commun2")}}&emsp;{{$t("About.school1")}}{{$t("About.school2")}}</span>
        <div style="clear: both"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "agenda10",
    methods: {
      open3() {
        $('.modal').modal();
        $('#modal3').modal('open');
      },
      open4() {
        $('.modal').modal();
        $('#modal4').modal('open');
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
      open17() {
        $('.modal').modal();
        $('#modal17').modal('open');
      },
      open18() {
        $('.modal').modal();
        $('#modal18').modal('open');
      },
      open19() {
        $('.modal').modal();
        $('#modal19').modal('open');
      },
      open20() {
        $('.modal').modal();
        $('#modal20').modal('open');
      },
      open21() {
        $('.modal').modal();
        $('#modal21').modal('open');
      },
      open22() {
        $('.modal').modal();
        $('#modal22').modal('open');
      },
    },
    mounted:function(){
      $('.tabs').tabs();
    }

  }
</script>

<style scoped>

</style>
