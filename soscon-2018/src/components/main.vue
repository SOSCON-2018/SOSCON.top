<template>
  <div>
    <div class="about1" style="height: 800px">
      <ul id="dropdown1" class="dropdown-content tit1">
        <li><a href="#!">简体中文</a></li>
        <li><a href="#!">繁体中文</a></li>
        <!--<li class="divider"></li>-->
        <li><a href="#!">English</a></li>
      </ul>
      <nav class="title1">
        <div class="nav-wrapper">
          <a href="index.html" class="brand-logo" style="margin-left: 3%">SOSCON<span
            style="color: #66ccff">18</span></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down" style="margin-right: 3%">
            <!--<li><a href="main.html">关于SOSCON</a></li>-->
            <li><a href="tab.html">报名</a></li>
            <li class="t1"><a href="">议程</a></li>
            <li><a class="t1" href="">关于我们</a></li>
            <li class="t1"><a href="">赞助</a></li>
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">语言<i class="material-icons right">arrow_drop_down</i></a>
            </li>
            <li class="t2"><a href="sign.html">注册</a></li>
            <li class="t3"><a class="modal-trigger waves-effect waves-light btn" href="#modal4">登陆</a></li>
          </ul>
        </div>
        <div id="modal4" class="modal">
          <div class="modal-content">
            <h4 style="color: black">登陆</h4>
            <form>
              <div class="row">
                <div class="input-field col s12">
                  <input value="email" id="email" type="email" class="validate">
                  <label for="email">邮箱</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate">
                  <label for="password">密码</label>
                </div>
              </div>


              <div class="modal-footer">
                <button class="btn waves-effect waves-light" type="submit" name="action">登陆
                  <i class="material-icons">donut_large</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <ul id="dropdown2" class="dropdown-content tit1">
        <li><a href="#!">简体中文</a></li>
        <li><a href="#!">繁体中文</a></li>
        <!--<li class="divider"></li>-->
        <li><a href="#!">English</a></li>
      </ul>
      <ul class="sidenav" id="mobile-demo">
        <!--<li><a href="main.html">关于SOSCON</a></li>-->
        <li><a href="tab.html">报名</a></li>
        <li><a href="">议程</a></li>
        <li><a href="">关于我们</a></li>
        <li><a href="">赞助</a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">语言<i class="material-icons right">arrow_drop_down</i></a>
        </li>
        <li><a href="sign.html">注册</a></li>
        <li><a class="modal-trigger waves-effect waves-light btn" href="#modal4">登陆</a></li>
      </ul>

      <div class="container">
        <div class="baoming">
          <div class="row">
            <div class="col s12 m4">
              <div class="icon-block second">
                <h2 class="center brown-text"><i class="material-icons co1">perm_camera_mic</i></h2>
                <h5 class="center">招募演讲者</h5>
                <!--<p class="light">-->
                <div style="margin-top:40px;">
                  <p>你是否在寻找志同道合的朋友一吐为快？
                    <!--<p style=">你是否愿意分享自己对开源和code的热爱和不一样的见解？</p>-->
                    <br>你是否愿意分享自己对开源和code的热爱和不一样的见解？
                    <br>SOSCON，便是你分享自己的最佳机会；
                    <br>我们期待深入的交流和思想的迸发！
                    <br>SOSCON招募演讲进行中……
                  </p>
                </div>
                <div class="button">
                  <a class="waves-effect waves-light btn modal-trigger back1" href="#modal3"
                     style="vertical-align: bottom">报名成为演讲者</a>
                </div>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block second">
                <h2 class="center brown-text"><i class="material-icons co2">favorite</i></h2>
                <h5 class="center">招募志愿者</h5>
                <div style="margin-top:40px;">
                  <!--<p>中国大陆首届面向全球学生的开源年会要开始啦！
                      <br/>如果你热爱开源，如果你热心奉献
                      <br/>那么，欢迎你加入SOSCON志愿者大家庭！
                      <br/>我们需要你的加入!
                      <br/>点击下方加入我们：
                  </p>-->
                  <p>学生开源年会将定在6月9日 & 10日举办。
                    <br/>活动已经进入了紧张的筹备中，我们需要广大社区朋友们的支援。
                    <br/>如果你对SOSCON感兴趣，那么以志工的身份参与到会议中一定会给你带来意义非凡的活动体验。
                  </p>
                </div>

                <div class="button" style="margin-bottom: 10px">
                  <a class="waves-effect waves-light btn modal-trigger back2" href="#modal2"
                     style="vertical-align: bottom">报名成为志愿者</a>
                </div>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block second">
                <h2 class="center brown-text"><i class="material-icons co3">credit_card</i></h2>
                <h5 class="center">获取入场券</h5>
                <div style="margin-top:40px;">
                  <P>这里有思想的碰撞，这里有对世界的畅想
                    <br>SOSCON，从筹备起就不仅仅是一场会议
                    <br>这是一场难忘又快乐的旅行......
                    <br>会议时间：六月9日和10日，SOSCON，期待你的到来！
                    <br>第一轮放票进行中：
                  </p>
                </div>
                <!-- Modal Trigger -->

                <div class="button">
                  <a class="waves-effect waves-light btn modal-trigger back3" href="#modal1">立即获取入场券</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>获取成功</h4>
          <p>您已经成功获取入场券</p>
          <p>余票：</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">关闭</a>
        </div>
      </div>

      <!-- Modal Structure -->
      <div id="modal2" class="modal modal-fixed-footer">
        <div class="modal-content">

          <h4>志愿者信息填写</h4>
          <p>填写志工信息。我们的负责人将会在之后的三个工作日内联系你。
          </p>
          <p><span style="font-weight: 800">注意：</span>我们会优先通过邮箱联系你，如果你没有收到邮件，请检查你的邮箱垃圾箱。如果三个工作日内没有收到邮件，请及时与我们取得联系。
          </p>
          <p style="color: red">*标记的为必填</p>

          <form>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate">
                    <label for="icon_prefix">你的名字<span style="color: red">*</span></label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" class="validate"/>
                    <label for="icon_telephone">电话号码<span style="color: red">*</span></label>
                  </div>
                </div>
              </form>
            </div>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <input id="email1" type="email" class="validate">
                    <label for="email1">Email<span style="color: red">*</span></label>
                  </div>
                </div>
              </form>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <select class="browser-default">
                  <option value="" disabled selected>愿意加入志愿者的哪些组？（可多选）</option>
                  <option value="1">摄影组：如果你是摄影爱好者，请用相机记录下我们的精彩瞬间。
                  </option>
                  <option value="2">翻译组：SOSCON是面向全球学生的开源年会，如果你擅长英语交流，请不吝赐教。</option>
                  <option value="7">场务组：负责会议筹备到正式进行期间场地的相关问题。
                  </option>
                  <option value="8">服务组：负责检票&发放物资，在会场帮助引导嘉宾。
                  </option>
                  <option value="9">放映组：负责会场的放映，帮助嘉宾准备演讲。
                  </option>
                  <option value="3">宣传组：负责撰写文案，联系媒体。
                  </option>
                  <option value="4">赞助组：负责和赞助商联系接洽。
                  </option>
                </select>
                <!--<label>愿意加入志愿者的哪些组<span style="color: red">*</span></label>-->
              </div>
            </div>
            <form class="col s12" id="text">
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">mode_edit</i>
                  <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                  <label for="icon_prefix2">请简单介绍一下自己<span style="color: red">*</span></label>
                </div>
              </div>
            </form>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea id="icon_prefix3" class="materialize-textarea"></textarea>
                    <label for="icon_prefix3">备注（有什么想说的都可以写在这里）</label>
                  </div>
                </div>
              </form>
            </div>
          </form>

        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">
            <button class="btn waves-effect waves-light" type="submit" name="action">提交
              <i class="material-icons right">send</i>
            </button>
          </a>
        </div>
        <!--</form>-->
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
              <li>联系人: 刘煜民</li>
              <li>投稿邮箱: soscon@openingsource.org</li>
            </ul>

          </div>

        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">同意</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "main"
  }
</script>

<style scoped>

</style>
