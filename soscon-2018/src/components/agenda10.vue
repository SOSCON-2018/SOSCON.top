<template>
  <div class="Background">
    <div class="workers">
      <ul class="tabs tabs-fixed-width tab-demo z-depth-1" style="width:100%;border-radius:20px;margin-top: 13%">
        <li class="tab"><a class="active" href="#test1">{{$t("Agenda.main")}}</a></li>
        <li class="tab"><a href="#test2">{{$t("Agenda.other1")}}</a></li>
        <li class="tab"><a href="#test3">{{$t("Agenda.other2")}}</a></li>
        <!--<li class="tab"><a href="#test4">{{$t("Agenda.other3")}}</a></li>-->
        <li class="tab"><a href="#test0">{{$t("Agenda.other4")}}</a></li>
      </ul>
      <div id="modal3" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda10.speach1")}}</h4>
          <p>{{$t("Agenda10.speach2")}}</p>
        </div>
      </div>
      <!--<div id="modal4" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda10.speach3")}}</h4>
          <p>{{$t("Agenda10.speach4")}}</p>
        </div>
      </div>-->
      <div id="modal5" class="modal">
        <div class="modal-content">
          <!--<div style="display: inline-block;width: 50%">-->
          <img src="../../static/img/4：张宇翔.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach5")}}</h4>
          <p>{{$t("Agenda10.speach6")}}</p>
          <p>{{$t("Agenda10.speakers1")}}</p>
          <p>{{$t("Agenda10.speach7")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>

          <!--</div>
            <img style="width: 30%;vertical-align: top;margin-left: 10%" src="../../static/img/4：张宇翔.jpg">-->
        </div>
      </div>
      <div id="modal6" class="modal">
        <div class="modal-content">
          <!--<div style="display: inline-block;width: 50%">-->
          <img src="../../static/img/1：姜柏任.png" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach8")}}</h4>
          <p>{{$t("Agenda10.speach30")}}</p>
          <p>{{$t("Agenda10.speakers2")}}</p>
          <p>{{$t("Agenda10.speach9")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
          <!--</div>
          <img style="width: 30%;vertical-align: top;margin-left: 10%" src="../../static/img/1：姜柏任.png">-->
        </div>
      </div>
      <div id="modal7" class="modal">
        <div class="modal-content">
          <!--<div style="display: inline-block;width: 50%">-->
          <img src="../../static/img/5：高雨彤.png" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach12")}}</h4>
          <p>{{$t("Agenda10.speach32")}}</p>
          <p>{{$t("Agenda10.speach13")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
          <!--</div>
          <img style="width: 30%;vertical-align: top;margin-left: 10%" src="../../static/img/headPortrait.jpg">-->
        </div>
      </div>
      <div id="modal8" class="modal">
        <div class="modal-content">
          <!--<div style="display: inline-block;width: 50%">-->
          <img src="../../static/img/7：聂沫予.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach10")}}</h4>
          <p>{{$t("Agenda10.speach11")}}</p>
          <p>{{$t("Agenda10.speakers3")}}</p>
          <p>{{$t("Agenda10.speach31")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
          <!--</div>
          <img style="width: 30%;vertical-align: top;margin-left: 10%" src="../../static/img/7：聂沫予.jpg">-->
        </div>
      </div>
      <div id="modal9" class="modal">
        <div class="modal-content">
          <!--<div style="display: inline-block;width: 50%">-->
          <img src="../../static/img/2：何纪言.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach14")}}</h4>
          <p>{{$t("Agenda10.speach33")}}</p>
          <p>{{$t("Agenda10.speakers4")}}</p>
          <p>{{$t("Agenda10.speach15")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
          <!--</div>
          <img style="width: 30%;vertical-align: top;margin-left: 10%" src="../../static/img/2：何纪言.jpg">-->
        </div>
      </div>
      <div id="modal10" class="modal">
        <div class="modal-content">
          <!--<div style="display: inline-block;width: 50%">-->
          <img src="../../static/img/headPortrait.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach16")}}</h4>
          <p>{{$t("Agenda10.speakers9")}}</p>
          <p>{{$t("Agenda10.speakers10")}}</p>
          <p>{{$t("Agenda10.speach17")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
          <!--</div>
          <img style="width: 30%;vertical-align: top;margin-left: 10%" src="../../static/img/headPortrait.jpg">-->
        </div>
      </div>
      <div id="modal12" class="modal">
        <div class="modal-content">
          <!-- <div style="display: inline-block;width: 50%">-->
          <img src="../../static/img/3：王子博.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach18")}}</h4>
          <p>{{$t("Agenda10.speach19")}}</p>
          <p>{{$t("Agenda10.speakers5")}}</p>
          <p>{{$t("Agenda10.speach20")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
          <!--</div>
          <img style="width: 30%;vertical-align: top;margin-left: 10%" src="../../static/img/3：王子博.jpg">-->
        </div>
      </div>
      <div id="modal13" class="modal">
        <div class="modal-content">
          <!--<div style="display: inline-block;width: 50%">-->
          <img src="../../static/img/headPortrait.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach21")}}</h4>
          <p>{{$t("Agenda10.speach34")}}</p>
          <p>{{$t("Agenda10.speakers6")}}</p>
          <p>{{$t("Agenda10.speach22")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
          <!--</div>
          <img style="width: 30%;vertical-align: top;margin-left: 10%" src="../../static/img/headPortrait.jpg">-->
        </div>
      </div>
      <div id="modal14" class="modal">
        <div class="modal-content">
          <!--<div style="display: inline-block;width: 50%">-->
          <img src="../../static/img/headPortrait.jpg" class="headpic" align="right" hspace="5" vspace="5">
          <h4>{{$t("Agenda10.speach23")}}</h4>
          <p>{{$t("Agenda10.speach24")}}</p>
          <p>{{$t("Agenda10.speakers7")}}</p>
          <p>{{$t("Agenda10.speakers8")}}</p>
          <p>{{$t("Agenda10.speach25")}}</p>
          <p>{{$t("Agenda10.extra1")}}</p>
          <!--</div>
          <img style="width: 30%;vertical-align: top;margin-left: 10%" src="../../static/img/headPortrait.jpg">-->
        </div>
      </div>
      <!--<div id="modal15" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda10.speach26")}}</h4>
          <p>{{$t("Agenda10.speach27")}}</p>
        </div>
      </div>-->
      <div id="modal17" class="modal">
        <div class="modal-content">
          <h4>{{$t("Agenda10.speach28")}}</h4>
          <p>{{$t("Agenda10.speach29")}}</p>
        </div>
      </div>
      <div id="test1" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <a class="waves-effect waves-light modal-trigger processstyle">
          <div class="AgendaProcess colorA">
            <span class="time">7:50-8:30</span>
            <span class="process">{{$t("Agenda10.process1")}}</span>
          </div>
        </a>
        <!--<a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorA">
            <span class="time">8:30-10:00</span>
            <span class="process">{{$t("Agenda10.process0")}}</span>
          </div>
        </a>-->
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorB">
            <span class="time">8:30-9:40</span>
            <span class="process">{{$t("Agenda10.process2")}}</span>
          </div>
        </a>
        <!--<a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorB">
            <span class="time">8:30-8:40</span>
            <span class="process">{{$t("Agenda10.process2")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open3">
          <div class="AgendaProcess colorC">
            <span class="time">8:40-9:00</span>
            <span class="process">{{$t("Agenda10.process3")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open4">
          <div class="AgendaProcess colorD">
            <span class="time">9:00-9:40</span>
            <span class="process">{{$t("Agenda10.process4")}}</span>
          </div>
        </a>-->
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorC">
            <span class="time">9:40-9:50</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open5">
          <div class="AgendaProcess colorD">
            <span class="time">9:50-10:20</span>
            <span class="process">{{$t("Agenda10.process9")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open6">
          <div class="AgendaProcess colorE">
            <span class="time">10:20-11:00</span>
            <p class="process">{{$t("Agenda10.process21")}}</p>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorA">
            <span class="time">11:00-11:10</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open8">
          <div class="AgendaProcess colorB">
            <span class="time">11:10-11:40</span>
            <span class="process">{{$t("Agenda10.process6")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open7">
          <div class="AgendaProcess colorC">
            <span class="time">11:40-12:10</span>
            <span class="process">{{$t("Agenda10.process22")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorD">
            <span class="time">12:10-13:20</span>
            <span class="process">{{$t("Agenda10.process7")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open9">
          <div class="AgendaProcess colorE">
            <span class="time">13:20-13:50</span>
            <span class="process">{{$t("Agenda10.process8")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open10">
          <div class="AgendaProcess colorA">
            <span class="time">13:50-14:20</span>
            <span class="process">{{$t("Agenda10.process23")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorB">
            <span class="time">14:20-14:30</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open12">
          <div class="AgendaProcess colorC">
            <span class="time">14:30-15:00</span>
            <span class="process">{{$t("Agenda10.process12")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorD">
            <span class="time">15:00-15:30</span>
            <span class="process">{{$t("Agenda10.process13")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open13">
          <div class="AgendaProcess colorE">
            <span class="time">15:30-16:00</span>
            <span class="process">{{$t("Agenda10.process14")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open14">
          <div class="AgendaProcess colorA">
            <span class="time">16:00-16:20</span>
            <span class="process">{{$t("Agenda10.process24")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open15">
          <div class="AgendaProcess colorB">
            <span class="time">16:20-16:30</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorC">
            <span class="time">16:30-17:30</span>
            <span class="process">{{$t("Agenda10.process16")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes" @click="open17">
          <div class="AgendaProcess colorD">
            <span class="time">17:30-17:45</span>
            <span class="process">{{$t("Agenda10.process17")}}</span>
          </div>
        </a>
      </div>
      <div id="test2" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <a class="waves-effect waves-light modal-trigger" style="width: 100%">
          <div class="AgendaProcess colorA">
            <span class="time">9:40-9:50</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorB">
            <span class="time">9:50-11:00</span>
            <span class="process">{{$t("Agenda10.process18")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorC">
            <span class="time">11:00-11:10</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorD">
            <span class="time">11:10-12:10</span>
            <span class="process">{{$t("Agenda10.process25")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorE">
            <span class="time">12:10-13:00</span>
            <span class="process">{{$t("Agenda10.process7")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorA">
            <span class="time">13:00-17:30</span>
            <span class="process">{{$t("Agenda10.process19")}}</span>
          </div>
        </a>
      </div>
      <div id="test3" class="col s12" style="height: 520px;overflow: auto;width: 100%;">
        <a class="waves-effect waves-light modal-trigger" style="width: 100%">
          <div class="AgendaProcess colorA">
            <span class="time">10:00-10:10</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorB">
            <span class="time">10:10-11:10</span>
            <span class="process">{{$t("Agenda10.process18")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorC">
            <span class="time">11:10-11:20</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorD">
            <span class="time">11:20-12:20</span>
            <span class="process">{{$t("Agenda10.process25")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorE">
            <span class="time">12:20-13:10</span>
            <span class="process">{{$t("Agenda10.process7")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorA">
            <span class="time">13:10-14:10</span>
            <span class="process">{{$t("Agenda10.process25")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorB">
            <span class="time">14:10-14:20</span>
            <span class="process">{{$t("Agenda10.process5")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorC">
            <span class="time">14:20-14:40</span>
            <span class="process">{{$t("Agenda10.process20")}}</span>
          </div>
        </a>
        <a class="waves-effect waves-light modal-trigger processes">
          <div class="AgendaProcess colorD">
            <span class="time">14:40-15:30</span>
            <span class="process">{{$t("Agenda10.process13")}}</span>
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
            {<br/>
            {{$t("Agenda10.act6")}}<br/>
            {{$t("Agenda10.act7")}}<br/>
            }<br/>
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

    }
  }
</script>

<style scoped>

</style>
