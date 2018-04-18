<template>
  <div>
  <div class="aboutandmap">
    <div class="aboutus " :style={width:aboutUsWidth}>
      <p style="color: white;background-color: black;padding: 0 20px;text-align: center;width: 40%;padding:0 5px">关于SOSCON<span
        style="color: #66ccff">18</span></p>

      <br/>
      <span style="font-weight: 800;text-align: left;display: block">————</span>
      <p style="font-weight: 700;font-size:x-large;text-align: left">学生年会</p>
      <p style="text-align: left">SOSON全称是学生开源年会 ( Students Open Source Conference )是中国大陆首届面向学生的开源会议，讲者，工作人员，听众几乎全为学生，畅想未来，我们学生更有感觉。</p>
      <p style="font-weight: 700;font-size:x-large;text-align: left">开源平台</p>
      <p style="text-align: left">SOSCON基于开源的理念，希望更多地新同学可以参与到开源项目当中，结识朋友，也希望让长期参与开源项目和认同开源理念的同学分享自己的技术和经验。</p>
      <p style="font-weight: 700;font-size:x-large;text-align: left">自由分享</p>
      <p style="text-align: left">SOSCON提供了一个让学生开发者自由交流的平台，希望可以让更多的同学参与到开源项目当中，也希望让长期参与开源项目和认同开源理念的同学分享经验和技术。</p>

    </div>
    <div class="timeandmap">
      <p style="display: flex;flex-direction: row;flex-wrap: wrap;margin-left: 8%"><span
        style="font-weight: 700;margin-left: 10%">时间:<span
        style="font-weight: normal">2018年6月9.10日（Sat & Sun)</span></span><span
        style="font-weight: 700;margin-left: 10%">地点:<span style="font-weight: normal">重庆大学国际会议中心</span></span>
      </p>

      <div style="margin-top: 15%;" >
          <iframe v-bind:width="mapWidth" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=106.45307779312135%2C29.56162451639962%2C106.48067235946656%2C29.574968703557974&amp;layer=mapnik&amp;marker=29.56830242911509%2C106.46686649270123" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=29.5683&amp;mlon=106.4669#map=16/29.5683/106.4669&amp;layers=N">查看更大的地图</a></small>
      </div>
    </div>

  </div>
  <div style="width: 80%; left: 0;right: 0;margin: 0 auto;overflow: hidden;text-align: left">
    <span style="font-size: small;color: gray;">畅想未来，拥抱开源</span>
    <span style="font-size: small;color: gray;margin-left: 3%">联系我们: soscon@openingsource.org</span>
    <span class="foot" style="margin-left: 10px">Attending us</span>
    <span class="foot" style="margin-left: 10px">Follow us</span>
    <span class="foot">About us</span>
    <hr style="clear: both"/>
    <span style="font-size: small;color: gray;">Copyright &copy; 2018 SOSCON 学生开源年会</span>
    <i class="iconfont icon" style="margin-left: 10px">&#xe8d0;</i>
    <i class="iconfont icon" style="margin-left: 10px">&#xe660;</i>
    <i class="iconfont icon">&#xe8db;</i>
  </div>
  </div>
</template>

<script>
    let w_screen = document.documentElement.clientWidth
    export default {
        name: "about",
        data(){
          return {
            center: {lng: 0, lat: 0},
            zoom: 3,
            aboutUsWidth: '100px'
          }
        },
      computed:{
          mapWidth:function () {
            if(w_screen>950)
              return w_screen/2.4+ 'px'
            else {
              this.aboutUsWidth= w_screen / 1.15 + 'px'
              return w_screen / 1.15 + 'px'
            }
          },

      },

    }


</script>

<style scoped>
  body{
    font-size: 1rem;
  }
</style>
