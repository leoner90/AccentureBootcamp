<template> 
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component class="page-view " :is="Component" />
    </transition>
  </router-view>
  <div class="clear"></div>
  <Footer />
 
</template>

<script>
import Header from './components/Header/HeaderComponent.vue';
import Footer from './components/FooterComponent.vue';
export default {   
  components:{
     Header,
     Footer
  }, 
}
</script>

<style>
*{
   word-break: break-all;
}
.fade-enter-active{
   transition: opacity 1s  ;
  -webkit-animation: 1s ease 0s normal forwards 1 fadein;
  animation: 1s ease 0s normal forwards 1 fadein;
}
.fade-leave-active {
   opacity:0;
}


@keyframes fadein{
    0% { opacity:0.1;   transform: scale(0.1);}
    33% { opacity:0.3;  }
    66% { opacity:0.5;  }
    100% { opacity:1; transform: scale(1.0); }
}

@-webkit-keyframes fadein{
     0% { opacity:0.1;   transform: scale(0.1);}
    33% { opacity:0.3; }
    66% { opacity:0.5; }
    100% { opacity:1; transform: scale(1.0); }
}
 
 

.clear {
  clear: both;
}

body {
  margin: 0;
  background: #f9f7f7;
}

#app {
  position: relative;
   font-family: 'Roboto', sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  padding-bottom: 45px;
}

.page-view {
  padding: 0 15%;
  max-width: 2200px;
  margin: 0 auto;
}
@media only screen and (max-width: 1350px) {
  .page-view {
   padding: 0 7%;
  }
}

@media only screen and (max-width: 1000px) {
  .page-view {
   padding: 0 5%;
  }
}
 </style>