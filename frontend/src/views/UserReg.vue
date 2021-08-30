<!-- Provide form for user registration , displays errors , in case if users is loged in redirects to main page -->
<template>
  <RegForm     
    v-model:login = "login"
    v-model:email = "email"
    v-model:password = "password"
    v-model:RepeatedPassword = "RepeatedPassword"
    :errors = "errors"
    :submit="submit"  
  />
</template>

<script>
import RegForm  from '@/components/RegComponent.vue';

export default {
data() {
    return {
      login: '',
      email: '',
      password: '',
      RepeatedPassword:'',
      errors: [],
    }
  },
  methods: {
    //Register a user , if no error reloads page (redirects to home page) , otherwise displays errors.
    //if last error = null
    async submit(){ 
      this.errors= [];   
      let pattern  = new RegExp("^[A-Za-z0-9]{4,16}$");
      !pattern.test(this.login) ? this.errors.push('Login must contain only Letters or Numbers'):  null ; 
      pattern = new RegExp("^(?=.*[!@#$%^()*{}?_+-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}$" );
      !pattern.test(this.password) ? this.errors.push('password must contain 1 Upper one Lower case and 5 simols + spec simbol'): null ; 
      !pattern.test(this.RepeatedPassword) ? this.errors.push('Repeated Password must contain 1 Upper one Lower case and 5 simols + spec simbol'): null ; 
      this.password != this.RepeatedPassword ? this.errors.push('Passwords Don\'t Match'): null ; 
      pattern = new RegExp("^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+.[a-zAZ]");
      !pattern.test(this.email) ? this.errors.push('incorect email'):  null ; 
      
        if(this.errors.length == 0){
        let obj = {whatToCall: 'reg' , login: this.login  , email: this.email, password: this.password ,RepeatedPassword:this.RepeatedPassword };
        await this.$store.dispatch("UserRegistration", obj);
        let result = this.$store.state.isLogedIn; 
        if (result == true) {
          location.reload();
        } else {
        this.errors = this.$store.state.autorisationErrors;
        }
      }
    },
    //Cheack is user loged in on mounted , if so redirects to the main page
    async IsUserLogedIn() {
      let isLoged = this.$store.state.isLogedIn;
      if (isLoged) {
        this.$router.push('/');
      }
    }
  },
  //On Mount
  mounted() {
      this.IsUserLogedIn();
  },
  components: {
    RegForm,
  }
}
</script>