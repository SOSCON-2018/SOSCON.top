<template>
  <div class="Background">
    <div class="workers">
      <div style="display: inline-block;text-align: center;margin-top: 7%">
        <h4 style="background-color: black;color: white;padding: 20px 20px;margin: 0;">{{$t("Agenda.title1")}}</h4>
      </div>
      <p class="group" style="margin-top: 40px">————</p>
      <div style="height: 400px;overflow: auto">
        <div class="AgendaProcess">
          <span class="time">07:50-08:30</span>
          <span class="process">{{$t("Agenda.process1")}}</span>
        </div>
        <div class="AgendaProcess">
          <span class="time">07:50-08:30</span>
          <span class="process">{{$t("Agenda.process2")}}-贝贝</span>
        </div>
        <!--<div class="AgendaProcess">
          <span class="time">07:50-08:30</span>
          <span class="process">相声-贝贝</span>
        </div>
        <div class="AgendaProcess">
          <span class="time">07:50-08:30</span>
          <span class="process">相声-贝贝</span>
        </div>
        <div class="AgendaProcess">
          <span class="time">07:50-08:30</span>
          <span class="process">相声-贝贝</span>
        </div>-->
        <div class="AgendaProcess">
          <span class="time">07:50-08:30</span>
          <span class="process">{{$t("Agenda.process3")}}-熊院长</span>
        </div>
        <div class="AgendaProcess">
          <span class="time">07:50-08:30</span>
          <span class="process">{{$t("Agenda.process4")}}</span>
        </div>
        <div class="AgendaProcess">
          <span class="time">07:50-08:30</span>
          <!--<span class="start">入场</span>-->
          <span class="speach">{{$t("Agenda.process5")}}</span>
          <span class="speach">{{$t("Agenda.process6")}}</span>
          <span class="speach">{{$t("Agenda.process7")}}</span>
          <span class="speach">{{$t("Agenda.process8")}}</span>
        </div>
      </div>
    </div>
    <div style="background-color: white;margin-bottom: -3%;margin-top: 30px ">
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
