<template>
  <header class="nav-wrapper">
    <div id="nav" >
      <img class="MainLogo" src="https://www.accenture.com/_acnmedia/Thought-Leadership-Assets/Images/mainpage/Accenture-acn-mobile-logo-1" alt="" />
      <desktopMenu :isLoged = "isLoged" :logOut="logOut"/>
      <mobileMenu :isLoged = "isLoged" :logOut="logOut"/>
    </div>
  </header>
</template>

<script>
//Components
import mobileMenu from './MobileMenuComponent.vue';
import desktopMenu from './DesktopMenuComponent.vue';


export default { 
  name: 'Header',
  props: {},
  data () {
    return {
      toggle: false,
      isLoged:  this.$store.getters.IslogedInGetter,
    }
  },
  methods:{
    //LOG OUT USER ON BTN CLICK USING SERVER SIDE FUNCTION
    async logOut() {
      let obj = {whatToCall: 'logOut' }
      await this.$store.dispatch("LogOutAction", obj);
      this.isLoged = this.$store.getters.IslogedInGetter;
      location.reload();
    },
  },
  //on mount function
  async mounted(){
      this.isLoged = this.$store.getters.IslogedInGetter;
  },
  components: {
    mobileMenu,
    desktopMenu
  }
 
}
</script>

<style scoped>


.nav-wrapper {
  padding-bottom: 200px;
}

@media only screen and (max-width: 1024px) {
  .nav-wrapper {
    padding-bottom: 120px;
  }
}

#nav {
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;
  min-height: 50px;
  padding: 20px;
  background: #444;
  border-radius: 0 0 14px 14px;
  text-align: left;
  display:flex;
}

.MainLogo {
  width: 50px;
  height: 50px;
  padding: 5px;
}

</style>