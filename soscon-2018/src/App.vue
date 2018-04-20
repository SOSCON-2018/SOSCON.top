<template>
  <div id="app">
    <Nav ></Nav>
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
      },
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
