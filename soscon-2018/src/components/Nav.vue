<template>
   <div>
    <ul id="dropdown1" class="dropdown-content tit1">
      <li><router-link to="" >简体中文</router-link></li>
      <li><router-link to="" >繁体中文</router-link></li>
      <!--<li class="divider"></li>-->
      <li><router-link to="" >English</router-link></li>
    </ul>


    <nav class="title1">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo" style="margin-left: 3%">SOSCON<span style="color: #66ccff">18</span></router-link>
        <router-link to="" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></router-link>
        <ul class="right hide-on-med-and-down" style="margin-right: 3%">
          <li><router-link to="/">首页</router-link></li>
          <li ><router-link to="apply">报名</router-link></li>
          <li class="t1"><router-link to="">议程</router-link></li>
          <li class="t1"><router-link to="">动态</router-link></li>
          <li class="t1"><router-link to="">感谢</router-link></li>
          <li><router-link to="/aboutUs" >关于我们</router-link></li>
          <li class="t1"><a class="dropdown-trigger" href="#!"  data-target="dropdown1">语言/Language<i class="material-icons right">arrow_drop_down</i></a></li>
          <li class=" t1 t3"><a class="modal-trigger waves-effect waves-light btn" >登录/注册</a></li>
        </ul>
      </div>
    </nav>
    <ul id="dropdown2" class="dropdown-content tit1">
      <li><router-link to="" >简体中文</router-link></li>
      <li><router-link to="" >繁体中文</router-link></li>
      <!--<li class="divider"></li>-->
      <li><router-link to="" >English</router-link></li>
    </ul>
    <ul class="sidenav" id="mobile-demo">
      <li @click="closeNav"><router-link to="/" >首页</router-link></li>
      <li @click="closeNav"><router-link to="/apply" >报名</router-link></li>
      <li><router-link to=""  class="t1">议程</router-link></li>
      <li ><router-link to="" class="t1">动态</router-link></li>
      <li><router-link to="" class="t1">感谢</router-link></li>
      <li @click="closeNav"><router-link to="/aboutUs"  >关于我们</router-link></li>
      <li><a class="dropdown-trigger t1"  data-target="dropdown2" >语言/Language<i class="material-icons right">arrow_drop_down</i></a></li>
      <li class=" t1 t3"><a class="modal-trigger waves-effect waves-light btn" >登录/注册</a></li>

    </ul>

     <!--登录模态框-->
     <div id="modalLogin" class="modal">

       <div class="modal-content">
         <h4 style="color: black">登录</h4>
         <form id="login">
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

           <div>
             <p></p>
           </div>
         </form>

           <div class="modal-footer">
             <router-link to="" class="btn waves-effect waves-light" >注册
             </router-link>
             <button class="btn waves-effect waves-light" @click="subLogin">登录
             </button>
           </div>

       </div>
     </div>
  </div>


</template>


<script>
    export default {
        name: "nav",
        methods:{
          closeNav() {
            $('.sidenav').sidenav('close');
          },
          open1(){
            $('#modalLogin').modal('open');
          },
          subLogin(){
            $.ajax({
              method: 'post',
              url: '/account/login',
              data: $('#login').serialize()
            }).done(function (data) {
              if (data.result !== '登录成功'){
                  this.name = 'data.name'
                  this.$emit('userLogin')
                  window.location.reload()
              }
              else {
                swal({
                  text: data.result,
                  type: 'error',
                  timer: 2000
                })
                $('#login')[0].reset()
              }
            })
          }
        },

    }
    window.onload=function () {
      // $(".dropdown-trigger").dropdown();
      $('.modal').modal();
    }
</script>

<style scoped>

</style>
