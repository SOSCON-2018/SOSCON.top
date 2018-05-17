<template xmlns:to="http://www.w3.org/1999/xhtml">
  <div>
    <ul id="dropdown1" class="dropdown-content tit1">
      <li>
        <a @click="toZHCHS">简体中文</a>
      </li>
      <li>
        <a @click="toZHCHT">繁体中文</a>
      </li>
      <!--<li class="divider"></li>-->
      <li>
        <a @click="toEN">English</a>
      </li>
    </ul>
    <ul id="dropdown3" class="dropdown-content tit1">
      <li>
        <!--<a @click="">主会场</a>-->
        <router-link to="/agenda">6月9日议程</router-link>
      </li>
      <li>
        <!--<a @click="">分会场A</a>-->
        <router-link to="/">6月10日议程</router-link>
      </li>
      <!--<li class="divider"></li>-->
    </ul>

    <nav class="title1">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo" style="margin-left: 3%">SOSCON<span style="color: #66ccff">18</span>
        </router-link>
        <router-link to="" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i>
        </router-link>
        <ul class="right hide-on-med-and-down" style="margin-right: 3%">
          <li>
            <router-link to="/">{{$t("Nav.home")}}</router-link>
          </li>
          <li>
            <router-link to="apply">{{$t("Nav.apply")}}</router-link>
          </li>
          <li>
            <!--<router-link to="/agenda">{{$t("Nav.agenda")}}</router-link>-->
            <a class="dropdown-trigger"  data-target="dropdown3">{{$t("Nav.agenda")}}<i
              class="material-icons right">arrow_drop_down</i></a>
          </li>
          <li>
            <router-link to="/news">{{$t("Nav.news")}}</router-link>
          </li>
          <li class="t3">
            <router-link to="/community">{{$t("Nav.community")}}</router-link>
          </li>
          <li class="t1">
            <router-link to="">{{$t("Nav.thanks")}}</router-link>
          </li>
          <li>
            <router-link to="/aboutUs">{{$t("Nav.aboutUs")}}</router-link>
          </li>
          <li ><a class="dropdown-trigger"  data-target="dropdown1">{{$t("Nav.lang")}}<i
            class="material-icons right">arrow_drop_down</i></a></li>
          <li class=" t3" v-if="name === 'none'"><a class="modal-trigger waves-effect waves-light btn" @click="open1">{{$t("Nav.login")}}/{{$t("Nav.register")}}</a></li>
          <li class="t3" v-else @click="logoutCheck">{{ name }}</li>
        </ul>
      </div>
    </nav>
    <ul id="dropdown2" class="dropdown-content tit1">
      <li @click="closeNav">
        <a @click="toZHCHS">简体中文</a>
      </li>
      <li @click="closeNav">
        <a @click="toZHCHT">繁体中文</a>
      </li>
      <!--<li class="divider"></li>-->
      <li @click="closeNav">
        <a @click="toEN">English</a>
      </li>
    </ul>
    <ul id="dropdown4" class="dropdown-content tit1">
      <li @click="closeNav">
        <!--<a @click="">主会场</a>-->
        <router-link to="/agenda">{{$t("Nav.agenda1")}}</router-link>
      </li>
      <li @click="closeNav">
        <!--<a @click="">分会场A</a>-->
        <router-link to="/">{{$t("Nav.agenda2")}}</router-link>
      </li>
    </ul>
    <ul class="sidenav" id="mobile-demo">
      <li @click="closeNav">
        <router-link to="/">{{$t("Nav.home")}}</router-link>
      </li>
      <li @click="closeNav">
        <router-link to="/apply">{{$t("Nav.apply")}}</router-link>
      </li>
      <li>
        <!--<router-link to="/agenda">{{$t("Nav.agenda")}}</router-link>-->
        <a class="dropdown-trigger" data-target="dropdown4">{{$t("Nav.agenda")}}<i class="material-icons right">arrow_drop_down</i></a>
      </li>
      <li @click="closeNav">
        <router-link to="/news">{{$t("Nav.news")}}</router-link>
      </li>
      <li class="t3" @click="closeNav">
        <router-link to="/community">{{$t("Nav.community")}}</router-link>
      </li>
      <li>
        <router-link to="" class="t1">{{$t("Nav.thanks")}}</router-link>
      </li>
      <li @click="closeNav">
        <router-link to="/aboutUs">{{$t("Nav.aboutUs")}}</router-link>
      </li>
      <li><a class="dropdown-trigger" data-target="dropdown2">{{$t("Nav.lang")}}<i class="material-icons right">arrow_drop_down</i></a>
      </li>
      <li class=" t3" v-if="name === 'none'"><a class="modal-trigger waves-effect waves-light btn" @click="open1">{{$t("Nav.login")}}/{{$t("Nav.register")}}</a></li>
      <li class="t3" v-else @click="logoutCheck">
        <router-link to=""> {{ name }}
        </router-link>
      </li>
    </ul>
    <!--注册模态框-->
    <div id="modalRegister" class="modal">
      <div class="modal-content">
        <h5>{{$t("Nav.register")}}</h5>
        <form id="register">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" class="validate" name="name">
            <label for="icon_prefix">{{$t("Nav.name")}}</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">email</i>
            <input id="icon_email" type="email" class="validate" name="email">
            <label for="icon_email">{{$t("Nav.email")}}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">vpn_key</i>
            <input id="password" type="password" class="validate" name="password">
            <label for="password">{{$t("Nav.password")}}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">vpn_key</i>
            <input id="password1" type="password" class="validate" name="password1">
            <label for="password1">{{$t("Nav.password2")}}</label>
          </div>
        </div>
        </form>
      </div>
      <div class="modal-footer">
        <input type="button" :value="$t('Nav.register')" class="modal-trigger waves-effect waves-light btn" @click="subRegister">
      </div>
    </div>
    <!--登录模态框-->
    <div id="modalLogin" class="modal">

      <div class="modal-content">
        <p class="allH4" >{{$t("Nav.login")}}</p>
        <form id="login">
          <div class="row">
            <div class="input-field col s12">
              <input id="email1" type="email" class="validate" name="email">
              <label for="email1">{{$t("Nav.email")}}</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="password2" type="password" class="validate" name="password">
              <label for="password2">{{$t("Nav.password")}}</label>
            </div>
          </div>

        </form>

        <div class="modal-footer">
          <button class="btn waves-effect waves-light" @click="open">{{$t("Nav.register")}}
          </button>
          <button class="btn waves-effect waves-light" @click="subLogin">{{$t("Nav.login")}}
          </button>
        </div>

      </div>
    </div>

  </div>


</template>


<script>

  export default {
    name: "nav",
    props: ['name'],
    methods: {

      open1() {
        $('#modalLogin').modal('open');
      },
      open() {
        $('.modal').modal();
        $('#modalRegister').modal('open');
      },
      closeNav() {
        $('.sidenav').sidenav('close');
      },

      subLogin() {
        var that = this
        $.ajax({
          method: 'post',
          url: '/account/login',
          data: $('#login').serialize(),
          async:false
        }).done(function (result) {
          if (result.result === '登录成功') {
            swal({
              text: that.$t('JS.successLogin'),
              type:'success',
              allowOutsideClick:true,
            })
            setTimeout(function () {
              window.location.reload()
            },1000)
          }

          else {
            console.log(result.result)
            swal({
              text: that.$t('JS.errorLogin'),
              type: 'error',
              timer: 2000
            })
            $('#login')[0].reset()
          }
        })
      },

      subRegister(){
        var that = this
        $.ajax({
          method: 'post',
          url: '/account/UserRegister',
          data: $('#register').serialize()
        }).then(function (data) {
          if (data.result === '注册成功') {
            swal({
              text: that.$t('JS.successRegister'),
              type:'success',
              allowOutsideClick:false,
            }),
            $.post('/account/email/send')
            setTimeout(function () {
              window.location.reload()
            },1000)
          }
          else if(data.result === '账号不能为空') {
            swal({
              text: that.$t('JS.nameBlank'),
              type: 'error',
              timer: 2000
            })
          }
          else if(data.result === '用户名已存在'){
            swal({
              text: that.$t('JS.nameHave'),
              type: 'error',
              timer: 2000
            })
          }
          else if(data.result === '邮箱不能为空'){
            swal({
              text: that.$t('JS.emailBlank'),
              type: 'error',
              timer: 2000
            })
          }
          else if(data.result === '邮箱已注册'){
            swal({
              text: that.$t('JS.emailHave'),
              type: 'error',
              timer: 2000
            })
          }
          else if(data.result === '邮箱格式不正确'){
            swal({
              text: that.$t('JS.errorEmail'),
              type: 'error',
              timer: 2000
            })
          }
          else if(data.result === '密码至少为六位'){
            swal({
              text: that.$t('JS.shortPassword'),
              type: 'error',
              timer:2000
            })
          }
          else{
            swal({
              text: that.$t('JS.passwordDifferent'),
              type: 'error',
              timer:2000
            })
          }
        })
      },
      logoutCheck(){
        swal({
          text:this.$t('JS.wLogout'),
          type:'warning',
          showCancelButton:true,
          confirmButtonText:this.$t('JS.cLogout'),
          preConfirm:function () {
            $.ajax({
              method: 'post',
              url: '/account/logout',
              async:false,
            }).done(function (data) {
              if (data.msg === '注销成功') {
                window.location.reload()
              }
            })
          }
        })
      },
      toZHCHS(){
        localStorage.lang='zhCHS'
        this.$i18n.locale='zhCHS'
        window.location.reload()
      },
      toZHCHT(){
        localStorage.lang='zhCHT'
        this.$i18n.locale='zhCHT'
        window.location.reload()
      },
      toEN(){
        localStorage.lang='en'
        this.$i18n.locale='en'
        window.location.reload()
      }

    },

  }
  window.onload = function () {
    $(".dropdown-trigger").dropdown();
    $('.modal').modal();
    $('.tabs').tabs();
  }
</script>


<style scoped>

</style>
