<template>
    <div class="profile-container">
        <div class="title-content">
             <h3>welcome back: {{ $root.state.userFirstName }} {{ $root.state.userLastName }}</h3>
        </div>
        <div class="profile-content">
           <div class="title-profile">
               <span class="set-logout"><button class="btn btn-danger" @click="haddleLogout">Logout</button></span>
               <h4>Edit your profile </h4>
           </div>
           <div class="input-container">
                    <div class="input-content">
                        <div class="set-label">
                            <label>firstname</label>
                        </div>
                        <div class="set-input">
                            <input class="set-input" type="text" v-model="newFirstName"/>
                        </div>
                    </div>
                    <div class="input-content">
                        <div class="set-label">
                            <label>lastname</label>
                        </div>
                        <div class="set-input">
                            <input class="set-input"  type="text" v-model="newLastName"/>
                        </div>
                    </div>
                    <div class="input-content">
                        <div class="set-label">
                            <label>password</label>
                        </div>
                        <div class="set-input">
                            <input class="set-input"  type="password" v-model="newPassword"/>
                        </div>
                    </div>
                    <div class="input-content">
                        <div class="set-label">
                            <label>confirm password</label>
                        </div>
                        <div class="set-input">
                            <input class="set-input"  type="password" v-model="confirmPassword"/>
                        </div>
                    </div>
                    <div v-if="errorReply !== null" class="error-reply">
                        <h5 style="color: red;">{{ errorReply }}</h5>
                    </div>
                    <div class="input-content">
                        <button class="btn btn-primary" @click="haddleUpdate">Upldate</button>
                    </div>
               
           
           </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';


export default {
    data(){
        return{
            newFirstName: null,
            newLastName: null,
            newPassword: null,
            confirmPassword: null,
            email:null,
            errorReply: null
        }
    },
    methods:{
 
        async haddleUpdate(){

            if(this.newPassword !== this.confirmPassword){
                this.errorReply = "password not match."
            }
            else{
                const headerCongfig = {
                headers:{
                    'Content-Type': 'application/json',
                    'x-access-token': Cookies.get("tai_token")
                    }
                }

                const bodyData = {
                    photo: null,
                    firstName: this.newFirstName,
                    lastName: this.newLastName,
                    password: this.newPassword,
                    email:  this.email
                }
               await axios.put('http://localhost:3300/updateprofile',bodyData, headerCongfig)
                .then((res) => {
                    alert("your data aleardly update.");
                    alert("please login agian.");
                    Cookies.remove("tai_token");
                    Cookies.remove("tai_data");
                    this.$router.push('/');
                    console.log(res)
                    
                }).catch((err) => {
                    alert("please login to update profile!")
                    Cookies.remove("tai_token");
                    Cookies.remove("tai_data");
                    this.$router.push('/')
                    console.log(err)
                })
            }
        },
        haddleLogout(){
            Cookies.remove("tai_token");
            Cookies.remove("tai_data");
            this.$router.push('/');
        },
        async checkAuth(){
            
            try{
                const isData = JSON.parse(Cookies.get('tai_data'));
                this.newFirstName = isData.firstname;
                this.newLastName = isData.lastname;
                this.email = isData.email;

                const headerCongfig = {
                    headers:{
                        'Content-Type': 'application/json',
                        }
                }
                const payload = {
                    token: Cookies.get("tai_token")
                 }

                const checkingToken = await axios.post('http://localhost:3300/checkoauth',payload, headerCongfig)

                if(checkingToken.statusLogin === false){
                    Cookies.remove("tai_token");
                    Cookies.remove("tai_data");
                    alert("please login to access this pages.");
                    this.$router.push('/');
                }else{
                    console.log("ckecked")
                }
            }catch(err){
                Cookies.remove("tai_token");
                Cookies.remove("tai_data");
                alert("please login to access this pages.");
                this.$router.push('/');
            }
            
        }
    },
    created(){
        this.checkAuth();
    }
}
</script>

<style scoped>
.profile-container{
    text-align: center;
    margin-top: 50px;
    color: rgb(113, 111, 111);
}
.title-content{
    margin-bottom: 50px;
}
.set-logout > button{
        position:absolute;
        left: 10px;
        top: 0px;
        border-radius: 30px;
}
.title-profile{
    padding-top: 1rem;
}
.profile-content{
    padding-bottom: 1rem;
    background-color: rgb(218, 216, 216);
    width: 45%;
    margin: auto;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    height: 100%;
}
.set-input{
        border: none;
        width: 60%;
        margin: auto;
        border-radius: 8px;
    }

.input-content{
    margin-top: 10px;
}

@media screen and (max-width: 820px){
    .profile-container{
        text-align: center;
        margin-top: 50px;
        color: rgb(113, 111, 111);
    }
    .title-content{
        margin-bottom: 50px;
    }
    .set-logout > button{
        position:absolute;
        left: 10px;
        top: 0px;
        font-size: 10px;
        border-radius: 30px;
    }
    .title-profile{
        padding-top: 1rem;
    }
    .profile-content{
        padding-bottom: 1rem;
        background-color: rgb(218, 216, 216);
        width: 90%;
        margin: auto;
        border-radius: 30px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        height: 100%;
    }
    .set-input{
        border: none;
        border-radius: 8px;
    }

    .input-content{
        margin-top: 10px;
    }
}
</style>