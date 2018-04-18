<template>
  <div>
    <div style="width: 80%;margin: 0 auto;">
      <div>
        <div style="display: inline-block;text-align: center;">
          <!--<p style="background-color: black;color: white;width: 260px;height: 65px;font-size: x-large" >SOSCON<span style="color:#66ccff;">18</span></p>-->
        <h4 style="background-color: black;color: white;padding: 20px 20px;">SOSCON<span style="color: #66ccff">18</span></h4>
        </div>
        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 600;font-size: large">学生年会</p>
        <p>学生开源年会 ( Students Open Source Conference ) 是中国大陆首个由学生自发组织举办的开源技术峰会，峰会基于开放源代码的理念，每年举办一次，举办地点为在各个城市轮办。峰会的主旨是希望引导和鼓励学生了解、参与、贡献开源；并且在开源项目中，结识更多的朋友，同时也让长期参与开源项目和认同开源理念的同学能够有交流技术、分享经验的机会。
          <br/>学生开源年会和台湾的SITCON 以及香港的 SITCON HK为姊妹会议，合为两岸三地华人社区三大学生技术会议。也是中国大陆首个面向学生的开源会议，从讲者到工作人员到听众绝大部分都是学生，享受开源乐趣，参与开源贡献，关于畅想未来这件事情，我们学生更有感觉。
          <br/>SOSCON邀请来自不同学校、不同院系的开源技术爱好者参与。致力于进行纯粹的技术交流和多元的思想碰撞，为学生群体建立活跃、多元、纯粹、关注学习和未来的技术社区。
        </p>
        <p style="font-weight: 600;font-size: large">年会展望</p>
        <p>SOSCON 2018 将于 2018年 6 月9日-10日在火热的重庆举办，来自全国各地的学生届时将齐聚一堂，想必是一场技术与思考的饕餮盛宴！<br/>我们也希望SOSCON所聚集而成的社群会作为一个长期的舞台，活跃在各地，成为学生交流技术、开放讨论的平台，使得开源理念能够在学生群体中茁壮成长。<br/>会议期间希望学生能积极交流，让学生站上舞台，展示诞生在实验室里的创想，分享蕴含在编码中的激情，畅聊属于开源理念的未来。也期待参会者能继续发挥自己的影响力，让周围更多的人为开源做贡献。</p>

      </div>
      <div>
        <p style="font-weight: 700;font-size: x-large">————</p>
        <p style="font-weight: 700;font-size: large;display: inline;margin-right: 20px">举办时间：<span style="font-weight: normal">2018年6月9.10日（Sat & Sun)</span></p>
        <p style="font-weight: 700;font-size: large;display: inline">地点:<span style="font-weight: normal">重庆大学国际会议中心</span></p>
      </div>
      <div style="margin-top: 2%;margin-bottom: 50px" >
        <iframe v-bind:width="mapWidth" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=106.45307779312135%2C29.56162451639962%2C106.48067235946656%2C29.574968703557974&amp;layer=mapnik&amp;marker=29.56830242911509%2C106.46686649270123" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=29.5683&amp;mlon=106.4669#map=16/29.5683/106.4669&amp;layers=N">查看更大的地图</a></small>
      </div>
    </div>
    <div style="width: 80%; left: 0;right: 0;margin: 0 auto;overflow: hidden">
      <span style="font-size: small;color: gray">畅想未来，拥抱开源</span>
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
              return w_screen / 1.26 + 'px'
            }

      },

    }


</script>

<style scoped>
  body{
    font-size: 1rem;
  }
</style>
