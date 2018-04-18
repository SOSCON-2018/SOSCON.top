<template>
  <div>
  <img src="../../static/img/pic6.jpg" :style="{height:h1}" style="width: 100%;position: fixed" ></img>
  <div class="container">
    <div class="baoming">
      <div class="row">
        <div class="col s12 m4">
          <div    class="icon-block second applyContainer">
            <h2 class="center brown-text"><i class="material-icons co1">perm_camera_mic</i></h2>
            <h5 class="center">招募演讲者</h5>
            <!--<p class="light">-->
            <div style="margin-top:40px;">
              <p>学生开源年会演讲募集中！
                <!--<p style=">你是否愿意分享自己对开源和code的热爱和不一样的见解？</p>-->
                <br>我们希望学生能积极交流，让学生站上舞台，展示诞生在实验室里的创想，分享蕴含在编码中的激情，畅聊属于开源理念的未来!
                <br>我们也欢迎社区前辈传授经验，分享见闻，帮助学生了解开源，参与开源，贡献开源！
                <br/>报名截止时间5月20日
              </p>
            </div>
            <div class="button" style="margin-bottom: 10px">
              <a class="waves-effect waves-light btn modal-trigger back1" @click="open3" style="vertical-align: bottom">报名成为演讲者</a>
            </div>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block second applyContainer" >
            <h2 class="center brown-text"><i class="material-icons co2">favorite</i></h2>
            <h5 class="center">招募志愿者</h5>
            <div style="margin-top:40px;">
              <p>学生开源年会将定在6月9日 & 10日举办。
                <br/>活动已经进入了紧张的筹备中，我们需要广大社区朋友们的支援。
                <br/>如果你对SOSCON感兴趣，那么以志工的身份参与到会议中一定会给你带来意义非凡的活动体验。

              </p>
            </div>

            <div class="button" style="margin-bottom: 10px">
              <button class="waves-effect waves-light btn modal-trigger back2" @click="open2" style="vertical-align: bottom">报名成为志愿者</button>
            </div>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block second applyContainer">
            <h2 class="center brown-text"><i class="material-icons co3">credit_card</i></h2>
            <h5 class="center">获取入场券</h5>
            <div style="margin-top:40px;">
              <P>SOSCON票务即将开放
                <br>在这里, 你能感受到科技的魅力
                也能结交到志同道合的朋友

                <br>我们汇聚了各路大神
                现在, 就差志同道合的你
                <br>如果你相信开源的力量
                那么就点击取票
                和我们一起, 成为第一批开拓者, 见证元年的盛事
                <br>第一轮放票将在4月22日正式开启
              </p>
            </div>
            <!-- Modal Trigger -->

            <div class="button" style="margin-bottom: 10px">
              <a class="waves-effect waves-light btn modal-trigger back3" @click="open1">立即获取入场券</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <!--<h4>获取成功</h4>-->
      <!--<p>您已经成功获取入场券</p>-->
      <!--<p>余票：</p>-->
      <p>尚未开始</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">关闭</a>
    </div>
  </div>

  <!-- Modal Structure -->
  <div id="modal2" class="modal modal-fixed-footer">

    <form id="form1">

    <div class="modal-content row">
        <h5>志愿者信息填写</h5>
        <p>填写志工信息。我们的负责人将会在之后的三个工作日内联系你。
        </p>
        <p><span style="font-weight: 800">注意：</span>我们会优先通过邮箱联系你，如果你没有收到邮件，请检查你的邮箱垃圾箱。如果三个工作日内没有收到邮件，请及时与我们取得联系。(邮箱：volhtt@gmail.com)
        </p>
        <p style="color: red">*标记的为必填</p>
        <p>
        <div class="input-field col l6 s12 ">
          <i class="material-icons prefix">account_circle</i>
          <input id="name" type="text" class="validate" name="name">
          <label for="name">姓名<span style="color: red">*</span> </label>
        </div>

        <div class="input-field col l6 s12 ">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate" name="email">
          <label for="email">邮箱<span style="color: red">*</span> </label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">phone</i>
          <input id="phonenumber" type="number" class="validate" name="phonenumber">
          <label for="phonenumber">电话号码<span style="color: red">*</span> </label>
        </div>

        <!--<div class="input-field col s12">-->
          <!--<select  class="browser-default" >-->
            <!--<option value="" disabled>志愿者分组</option>-->
            <!--<option value="1">摄影组</option>-->
            <!--<option value="2">翻译组</option>-->
            <!--<option value="3">场务组</option>-->
            <!--<option value="4">服务组</option>-->
            <!--<option value="5">放映组</option>-->
            <!--<option value="6">宣传组</option>-->
            <!--<option value="7">赞助组</option>-->
          <!--</select>-->
        <!--</div>-->

        <div class="row">
          <span style="font-size: 1rem">愿意加入志愿者的哪些组？(多选)<span style="color: red">*</span> </span><br>
          <label class="col "><input type="checkbox" name="teams" value="1"><i>✓</i>摄影组：如果你是摄影爱好者，请用相机记录下我们的精彩瞬间。</label><br>
          <label class="col "><input type="checkbox" name="teams" value="2"><i>✓</i>翻译组：SOSCON是面向全球学生的开源年会，如果你擅长英语交流，请不吝赐教。</label><br>
          <label class="col "><input type="checkbox" name="teams" value="3"><i>✓</i>场务组：负责会议筹备到正式进行期间场地的相关问题。</label><br>
          <label class="col "><input type="checkbox" name="teams" value="4"><i>✓</i>服务组：负责检票&发放物资，在会场帮助引导嘉宾。</label><br>
          <label class="col "><input type="checkbox" name="teams" value="5"><i>✓</i>放映组：负责会场的放映，帮助嘉宾准备演讲。</label><br>
          <label class="col "><input type="checkbox" name="teams" value="6"><i>✓</i>宣传组：负责撰写文案，联系媒体。</label><br>
          <label class="col "><input type="checkbox" name="teams" value="7"><i>✓</i>赞助组：负责和赞助商联系接洽。</label><br>
        </div>



        <div class="row">
          请简单介绍一下自己<span style="color: red">*</span>
          <br>
          <span style="font-size: 0.5rem;margin-bottom: 0px">你可以介绍你参加过哪些志愿者活动、对哪些方面的东西感兴趣、有什么爱好、对这次开源年会有什么期待和想法…… 当然你也可以写任何你想写的内容。</span>
            <div class="input-field col s12">
              <i class="material-icons prefix">mode_edit</i>
              <textarea id="icon_prefix2" class="materialize-textarea" name="SelfIntroduction"></textarea>
              <label for="icon_prefix2">自我介绍</label>
            </div>
          </div>

        <div class="row">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea id="icon_prefix3" class="materialize-textarea" name="note"></textarea>
                <label for="icon_prefix3">备注</label>
              </div>
            </div>
        </div>
    </div>
    <div class="modal-footer" >

      <input type="button" class="btn waves-effect waves-light" @click="sub" value="提交">
    </div>
    </form>
  </div>

  <!-- Modal Structure -->
  <div id="modal3" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>报名演讲</h4>

      <div class="divider"></div>
      <div class="section">
        <h5>投稿主题</h5>

        <ul>
          <li>开源贡献</li>
          <li>工作经验</li>
          <li>研究收获</li>
          <li>其他很多技术相关方面</li>
        </ul>

      </div>

      <div class="divider"></div>
      <div class="section">
        <h5>演讲内容及要求</h5>

        <ul>
          <li>1.Anything about opening source. 我们鼓励任何与开源相关的演讲内容。无论你是技术大牛，社区达人或是开源初识者，我们欢迎你报名演讲，与全国大学生一同分享自己的知识、经历与想法。
          </li>
          <li>2.演讲时长不超过40分钟，不短于20分钟。当然如果你有很棒的 idea 且渴望表现自己，不过因为时长原因不能报名演讲，那么年会中的 Lighting Talk 环节会是你的舞台。
          </li>
          <li>3.演讲内容符合开源精神。
          </li>
          <li>4.Enjoy yourself. 我们希望每个年会的参与者都能乐在其中，享受技术与思考的氛围。也希望作为演讲者的你能与大家分享你的快乐
          </li>
        </ul>
      </div>

      <div class="divider"></div>
      <div class="section">
        <h5>投稿要求</h5>

        <ul>
          <li>题目：必填（20字以内）</li>
          <li>摘要：必填：（大致说明内容，150字以内）</li>
          <li>附件：请附上程序代码，幻灯片（必要），或任何您认为有助于我们了解您的附件。</li>
          <li>投稿时，请附带您的个人信息，包括电子邮箱地址，名称，联系电话或其他联系方式，以便联系。</li>
        </ul>

      </div>

      <div class="divider"></div>
      <div class="section">
        <h5>投稿方式</h5>

        <ul>
          <li>投稿邮箱: soscon@openingsource.org</li>
        </ul>

      </div>

      <div class="divider"></div>
      <div class="section" >
        <h5>注意事项
        </h5>

        <ul >
          <li>1.演讲内容力求是原创，如有引用，应注明出处。
          </li>
          <li>2.任何演讲内容不得侵犯任何第三方的著作权、专利权或其它合法的法律权利。若作品或其使用的素材侵犯了他人的合法权利，由此产生的全部法律责任由该演讲者承担。</li>
        </ul>

      </div>

    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">同意</a>
    </div>
  </div>
  </div>

</template>

<script>
    let h_screen = window.screen.height;
    import 'jquery.cookie'
    export default {
        name: "apply",
        methods: {
          open1() {
            $('#modal1').modal('open');
          },
          open2() {
            $('#modal2').modal('open');
          },
          open3() {
            $('#modal3').modal('open');
          },
          sub() {
            $.ajax({
              method: 'post',
              url: '/account/register',
              data: $('#form1').serialize()
            }).done(function (data) {
              if (data.result !== '提交成功'){
              swal({
                text: data.result,
                type: 'error',
                timer: 2000
              })
            }
            else {
              swal({
                text: data.result,
                type: 'success',
                timer: 3000
              })
                $('#form1')[0].reset()

            }
            })
          }
        },
        computed:{
          h1(){
            console.log(h_screen + 'px')
            return h_screen + 'px'
          }
      }

    }
</script>

<style scoped>
  p{
    font-size: 0.85rem;
  }
  body {
    font-family: "Microsoft YaHei UI";
  }
  .second{
    display:flex;
    flex-direction: column;
    align-items: center;

  }
  .co1{
    color:rgb(244,208,0);
  }
  .co2{
    color:rgb(229,131,8);
  }
  .co3{
    color:rgb(220,87,18);
  }
  .back1{
    background-color: rgb(244,208,0)!important;
  }
  .back2{
    background-color: rgb(229,131,8)!important;
  }
  .back3{
    background-color: rgb(220,87,18)!important;
  }
  label {font-size:1rem;cursor:pointer;}
  label i {font-size:1rem;font-style:normal;display:inline-block;width:12px;height:12px;text-align:center;line-height:12px;color:#fff;vertical-align:middle;margin:-2px 2px 1px 0px;border:#2489c5 1px solid;}
  input[type="checkbox"],input[type="radio"] {display:none;}
  input[type="radio"] + i {border-radius:7px;}
  input[type="checkbox"]:checked + i,input[type="radio"]:checked + i {background:#2489c5;}
  input[type="checkbox"]:disabled + i,input[type="radio"]:disabled + i {border-color:#ccc;}
  input[type="checkbox"]:checked:disabled + i,input[type="radio"]:checked:disabled + i {background:#ccc;}
</style>
