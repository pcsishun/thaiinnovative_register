<template>
    <div class="register-contrainer">
        <div class="register-content">
            <div class="title-content">
                <h4>Register</h4>
            </div>
            <div class="body-content">
                <div class="set-body">
                    <form @submit.prevent="haddleSubmit">
                        <div class="avatar-container">
                            <label for="avatar-upload" v-if="image === null"><img width="100" height="100"  src="../../assets/user.png"/></label>
                             <label for="avatar-upload" v-if="image !== null"><img class="image-set-load" width="100" height="100"  :src="image"/></label>
                            <input id="avatar-upload" type="file" @change="showFilePreview" />
                        </div>
                        <div class="firstname-container">
                            <div class="set-label">
                                <label>Firstname</label>
                            </div>
                            <div class="set-input">
                                <input class="set-on-input" type="text" v-model="firstName" required/>
                            </div>
                        </div>
                        <div class="lastname-contianer">
                            <div class="set-label">
                                <label>Lastname</label>
                            </div>
                            <div class="set-input">
                                <input class="set-on-input" type="text" v-model="lastName" required/>
                            </div>
                        </div>
                        <div class="email-contianer">
                            <div class="set-label">
                                <label>Email</label>
                            </div>
                            <div class="set-input">
                                <input class="set-on-input" type="email" v-model="email" required/>
                            </div>
                        </div>
                        <div class="password-container">
                            <div class="set-label">
                                <label>Password</label>
                            </div>
                            <div class="set-input">
                                <input class="set-on-input" type="password" v-model="password" required/>
                            </div>
                        </div>
                        <div class="confirm-password-container">
                            <div class="set-label">
                                <label>Confirm password</label>
                            </div>
                            <div class="set-input">
                                <input class="set-on-input" type="password" v-model="confirmPassword" required/>
                            </div>
                        </div>
                        <div class="error-msg-container" v-if="errorReplyp !== null">
                            <h5>{{ errorReply }}</h5>
                        </div>
                        <div class="btn-submit">
                            <input class="btn btn-primary" type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="footer-set"> 

        </div>
    </div>
</template>

<script>
// import axios from 'axios'

export default {
    data(){
        return{
            avatar: null,
            firstName: null,
            lastName: null,
            email:null,
            password: null,
            confirmPassword:null,
            errorReply:null,
            image: null
            
        }
    },
    methods:{
        haddleSubmit(){
            if(this.password !== this.confirmPassword){
                this.errorReply = "password not match"
            } 
        },
        showFilePreview(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
            },
        createImage(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
            }
    }
}
</script>

<style scoped>
.title-content{
    padding-bottom: 1rem;
}

.register-content{
    text-align: center;
    margin-top: 50px;
}

.avatar-container > input{
    display: none;
}

.error-msg-container > h5{
    color: red;
    margin-top: 5px;
}

.image-set-load{
    border-radius: 50px;
}

.avatar-container,.btn-submit, .firstname-container, .lastname-contianer, .email-contianer, .password-container, .confirm-password-container{
    margin-top: 20px;
}

.body-content{
    background-color: rgb(218, 216, 216);
    width: 50%;
    height: 600px;
    margin: auto;
    padding-top: 1rem;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.btn{
    border-radius: 10px;
}
.footer-set{
     height: 50px;
}
.set-on-input{
    border: none;
    border-radius: 8px;
    width: 50%;
}
</style>