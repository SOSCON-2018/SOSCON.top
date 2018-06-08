<template>
  <div class="newsBackground"><!--display:flex;-->
    <!--<div class="row NewsBox">-->
    <!--<router-link :to="'/article/'+firstNews.id">-->
    <!--<img class="col s12 m4 l8 imgstyle" src="../../static/img/pic5.jpg"/>-->
    <!--<div class="col s12 m4 l2 ImgWordStyle">-->
    <!--<h5 class="ImgContent">{{firstNews.title}}</h5>-->
    <!--<div class="line"></div>-->
    <!--<div style="height: 200px;overflow: auto"></div>-->
    <!--<div class="lineBigger"></div>-->
    <!--<p class="contentfont">{{firstNews.time}}<br/>{{firstNews.author}}</p>-->
    <!--</div>-->
    <!--</router-link>-->
    <!--</div>-->
    <div class="row newsbelow">
      <div id="modal4" class="modal">
        <div class="modal-content">
          <img src="../../static/img/qrcode.png"/>
          <span style="vertical-align: top;font-size: xx-large;font-weight: 700">soscon2018</span>
        </div>
      </div>
      <div class="col s12 m6 l3 newsbelowboxstyle">
        <router-link :to="'/article/'+firstNews.id">
          <p class="newsbelowcontentfont">{{firstNews.title}}</p>
          <div style="height: 20vh;overflow: auto;"></div>
          <div class="line1"></div>
          <p class="newsbelowfontbelow">{{firstNews.time}}<br/>{{firstNews.author}}</p>
        </router-link>
      </div>
      <div class="col s12 m6 l3 newsbelowboxstyle" v-for="i in otherNews">
        <router-link :to="'/article/'+i.id">
          <p class="newsbelowcontentfont">{{i.title}}</p>
          <div style="height: 20vh;overflow: auto;"></div>
          <div class="line1"></div>
          <p class="newsbelowfontbelow">{{i.time}}<br/>{{i.author}}</p>
        </router-link>
      </div><!-- style="margin-right:5%;background-color: #00b8d4;margin-top: 5%;height: 45vh;position: relative;"-->
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import BottomBar from "./bottomBar";
  export default {
    name: "news",
    components: {BottomBar},
    data() {
      return {
        firstNews: '',
        otherNews: ''
      }
    },
    methods: {
      open4(){
          $('.modal').modal();
          $('#modal4').modal('open');
      },
      getFirstNews() {
        var that = this
        $.ajax({
          url: "/news/firstNews",
          method: "get",
          dataType: "json",
          success: function (res) {
            that.firstNews = res
          },
        })
      },
      getOherNews() {
        var that = this
        $.ajax({
          url: "/news/otherNews",
          method: "get",
          dataType: "json",
          success: function (res) {
            that.otherNews = res
          },
        })
      }
    },
    created: function () {
      this.getFirstNews()
      this.getOherNews()
    }
  }
</script>

<style scoped>

</style>
