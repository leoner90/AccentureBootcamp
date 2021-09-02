<template>
    <div class="mobile-menu"> 
      <span @click='toggle = !toggle'><i class="fas fa-bars" style="color:#ebebeb; font-size: 20px; cursor: pointer;" ></i></span>
      <div class="mobile-manu-expanded" v-show="toggle">
        <div class="mobileTopMenu" style="display:flex; flex: 1;  flex-direction: column;" @click='toggle = !toggle'>
          <router-link class="mobileMenuLink" to="/"> HOME </router-link> 
          <router-link class="mobileMenuLink" to="/AllBlogs"> POSTS </router-link> 
          <router-link class="mobileMenuLink" to="/UserBlogs" v-if="isLoged">  MY BLOGS</router-link>
        </div>
        <div style="display:flex; flex-direction: column; " @click='toggle = !toggle'>
          <router-link class="mobileMenuLink" to="/addblog" v-if="isLoged"> 
            <button class="LogOutBtn"><i class="fas fa-plus-circle" ></i> ADD BLOG </button>
          </router-link>
          <router-link class="mobileMenuLink LogOutBtn" to="/LogIn" v-if="!isLoged">
            <i class="fas fa-user  " ></i> 
            <span style="padding:10px">&nbsp; LOGIN </span> 
           </router-link> 
          <router-link class="LogOutBtn" to="/Registration" v-if="!isLoged"> 
            <i class="fas fa-user-plus "></i> &nbsp; REGISTRATION
          </router-link> 
          <button class="LogOutBtn" type="submit" v-if="isLoged"  @click="logOut">  
            <i class="fas fa-sign-out-alt"></i>
            LOG OUT
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default { 
  name: 'Header',
  props: {
    isLoged: Boolean,
    logOut: Function
  },
  data () {
    return {
      toggle: false,
    }
  }
}
</script>

 <style scoped>

.mobile-menu {
  display: none;
  position: absolute;
  right: 30px;
 }
.mobileMenuLink {
  text-decoration: none;
  z-index: 999;
  padding: 3px;
  color: #33ff3;
}
.mobileTopMenu > a {
  font-weight: bold;
  color: #6b3164;
  text-align: center;
  margin: 1px;
  min-width: 20%;
  margin: 5px auto;
  border-bottom: 1px solid #ccc;
}
.mobileTopMenu > a:hover {
  font-weight: 900;
  color: #130811;
  font-size: 1.1rem
}
.mobile-manu-expanded {
  flex-direction: column;
  padding: 20px;
  background: #fff;
  top: 110px;
  bottom: 0;
  left: 0;
  right:0;
  position: fixed;
  display: flex;
  background-image: url('https://cdn.wallpapersafari.com/52/42/QZLH6U.jpg');
  background-size: 100% 100%;
  
}

.LogOutBtn {
  text-align: left;
  display:block;
  padding: 6px 15px;
  border-radius: 5px;
  background: #e8eced;
  border: 2px solid #aaa;
  cursor: pointer;
  font-size: 15px;
  margin: 2px auto;
  font-weight: bold;
  letter-spacing: 0.5px;
  min-width: 20%;
  color: #53585c;

}
.LogOutBtn:hover {
  background: #ededed;
}
@media only screen and (max-width: 1024px) {
    .mobile-menu {
       display: flex;
    }
}

</style>