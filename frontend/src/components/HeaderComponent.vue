<template>
  <header>
    <div id="nav">
      <!--Logo -->
      <img class="MainLogo" src="https://www.accenture.com/_acnmedia/Thought-Leadership-Assets/Images/mainpage/Accenture-acn-mobile-logo-1" alt="" />
      <!--Main Nav -->
      <div class="mainNav">
        <router-link to="/"> Home | </router-link> 
        <router-link to="/Blogs"> All POSTS | </router-link> 
      </div>
      <!-- User nav And User actions (reg/login) -->
      <div class="userArea"> 
        <!--if user is loged in show + sign to add posts -->
        <router-link to="/addblog" v-if="isLoged"> 
          <span class="addPostBtn">
            <i class="fas fa-plus"></i>
          </span>
        </router-link>
        <!--toggles user menu on click to user icon ....FIX this-->
        <span @click='toggle = !toggle'>
          <i class="fas fa-user" ></i> 
        </span>
        <div class="userAreaActions" v-show='toggle'>
          <!-- show If user is loged in -->
          <div v-if="isLoged">
            <p>
              <router-link to="/UserBlogs" @click='toggle = !toggle'> 
                My Posts
              </router-link>
            </p>
            <p @click='toggle = !toggle'> 
              <button class="btn btn-success" type="submit" @click="logOut"> 
                LOG OUT
              </button>
            </p>
          </div>
          <!-- show reg/login links If user isn't loged in -->
          <div v-else>
            <p>
              <router-link to="/Registration" @click='toggle = !toggle'> 
                Registration
              </router-link> 
            </p>
            <p>
              <router-link to="/LogIn" @click='toggle = !toggle'> 
                LogIn 
              </router-link> 
            </p>
          </div>
        </div>
      </div> 
    </div>
  </header>
</template>

<script>
//SERVER SIDE FUNCTIONS IMPORT
 


export default { 
  name: 'Header',
  props: {},
  data () {
    return {
      toggle: false,
      isLoged: '',
    }
  },
  methods:{
    //LOG OUT USER ON BTN CLICK USING SERVER SIDE FUNCTION
    async logOut() {
      let obj = {whatToCall: 'logOut' }
      await this.$store.dispatch("LogOutAction", obj);
      location.reload();
    },
  },
  //on mount function
    async mounted(){
      this.isLoged = this.$store.getters.IslogedInGetter;
 },
 
}
</script>

<style>
.mainNav {
  margin: 0 5%;
  padding:  25px 0;
  flex: 1;
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

.MainLogo {
  width: 50px;
  height: auto;
  padding: 5px;
}

#nav {
  min-height: 50px;
  padding: 30px;
  background: #444;
  border-radius: 0 0 14px 14px;
  text-align: left;
  display:flex;
}

.userArea {
  padding: 15px 0;
  color: #fff;
  cursor: pointer;
}

.userAreaActions {
  text-align:left;
  position: absolute;
  min-height: 50px;
  right:0;
  background: #666;
  padding: 15px;
  border-radius: 5px;
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ff440c;
}
</style>