<template>
  <Header />
  <router-view class="page-view"/>
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
  }
}
</script>

<style>
.clear {
  clear: both;
}

body {
  margin: 0;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  padding-bottom: 30px;
}

.page-view {
  padding: 0 10%;
}
 </style>