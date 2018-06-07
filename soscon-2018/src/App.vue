<template>
  <div id="app">
    <index-nav :name="username"></index-nav>
    <a v-show="haveTicket" @click="qrcode" class="btn-floating btn-large waves-effect waves-light red position"><i class="iconfont icon" style="font-size: 32px;">&#xea22;</i></a>
    <transition :name=transitionName >
      <router-view class="child-view" ></router-view>
    </transition>
    <div v-show="haveTicket" class="modal" id="qrmodal">
      <div class="modal-content">
        <p style="text-align: center">仅供工作人员使用</p>
        <img :src="this.qrurl" style="display: block;margin: auto">
        </div>
    </div>
  </div>
</template>

<script>
  import indexNav from "./components/Nav";
  //判断语言
  var currnetLang = navigator.language;
  if(!localStorage.lang) {
    if (!currnetLang || currnetLang=="zh-CN") {
      localStorage.lang = 'zhCHS'
    }
    else if (currnetLang == "zh-HK" || currnetLang == "zh-TW") {
      localStorage.lang = 'zhCHT'
    }
    else {
      localStorage.lang = 'en'
    }
  }

  export default {
    name: 'App',
    components: {indexNav},
    data(){
      return {
        transitionName:'fade',
      }
    },
    methods: {
      Login() {
        var getname;
        var havecheck;
        var haveTicket;
        var ID;
        $.ajax({
          type: 'post',
          url: '/account/check',
          async:false
        }).done(function (result) {
          getname = result.name
          havecheck = result.check
          haveTicket = result.haveTicket
          ID = result.ID
        });
        if (havecheck===false){
          let isConfirm = false
          swal({
            text:'第一次登录需要验证，验证码已发送至你的邮箱，有问题请联系soscon_ticket@openingsource.org',
            input:'text',
            showCancelButton: true,
            cancelButtonText:'退出',
            confirmButtonText: '验证',
            showLoaderOnConfirm: true,
            allowOutsideClick:false,
            preConfirm: function(text) {
              isConfirm = true
              $.ajax({
                method:'post',
                url: '/account/checknum',
                data:{'num':text},
              }).done(function (data) {
                if(data.result==='验证通过'){
                  swal({
                    text:this.$t("JS.successCheck"),
                    type:'success'
                  })
                  setTimeout(function () {
                    window.location.reload()
                  },1000)
                }
                else {
                  swal({
                    text:this.$t("JS.errorCheck"),
                    type:'error',
                    timer:1000
                  })
                  setTimeout(function () {
                    window.location.reload()
                  },1000)
                }
              })
            },
          }).then(function () {
            if(!isConfirm){
              $.post('/account/logout')
            }
            setTimeout(function () {
              window.location.reload()
            },1000)
          })
        }
        return [getname,haveTicket,ID]
      },
      qrcode(){
        $('.modal').modal();
        $('#qrmodal').modal('open');
      }

    },
    computed: {
      username:function () {
        return this.Login()[0]
      },
      haveTicket:function () {
        return this.Login()[1]
      },
      ID:function(){
        return this.Login()[2]
      },
      qrurl:function () {
        if(this.haveTicket)
          return '/account/img/' + this.ID
        else
          return ''
      }
    },

  }
</script>

<style>
  [target=_blank]{
    display: none;
  }
  ::-webkit-scrollbar{
    display: none;

  }
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 1s cubic-bezier(.55,0,.1,1);
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
</style>
