<template>
  <div id="app">
    <Nav @userLogin="Login"></Nav>
    <transition :name=transitionName>
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import Nav from "./components/Nav";
  export default {
    name: 'App',
    components: {Nav},
    data(){
      return {
        transitionName:'fade',
        name : 'none'
      }
    },
    methods:{
      Login(name){
        this.name = name
      }
    }

  }
</script>

<style>
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 1s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 1;
    -webkit-transform: translate(1500px, 0);
    transform: translate(1500px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 1;
    -webkit-transform: translate(-1500px, 0);
    transform: translate(-1500px, 0);
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
</style>
