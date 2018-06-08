<template>
  <div>
    <div style="width: 80%;margin: 0 auto;">
      <div>
        <div style="display: inline-block;text-align: center;margin-top: 135px">
          <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >SOSCON<span style="color:#66ccff;">18</span></p>-->
          <h4 style="background-color: black;color: white;padding: 20px 20px;">SOSCON<span
            style="color: #66ccff">18</span></h4>
        </div>
        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 600;font-size: large">{{$t("About.soscon")}}</p>
        <p>
          {{$t("About.sosconp1")}}
          <br>
          {{$t("About.sosconp2")}}
        </p>
        <p style="font-weight: 600;font-size: large">{{$t("About.hoping")}}</p>
        <p>
          {{$t("About.hopingp1")}}
          <br>
          {{$t("About.hopingp2")}}
          <br>
          {{$t("About.hopingp3")}}
        </p>

      </div>
      <div>
        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 700;font-size: large;display: inline;margin-right: 20px">{{$t("About.time")}}<span
          style="font-weight: normal">{{$t("About.time1")}}</span></p>
        <p style="font-weight: 700;font-size: large;display: inline;margin-right: 20px">{{$t("About.place")}}<span
          style="font-weight: normal">{{$t("About.place1")}}</span></p>
        <p style="font-weight: 700;font-size: large;display: inline;margin-right: 20px">{{$t("About.commun1")}}<span
          style="font-weight: normal">{{$t("About.commun2")}}</span></p>
        <p style="font-weight: 700;font-size: large;display: inline">{{$t("About.school1")}}<span
          style="font-weight: normal">{{$t("About.school2")}}</span></p>

      </div>
      <div id="modal4" class="modal">
        <div class="modal-content">
          <img src="../../static/img/qrcode.png"/>
          <span style="vertical-align: top;font-size: xx-large;font-weight: 700">soscon2018</span>
        </div>
      </div>
      <div style="margin-top: 2%;margin-bottom: 50px">
        <iframe v-bind:width="mapWidth" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=106.44882917404176%2C29.55839551809361%2C106.48466348648071%2C29.575080675290284&amp;layer=mapnik&amp;marker=29.566738441255648%2C106.46674633026123" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=29.5667&amp;mlon=106.4667#map=16/29.5667/106.4667&amp;layers=N">View Larger Map</a></small>
      </div>

    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import BottomBar from "./bottomBar";
  export default {
    name: "about",
    components: {BottomBar},
    data() {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        aboutUsWidth: '100px'
      }
    },
    computed: {
      w_screen: function () {
        return document.documentElement.clientWidth
      },
      mapWidth: function () {
        return this.w_screen / 1.26 + 'px'
      }

    },
    methods:{
      open4(){
        $('.modal').modal();
        $('#modal4').modal('open');
      },
    }

  }


</script>

<style scoped>
  body {
    font-size: 1rem;
  }
</style>
