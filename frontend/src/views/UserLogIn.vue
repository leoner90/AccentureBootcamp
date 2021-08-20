<!-- Provide form for user log in , displays errors , in case if users is loged in redirects to main page -->
<template>
  <div class="page-wrapper">
    <h1 class="page-header">LOG IN PAGE</h1>
    <hr>
    <div class="error" v-for="error of errors" :key="error.i" >
      {{error}}
    </div>
    <form @submit.prevent="submit">
      <div>
        <input name="login" type="text" v-model="login" placeholder="login" lazy/>
      </div>
      <div>
        <input name="password" type="password" v-model="password" placeholder="Password" lazy/>
      </div>
      <button class="login-btn" type="submit"> Log In </button>
    </form>
  </div>
</template>

<script>
//SERVER SIDE FUNCTIONS IMPORT
import IsUserLogedIn from '@/ServerSideFunctions/IsUserLogedInFun.vue';
import LoginFun from '@/ServerSideFunctions/LoginFun.vue';

export default {
data() {
    return {
        login: '',
        password: '',
        errors: '',
        obj: {},
    }
  },
  methods: {
    //Logins user , if no error redirects to home page , otherwise displays them.
    async submit(){    
      this.obj = {login: this.login, password: this.password };
      let result = await LoginFun.LogIn(this.obj);
      if (result == true) {
        location.reload();
      } else {
        this.errors = result;
      }
    },
    //Cheack is user loged in on mounted , if so redirects to the main page
    async IsUserLogedIn() {
      let isLoged = await IsUserLogedIn.IsLogedIn();
      if (isLoged) {
        this.$router.push('/');
      }
    }
  },
  //On Mount
  mounted() {
    this.IsUserLogedIn();
  }
}
</script>

<style scoped>
.page-wrapper {
  text-align: center;
}

.error {
 color: red;
 font-weight: bold;
 padding: 5px;
}

.error:before {
  Content: "* ";
}

input {
  padding: 5px;
  margin: 3px;
  border-radius: 5px;
}

.login-btn {
  background: lightblue;
  padding: 7px 18px;
  border-radius: 20px;
  font-weight: bold;
  margin-top: 5px;
  cursor: pointer;
}
</style>