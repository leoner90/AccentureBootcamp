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
import LogInForm  from '@/components/Authorizations/LogInComponent.vue';

export default {
  data() {
    return {
      login: '',
      password: '',
      errors: [],
    }
  },
  methods: {
    /* Login user , Validation on Server Side , if data correct mutation will reload a page ,and router will redirect to Home,
      otherwise displays Errors */
    async submit(){
      let data = { whatToCall: 'login', login: this.login, password: this.password };
      await this.$store.dispatch("LogingIn", data);
      this.errors = this.$store.state.autorisationErrors;
    },
  },
  components: {
    LogInForm,
  },
}
</script>