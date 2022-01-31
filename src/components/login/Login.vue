<template>
  <div class="login-container">
      <div class="set-login-content" v-if="$root.state.isLogin === false">
          <div class="login-title">
              <h4>Login</h4>
          </div>
          <div class="login-content">
                <div class="label-input">
                    <label><h5>Email</h5></label>
                </div>
                <div class="input-data">
                    <input class="inner-input-data" type="email" v-model="userEmail"/>
                </div>
                <div class="label-input">
                    <label><h5>Password</h5></label>
                </div>
                <div class="input-data">
                    <input class="inner-input-data" type="password" v-model="userPassword"/>
                </div>
                <div class="error-msg" v-if="isError === true">
                    <h5>{{ $root.state.isLoginDesc }}</h5>
                </div>
                <button class="btn btn-secondary" @click="haddleLogin">Login</button>
                <button class="btn btn-secondary" @click="toRegister">Register</button>
          </div>
      </div>
      <div class="login-content" v-if="$root.state.isLogin === true">
          <div class="set-title-login-status"></div>
        <h4>Your are now login with email {{ $root.state.userEmail }}</h4>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            userEmail: null,
            userPassword: null,
            isError: false
            // userData: "null"
        }
    },
    methods:{
        async haddleLogin(){

            if(this.userEmail === null){
                this.isError = true
                this.$root.state.isLoginDesc = "Email must not be empty."
            }
            else if(this.userEmail.includes("@") !== true){
                this.isError = true
                this.$root.state.isLoginDesc = "Make sure you are enter correct email."
            }
            else if(this.userPassword === null){
                this.isError = true
                this.$root.state.isLoginDesc = "password must not be empty."              
            }
            else{

                const headerCongfig = {
                headers:{
                    'Content-Type': 'application/json'
                    }
                }

                const setUserLogin = {
                    email: this.userEmail,
                    password: this.userPassword
                }
                // console.log(setUserLogin)
                

                const userData = await axios.post('http://localhost:3300/userprofile', setUserLogin, headerCongfig);
                // console.log(userData)
                if(userData.data.statusLogin === true){
                    this.$root.state.userPhoto = userData.data.photo;
                    this.$root.state.isLoginDesc = userData.data.statusDesc;
                    localStorage.setItem("email",userData.data.email);
                    localStorage.setItem("islogin", true);
                    localStorage.setItem("firstname", userData.data.firstname);
                    localStorage.setItem("lastname", userData.data.lastname);
                    alert(userData.data.statusDesc);
                    this.$router.push('/Profile')
                }else{
                    this.isError = true
                    this.$root.state.isLogin = false;
                    this.$root.state.isLoginDesc = userData.data.statusDesc
                }

                // console.log(userData);
                // this.userData = userData.data
            }
            
            
        },
        toRegister(){
            this.$router.push('/register')
        }
    }
}
</script>

<style scoped>
.login-container{
    text-align: center;
    margin-top: 50px;
    
}

.login-title{
    margin-bottom: 45px;
    color: rgb(113, 111, 111);
}

.label-input{
    margin-top: 40px;
    color: rgb(113, 111, 111);
}
.input-data{
     margin-top: 15px;
}
.btn{
    margin-top: 35px;
    width: 20%;
    border-radius: 30px;
    margin-left: 1rem;
    margin-right: 1rem;
}
.inner-input-data{
    width: 60%;
    border: 1px solid rgb(181, 181, 181);
    border-radius: 8px;
}
.login-content{
    background-color: rgb(218, 216, 216);
    width: 35%;
    height: 400px;
    margin: auto;
    padding-top: 1px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.set-title-login-status{
    text-align: center;
    margin-top: 9rem;
}

.error-msg{
    text-align: center;
    color: red;
    margin-top: 1rem;
}

@media screen and (max-width: 820px){
.login-container{
    text-align: center;
    margin-top: 50px;
    
}

.login-title{
    margin-bottom: 45px;
    color: rgb(113, 111, 111);
}

.label-input{
    margin-top: 40px;
    color: rgb(113, 111, 111);
}
.input-data{
     margin-top: 15px;
}
.btn{
    margin-top: 35px;
    width: 30%;
    border-radius: 30px;
    margin-left: 1rem;
    margin-right: 1rem;
}
.inner-input-data{
    width: 60%;
    border: 1px solid rgb(181, 181, 181);
    border-radius: 8px;
}
.login-content{
    background-color: rgb(218, 216, 216);
    width: 80%;
    height: 400px;
    margin: auto;
    padding-top: 1px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.set-title-login-status{
    text-align: center;
    margin-top: 9rem;
}

.error-msg{
    text-align: center;
    color: red;
    margin-top: 1rem;
}

 }
</style>