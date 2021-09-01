<template>
  <div class="DesktopNavWrapper">
      <div class="mainNav">
        <router-link to="/"> HOME | </router-link> 
        <router-link to="/Blogs">  POSTS | </router-link> 
      </div>
      <!-- User nav And User actions (reg/login) -->
      <div class="userArea"> 
        <!--if user is loged in show + sign to add posts -->
        <router-link to="/addblog" v-if="isLoged"> 
          <span class="addPostBtn"  style="font-size: 16px; color: #ffb7d0; background:#5d5d5d;">
            <i class="fas fa-plus"></i>
          </span>
        </router-link>
        <!--toggles user menu on click to user icon ....FIX this-->
        <span @click='toggle = !toggle' style="font-size: 16px;">
          <i class="fas fa-user" ></i> 
        </span>
        <div class="userAreaActions" v-show='toggle'>
          <!-- show If user is loged in -->
          <div v-if="isLoged">
            <p>
              <router-link to="/UserBlogs" @click='toggle = !toggle'> 
                <i class="fab fa-blogger-b"></i>
                 MY BLOGS
              </router-link>
            </p>
            <p @click='toggle = !toggle'> 
              <button class="LogOutBtn" type="submit" @click="logOut">
                <i class="fas fa-sign-out-alt"></i> LOG OUT
              </button>
            </p>
          </div>
          <!-- show reg/login links If user isn't loged in -->
          <div v-else>
            <p>
              <router-link to="/Registration" @click='toggle = !toggle'>
                <i class="fas fa-user-plus "></i> &nbsp;
                Registration 
               </router-link> 
            </p>
            <p>
              <router-link to="/LogIn" @click='toggle = !toggle'> <i class="fas fa-user  " ></i> 
            <span style="padding:10px">&nbsp; Login </span>  </router-link> 
            </p>
          </div>
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
  },
}

</script>

 <style scoped>

.mainNav {
  margin: 0 5%;
  padding:  25px 0;
  flex: 1;
}

.LogOutBtn {
  border: 2px solid #ccc;
  padding: 5px 8px;
  border-radius: 5px;
  cursor: pointer;
  background: #fff;
}

.DesktopNavWrapper{
  display: flex;
  align-items: center;
  width: 100%;
}
@media only screen and (max-width: 1024px) {
    .DesktopNavWrapper {
       display: none;
    }
}

.mainNav > a {
  padding: 0 5px;
}

.addPostBtn {
  padding: 5px 7px;
  background: #222;
  border-radius: 99%;
  margin: 0 10px;
}




.userArea {
  padding: 15px 0;
  color: #fff;
  cursor: pointer;
}

.userAreaActions {
  font-size: 0.8vw;
  position: absolute;
  min-height: 50px;
  right:0;
  background: #666;
  padding: 12px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

#nav a {
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.5px;
  font-size: 18px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #d5a8ce;
}
</style>