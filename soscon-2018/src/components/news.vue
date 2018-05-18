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
    <div style="width: 100%;height: 135px;background-color:#282828;">
      <div style="width:80%;height:100%;left:0;right:0;margin:0 auto;padding-top: 3vw">
        <!--<span style="height:100%;display:inline-block;vertical-align:middle;margin-left: 8%"></span>-->
        <a :href="['https://openingsource.org']"><img style="vertical-align:middle;margin-left: 1%;height:35px;" src="../../static/img/openingsource-W(1).png"/></a>
        <a :href="['https://t.me/soscon']"><img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Telegram-W.png"/></a>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Youtube-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Flickr-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Youtube-W.png"/>
        <img style="vertical-align:middle;margin-left: 1%;width: 35px;" src="../../static/img/Flickr-W.png"/>
        <span style="color: #5f5f5f;float: right">{{$t("About.bottom1")}}。  Copyright© SOSCON {{$t("About.foot")}} 2018</span>
        <div style="clear: both"></div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "news",
    data(){
      return{
        firstNews:'',
        otherNews:''
      }
    },
    methods:{
      getFirstNews(){
        var that = this
        $.ajax({
          url:"/news/firstNews",
          method:"get",
          dataType:"json",
          success:function(res){
            that.firstNews = res
          },
        })
      },
      getOherNews(){
        var that = this
        $.ajax({
          url:"/news/otherNews",
          method:"get",
          dataType:"json",
          success:function(res){
            that.otherNews = res
          },
        })
      }
    },
    created:function () {
      this.getFirstNews()
      this.getOherNews()
    }
  }
</script>

<style scoped>

</style>
