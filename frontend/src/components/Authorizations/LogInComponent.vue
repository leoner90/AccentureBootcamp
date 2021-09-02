<template>
  <div class="login-page-wrapper">
    <h2 class="page-header"> 
      <i class="fas fa-user-lock"></i>
      LOG IN
    </h2>
    <div class="error" v-for="error of errors" :key="error.i" >
      {{error}}
    </div>
    <form @submit.prevent="submit" class="login-form">
      <div>
        <input 
          name="login" type="text" 
          :value="login" placeholder="Login" 
          required lazy 
          @input='$emit("update:login", $event.target.value)'
        />
      </div>
      <div>
        <input 
          name="password" type="password" 
          :value="password" placeholder="Password" 
          required lazy 
          @input='$emit("update:password", $event.target.value)'
        />
      </div>
      <button class="login-btn" type="submit"> LOG IN </button>
    </form>
  </div>
</template>

<!--SCRIPTS-->
<script>
export default {
   props:['login' , 'password','errors','submit'] ,
}
</script>

<style scoped>
.login-form {
  width: 20%;
  margin: 0 auto;
}

.page-header {
  margin: 5px;
}

.login-page-wrapper {
  padding: 100px 0 0;
  text-align: center;
  background: #f9f7f7;
  min-height: 100vh;
}

.error {
  letter-spacing: 1px;
  background: hsl(0deg 68% 57% / 88%);;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 0.8vw;
  width: 60%;
  line-height: 20px;
  height: 20px;
  margin: 2px auto;
  padding: 5px;
}

.error:before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900; 
  content: "\f071  ";
}

input {
  padding: 5px;
  margin: 6px;
  border-radius: 5px;
  width: 80%;
}

.login-btn {
  background: #112d4e;
  color: #fff;
  padding: 7px 18px;
  border-radius: 7px;
  font-weight: bold;
  margin-top: 5px;
  cursor: pointer;
  width: 60%;
  display: block;
  margin: 0 auto;
}

.login-btn:hover {
  background: #194273;
}

@media only screen and (max-width: 1300px) {
  .error {
    font-size: 1.5vw;
    width: 70%;
  }
}

@media only screen and (max-width: 1024px) {
  .login-form {
    width: 60%;
  }

  .error {
    font-size: 2vw;
    width: 90%;
  }
}

@media only screen and (max-width: 800px) {
  .login-form {
    width: 80%;
  }
}

</style>