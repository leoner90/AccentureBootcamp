<!-- Provide form for user registration , displays errors , in case if users is loged in redirects to main page -->
<template>
    <div class="page-wrapper">
      <h1 class="page-header">REGISTRATION</h1>
      <hr>
      <div class="error" v-for="error of errors" :key="error.i" >
        {{error}}
      </div>
      <form @submit.prevent="submit">
        <div>
          <input name="login" type="text" v-model="login" placeholder="login" lazy/>
        </div>
        <div>
          <input name="email" type="text" v-model="email" placeholder="E-mail" lazy/>
        </div>
        <div>
          <input name="password" type="password" v-model="password" placeholder="Password" lazy/>
        </div>
        <button class="reg-btn" type="submit"> REGISTRATION </button>
      </form>
  </div>
</template>

<script>
//SERVER SIDE FUNCTIONS IMPORT
import RegistrationFun from '@/ServerSideFunctions/RegistrationFun.vue'
import IsUserLogedIn from '@/ServerSideFunctions/IsUserLogedInFun.vue';

export default {
data() {
    return {
      login: '',
      email: '',
      password: '',
      errors: '',
      obj: {},
    }
  },
  methods: {
    //Register a user , if no error reloads page (redirects to home page) , otherwise displays errors.
    async submit(){    
      this.obj = {login: this.login  , email: this.email, password: this.password }
      let result = await RegistrationFun.Registration(this.obj);
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
        await this.$router.push('/');
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

.reg-btn {
  font-weight: bold;
  background: lightblue;
  padding: 7px 18px;
  border-radius: 20px;
  margin-top: 5px;
  cursor: pointer;
}
</style>