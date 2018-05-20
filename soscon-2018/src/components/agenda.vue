<template>
  <div class="Background">
    <div class="workers">
      <ul class="tabs tabs-fixed-width tab-demo z-depth-1" style="width:60%;position: relative;right: 20%;border-radius:20px;margin-top: 13%">
        <li class="tab"><a class="active" href="#test1">{{$t("Agenda.main")}}</a></li>
        <li class="tab"><a href="#test2">{{$t("Agenda.other1")}}</a></li>
        <li class="tab"><a href="#test3">{{$t("Agenda.other2")}}</a></li>
        <!--<li class="tab"><a href="#test4">{{$t("Agenda.other3")}}</a></li>-->
        <li class="tab"><a href="#test0">{{$t("Agenda.other4")}}</a></li>
      </ul>
      <div id="test1" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <div class="AgendaProcess blue">
          <span class="time">14:00-14:30</span>
          <span class="process">{{$t("Agenda.process1")}}</span>
        </div>
        <div class="AgendaProcess colorA">
          <span class="time">14:30-14:35</span>
          <span class="process">{{$t("Agenda.process2")}}</span>
        </div>
        <div class="AgendaProcess colorB">
          <span class="time">14:30-15:00</span>
          <span class="process">{{$t("Agenda.process3")}}</span>
        </div>
        <div class="AgendaProcess colorC">
          <span class="time">14:35-15:00</span>
          <span class="process">{{$t("Agenda.process4")}}</span>
        </div>
        <div class="AgendaProcess colorF">
          <span class="time">15:05-15:30</span>
          <span class="process">{{$t("Agenda.process5")}}</span>
        </div>
        <div class="AgendaProcess colorD">
          <span class="time">15:30-16:50</span>
          <span class="process">{{$t("Agenda.process9")}}</span>
        </div>
        <div class="AgendaProcess colorE">
          <span class="time">15:30-16:50</span>
          <span class="process">{{$t("Agenda.process10")}}</span>
        </div>
      </div>
    </div>
    <div style="width: 100%;height: 135px;background-color:#282828;margin-top: 3%">
      <div style="width:80%;height:100%;left:0;right:0;margin:0 auto;padding-top: 3vw">
        <!--<span style="height:100%;display:inline-block;vertical-align:middle;margin-left: 8%"></span>-->
        <a :href="['https://openingsource.org']"><img class="iconstyleA" src="../../static/img/openingsource-W(1).png"/></a>
        <a :href="['https://t.me/soscon']"><img class="iconstyle" src="../../static/img/Telegram-W.png"/></a>
        <img class="iconstyle" src="../../static/img/Youtube-W.png"/>
        <img class="iconstyle" src="../../static/img/Flickr-W.png"/>
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
    name: "agenda"
  }
</script>

<style scoped>

</style>
