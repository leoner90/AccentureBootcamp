<!-- Provide form for user log in , displays errors , in case if users is loged in redirects to main page -->
<template>
  <LogInForm 
    v-model:login = "login"
    v-model:password = "password"
    :errors = "errors"
    :submit="submit"  
  />
</template>

<script>
import LogInForm  from '@/components/LogInComponent.vue';

export default {
data() {
    return {
        login: '',
        password: '',
        errors: [],
    }
  },
  methods: {
    //Logins user , if no error redirects to home page , otherwise displays them.
    async submit(){
      this.errors = [];
      // Error Check ПРОБЕЛЫ
      let pattern  = new RegExp("^[A-Za-z0-9]{4,16}$");
      !pattern.test(this.login) ? this.errors.push('Login must contain only Letters or Numbers'): null ; 
      pattern = new RegExp("^(?=.*[!@#$%^()*{}?_+-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}$" );
      !pattern.test(this.password) ? this.errors.push('password must contain 1 Upper one Lower case and 5 simols + spec simbol'):  null ; 
      if(this.errors.length == 0){
         let data = {whatToCall: 'login', login: this.login, password: this.password };
        await this.$store.dispatch("LogingIn", data);
        let result=  this.$store.getters.IslogedInGetter; 
        if (result) {
          location.reload();
        } else {
          this.errors = this.$store.state.autorisationErrors;
        }
      }
     
    },
    //Cheack is user loged in on mounted , if so redirects to the main page
    async IsUserLogedIn() {
       let isLoged =  this.$store.state.isLogedIn;
      if (isLoged) {
        console.log(isLoged)
        this.$router.push('/');
      }
    }
  },
  components:{
    LogInForm,
  },
  //On Mount
  async mounted() {
      await this.IsUserLogedIn();
  }
  
}
</script>