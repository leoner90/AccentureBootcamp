<template>
    <div class="reg-page-wrapper">
        <h1 class="page-header"> 
            <i class="fas fa-user-friends"></i>
            REGISTRATION
        </h1>
        <div class="error" v-for="error of errors" :key="error.i" >
            {{error}}
        </div>
        <form class="reg-form" @submit.prevent="submit">
            <div>
                <input name="login" type="text" :value="login" placeholder="Login" lazy required
                    pattern="^[A-Za-z0-9]{4,16}$"
                    title="Must Contain a-Z letter and 0-9numbers" 
                    @input='$emit("update:login", $event.target.value)'
                />
            </div>
            <div>
                <input name="email" type="email" :value="email" placeholder="E-mail" lazy 
                    required
                    @input='$emit("update:email", $event.target.value)'
                />
            </div>
            <div>
                <input name="password" type="password" :value="password" placeholder="Password" lazy required
                     pattern="^(?=.*[!@#$%^()*{}?_+-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}$"
                     title="4 or more characters that are of at least one number, and one uppercase and lowercase letter"
                    @input='$emit("update:password", $event.target.value)'
                />
            </div>
            <div>
                <input name="password" type="password" :value="RepeatedPassword" placeholder="Repeat Password" lazy required
                     pattern="^(?=.*[!@#$%^()*{}?_+-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}$"
                     title="4 or more characters that are of at least one number, and one uppercase and lowercase letter"
                    @input='$emit("update:RepeatedPassword", $event.target.value)'
                />
            </div>
            <button class="reg-btn" type="submit"> REGISTRATION </button>
        </form>
    </div>
</template>
<script>
export default {
 props:['login' , 'password','RepeatedPassword','email','errors','submit'] ,
}
</script>


<style scoped>
.reg-page-wrapper {
    padding: 8% 0 0;
  text-align: center;
  background: #f9f7f7;
  min-height: 100vh;
}

.reg-form {
  width: 20%;
  margin: 0 auto ;

}
 @media only screen and (max-width: 1024px) {
    .login-form {
        width: 80%;
    }
 }

.page-header {
  margin: 5px;
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

  @media only screen and (max-width: 1300px) {
    .error {
       font-size: 1.5vw;
       width: 70%;
    }
 }
  @media only screen and (max-width: 1024px) {
    .error {
        font-size: 2vw;
        width: 90%;
    }
 }

.error:before {
  font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f071  ";
}

input {
  padding: 5px;
  margin: 6px;
  border-radius: 5px;
  width: 80%;
}


.reg-btn{
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

.reg-btn:hover {
  background: #194273;
}
</style>