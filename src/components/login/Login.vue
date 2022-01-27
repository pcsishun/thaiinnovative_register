<template>
  <div class="login-container">
      <div class="set-login-content">
          <div class="login-title">
              <h4>Login</h4>
          </div>
          <div class="login-content">
              <form>
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
                <button class="btn btn-secondary">Login</button>
                <button class="btn btn-secondary">Register</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userEmail: null,
            userPassword: null
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
    width: 150px;
    border-radius: 30px;
    margin-left: 1rem;
    margin-right: 1rem;
}
.inner-input-data{
    width: 350px;
    border: 1px solid rgb(181, 181, 181);
    border-radius: 8px;
}
.login-content{
    background-color: rgb(218, 216, 216);
    width: 35%;
    height: 350px;
    margin: auto;
    padding-top: 1px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

 
</style>