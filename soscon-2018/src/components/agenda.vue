<template>
  <div class="Background">
    <div class="workers">
      <div class="agendaBox">
        <div class="AgendaProcess blue">
          <span class="time">14:00-14:30</span>
          <span class="process">{{$t("Agenda.process1")}}</span>
        </div>
        <div class="AgendaProcess colorA">
          <span class="time">14:30-14:50</span>
          <span class="process">{{$t("Agenda.process2")}}</span>
        </div>
        <div class="AgendaProcess colorB">
          <span class="time">14:30-14:50</span>
          <span class="process">{{$t("Agenda.process3")}}</span>
        </div>
        <div class="AgendaProcess colorC">
          <span class="time">14:50-15:20</span>
          <span class="process">{{$t("Agenda.process4")}}</span>
        </div>
        <div class="AgendaProcess colorD">
          <span class="time">15:30-16:50</span>
          <span class="process">{{$t("Agenda.process9")}}</span>
        </div>
        <div class="AgendaProcess colorE">
          <span class="time">15:30-16:50</span>
          <span class="process">{{$t("Agenda.process10")}}</span>
        </div>
        <!--<div class="AgendaProcess">
          <span class="time">15:30-16:50</span>
          <span class="speach BorderRight">{{$t("Agenda.process5")}}</span>
          <span class="speach BorderRight">{{$t("Agenda.process6")}}</span>
          <span class="speach BorderRight">{{$t("Agenda.process7")}}</span>
          <span class="speach">{{$t("Agenda.process8")}}</span>
        </div>-->
      </div>
    </div>
    <!--<div style="background-color: white;margin-bottom: -3%;margin-top: 30px ">
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
          <p style="font-size: small;color: gray;float: left;margin-bottom: 0">Copyright &copy; 2018 SOSCON {{$t("AboutUs.footer")}}</p>
          <div>
            <a><img class="icon icon2" src="../../static/img/Flickr-B.png" alt="Flickr"/></a>
            <a><img class="icon icon2" src="../../static/img/Youtube-B.png" alt="Youtube"/></a>
            <a href="https://t.me/soscon"><img class="icon" src="../../static/img/Telegram-B.png" alt="Telegram"/></a>
          </div>
        </div>
      </div>
    </div>-->
    <div style="width: 100%;height: 135px;background-color:#282828;margin-top: 3%">
      <div style="width:80%;height:100%;left:0;right:0;margin:0 auto;padding-top: 3vw">
        <!--<span style="height:100%;display:inline-block;vertical-align:middle;margin-left: 8%"></span>-->
        <a :href="['https://openingsource.org']"><img style="vertical-align:middle;margin-left: 1%;height:35px;" src="../../static/img/openingsource-W(1).png"/></a>
        <a :href="['https://t.me/soscon']"><img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Telegram-W.png"/></a>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Youtube-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Flickr-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Youtube-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Flickr-W.png"/>
        <span style="color: #5f5f5f;float: right">畅想未来，拥抱开源。  Copyright© SOSCON 学生开源年会 2018</span>
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
