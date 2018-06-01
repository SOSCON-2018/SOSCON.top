<template>
  <div class="Background">
    <div class="workers">
      <ul class="tabs tabs-fixed-width tab-demo z-depth-1" style="width:100%;border-radius:20px;margin-top: 13%">
        <li class="tab"><a class="active" href="#test1">{{$t("Agenda.main")}}</a></li>
        <!--<li class="tab"><a href="#test2">{{$t("Agenda.other1")}}</a></li>
        <li class="tab"><a href="#test3">{{$t("Agenda.other2")}}</a></li>
        &lt;!&ndash;<li class="tab"><a href="#test4">{{$t("Agenda.other3")}}</a></li>&ndash;&gt;
        <li class="tab"><a href="#test0">{{$t("Agenda.other4")}}</a></li>-->
      </ul>
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda.speach1")}}</h4>
          <p>{{$t("Agenda.speach2")}}</p>
          <p>{{$t("Agenda.speach14")}}</p>
          <p>{{$t("Agenda.speach15")}}</p>
        </div>
      </div>
      <div id="modal2" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda.speach3")}}</h4>
          <p>{{$t("Agenda.speach4")}}</p>
        </div>
      </div>
      <div id="modal3" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda.speach5")}}</h4>
          <p>{{$t("Agenda.speach6")}}</p>
          <p>{{$t("Agenda.speach7")}}</p>
          <p>{{$t("Agenda.speach8")}}</p>
          <p>{{$t("Agenda.speach9")}}</p>
          <p>{{$t("Agenda.speach10")}}</p>
          <h4>{{$t("Agenda.speach11")}}</h4>
          <p>{{$t("Agenda.speach12")}}</p>
          <p>{{$t("Agenda.speach13")}}</p>
        </div>
      </div>
      <div id="test1" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <!--<div class="AgendaProcess colorA">
          <span class="time">14:00-14:30</span>
          <span class="process">{{$t("Agenda.process1")}}</span>
        </div>-->
        <a class="waves-effect waves-light modal-trigger processstyle" @click="open1">
          <div class="AgendaProcess colorA">
            <span class="time">14:00-14:30</span>
            <span class="process">{{$t("Agenda.process1")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open2">
          <div class="AgendaProcess colorB">
            <span class="time">14:30-14:45</span>
            <span class="process">{{$t("Agenda.process3")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorC">
            <span class="time">14:45-15:45</span>
            <span class="process">{{$t("Agenda.process2")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open3">
          <div class="AgendaProcess colorB">
            <span class="time">15:45-17:05</span>
            <span class="process">{{$t("Agenda.process12")}}</span>
          </div>
        </a>
        <!--<div class="AgendaProcess colorD">
          <span class="time">15:45-17:05</span>
          <span class="process">{{$t("Agenda.process4")}}</span>
        </div>
        <div class="AgendaProcess colorE">
          <span class="time">15:45-17:05</span>
          <span class="process">{{$t("Agenda.process9")}}</span>
        </div>
        <div class="AgendaProcess colorA">
          <span class="time">15:45-17:05</span>
          <span class="process">{{$t("Agenda.process10")}}</span>
        </div>
        <div class="AgendaProcess colorB">
          <span class="time">17:05-17:10</span>
          <span class="process">{{$t("Agenda.process5")}}</span>
        </div>
        <div class="AgendaProcess colorC">
          <span class="time">17:10····</span>
          <span class="process">{{$t("Agenda.process11")}}</span>
        </div>-->
      </div>
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
    name: "agenda",
    methods:{
      open1() {
        $('.modal').modal();
        $('#modal1').modal('open');
      },
      open2() {
        $('.modal').modal();
        $('#modal2').modal('open');
      },
      open3() {
        $('.modal').modal();
        $('#modal3').modal('open');
      },
    }
  }
</script>

<style scoped>

</style>
