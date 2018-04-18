<template>

  <div class="main">
    <ul id="dropdown1" class="dropdown-content tit1">
      <li><a href="#!">简体中文</a></li>
      <li><a href="#!">繁体中文</a></li>
      <!--<li class="divider"></li>-->
      <li><a href="#!">English</a></li>
    </ul>
    <nav class="title1">
      <div class="nav-wrapper">
        <a href="index.html" class="brand-logo" style="margin-left: 3%">SOSCON<span style="color: #66ccff">18</span></a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down" style="margin-right: 3%">
          <!--<li><a href="main.html">关于SOSCON</a></li>-->
          <li><a href="tab.html">报名</a></li>
          <li class="t1"><a href="">议程</a></li>
          <li><a class="t1" href="">关于我们</a></li>
          <li class="t1"><a href="">赞助</a></li>
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">语言<i class="material-icons right">arrow_drop_down</i></a></li>
          <li class="t2"><a href="sign.html">注册</a></li>
          <li class="t3"><a class="modal-trigger waves-effect waves-light btn" href="#modal1">登陆</a></li>
        </ul>
      </div>
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4 style="color: black">登陆</h4>
          <form>
            <div class="row">
              <div class="input-field col s12">
                <input value="email" id="email1" type="email" class="validate">
                <label for="email1">邮箱</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="password2" type="password" class="validate">
                <label for="password2">密码</label>
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
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">语言<i class="material-icons right">arrow_drop_down</i></a></li>
      <li><a href="sign.html">注册</a></li>
      <li><a class="modal-trigger waves-effect waves-light btn" href="#modal1">登陆</a></li>
    </ul>
    <div class="container back" style="background-color: white;background-size:cover;margin-top: 10%;width: 60%;height: 100%;">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate">
              <label for="first_name">名</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate">
              <label for="last_name">姓</label>
            </div>
          </div>
          <!-- <div class="row">
               <div class="input-field col s12">
                   <input disabled value="I am not editable" id="disabled" type="text" class="validate">
                   <label for="disabled">Disabled</label>
               </div>
           </div>-->
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate">
              <label for="password">密码</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password1" type="password" class="validate">
              <label for="password1">确认密码</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate">
              <label for="email">邮箱</label>
            </div>
          </div>
          <!--<div class="row">
              <div class="col s12">
                  This is an inline input field:
                  <div class="input-field inline">
                      <input id="email_inline" type="email" class="validate">
                      <label for="email_inline">Email</label>
                      <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                  </div>
              </div>
          </div>-->
          <div class="row">
            <div class="input-field col s12">
              <input id="number" type="number" class="validate">
              <label for="number">手机号码</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select class="browser-default">
                <option value="" disabled selected>饮食习惯</option>
                <option value="1">无特殊要求</option>
                <option value="2">素食</option>
                <option value="3">清真</option>
              </select>
              <!--<label>饮食习惯</label>-->
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select class="browser-default">
                <option value="" disabled selected>性别</option>
                <option value="1">男</option>
                <option value="2">女</option>
                <option value="4">不便透漏</option>
              </select>
              <!--<label>性别</label>-->
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select class="browser-default">
                <option value="" disabled selected>身份</option>
                <option value="1">学生</option>
                <option value="2">IT从业者</option>
                <option value="3">社会人士</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select class="browser-default">
                <option value="" disabled selected>学历/非学生请填社会人士</option>
                <option value="1">高中生及以下</option>
                <option value="2">专科</option>
                <option value="3">本科</option>
                <option value="4">硕士研究生</option>
                <option value="5">博士研究生</option>
                <option value="6">社会人士</option>
              </select>
              <!-- <label>学历/非学生请填社会人士</label>-->
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select class="browser-default">
                <option value="" disabled selected>您认为自己的整体软件开发程度或研究水平如何？</option>
                <option value="1">入门（学习了一门或几门编程语言）</option>
                <option value="2">初学（可以实现一些自己的程序）</option>
                <option value="3">进阶（有完成项目开发的经验）</option>
                <option value="4">高级（项目经验丰富，熟悉各种协议及原理）</option>
              </select>
              <!--<label>您认为自己的整件开发或研究水平如何？</label>-->
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select class="browser-default">
                <option value="" disabled selected>您擅长的领域</option>
                <option value="1">前端</option>
                <option value="2">web后端</option>
                <option value="7">APP开发</option>
                <option value="8">游戏开发</option>
                <option value="9">算法研究</option>
                <option value="3">数据库</option>
                <option value="4">嵌入式系统</option>
                <option value="5">机器学习</option>
                <option value="6">区块链</option>
                <option value="10">信息安全</option>
                <option value="11">数据处理</option>
                <option value="12">操作系统</option>
                <option value="13">其他</option>
              </select>
              <!--<label>您擅长的领域</label>-->
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select class="browser-default">
                <option value="" disabled selected>对开源的了解程度</option>
                <option value="1">不怎么了解</option>
                <option value="2">大概了解</option>
                <option value="3">有过开源贡献</option>
                <option value="4">有开源项目的开发经验</option>
              </select>
              <!--<label>对开源程度的了解</label>-->
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select class="browser-default">
                <option value="" disabled selected>T恤尺寸</option>
                <option value="1">XS</option>
                <option value="2">S</option>
                <option value="3">M</option>
                <option value="4">XL</option>
                <option value="5">XXL</option>
              </select>
              <!--<label>T恤尺寸</label>-->
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="place" type="text" class="validate">
              <label for="place">居住地区</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="place1" type="text" class="validate">
              <label for="place1">学校/单位名称</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <select>
                <option value="" disabled selected>邀请票</option>
                <option value="1">个人</option>
                <option value="2">社团</option>
                <option value="3">其他</option>
              </select>
              <label>邀请票</label>
            </div>
          </div>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">mode_edit</i>
                  <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                  <label for="icon_prefix2">备注(特殊需求联络lbb@openingsource.org)</label>
                </div>
              </div>
            </form>
          </div>
        </form>
      </div>
      <div class="row" style="margin-left: 10px">
        <button class="btn waves-effect waves-light butt" type="submit" name="action" >提交
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>

</style>
