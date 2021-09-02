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
import RegForm  from '@/components/Authorizations/RegComponent.vue';

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
    /* Register a user , Validations html/js/nodejs, 
     If data correct mutation will reload a page ,and router will redirect to Home otherwise display Errors */    
    async submit(){ 
      this.errors= [];
      let passwordErr = 'Password Must Have a Capital letter,a number a spec simbol(!@#$%^()*{}?_+-) , be 5 char long';
      //Err check
      let pattern  = new RegExp("^[A-Za-z0-9]{4,16}$");
      !pattern.test(this.login) ? this.errors.push('Login must contain only Letters or Numbers'):  null ; 
      pattern = new RegExp("^(?=.*[!@#$%^()*{}?_+-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}$" );
      !pattern.test(this.password) ? this.errors.push( passwordErr ): null ; 
      this.password != this.RepeatedPassword ? this.errors.push('Passwords Don\'t Match'): null ; 
      pattern = new RegExp("^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+.[a-zAZ]");
      !pattern.test(this.email) ? this.errors.push('incorect email'): null;
      //If no Err try to validate and reg on server side
      if(this.errors.length == 0) {
        let obj = { 
          whatToCall: 'reg', 
          login: this.login, 
          email: this.email, 
          password: this.password, 
          RepeatedPassword:this.RepeatedPassword 
        };
        await this.$store.dispatch("UserRegistration", obj);
        this.errors = this.$store.state.autorisationErrors;
      }
    }
  },
  components: {
    RegForm,
  }
}
</script>