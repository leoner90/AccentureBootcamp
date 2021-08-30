<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,100&display=swap" rel="stylesheet">
 
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
import Header from './components/HeaderComponent.vue';
import Footer from './components/FooterComponent.vue';
export default {   
  components:{
     Header,
     Footer
  }, 
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s  ;
}


.fade-enter-from{
    opacity: 0.7;
  background: rgba(0,0,0,0.6)
}
.fade-leave-to {
  opacity: 0;
  background: rgba(0,0,0,0.1)
}

.clear {
  clear: both;
}

body {
  margin: 0;
}

#app {
  position: relative;
   font-family: 'Roboto', sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  padding-bottom: 30px;
}

.page-view {
  padding: 0 12.5%;
}
@media only screen and (max-width: 1300px) {
  .page-view {
   padding: 0 10%;
  }
}

@media only screen and (max-width: 1024px) {
  .page-view {
   padding: 0 5%;
  }
}
 </style>