<template>
    <div style="min-height: 100%">
        <div class="content">
            <div style="width:60%">
                <img src="/images/login.png" style="width:auto;max-height:470px">
            </div>
            <div style="width:40%;padding-left:122px;position:relative">
                <div style="position:absolute;bottom:102px;">
                    <span style="font-size:32px">Welcome to SmartParking!</span>
                    <label style="margin-top:48px">Email or phone number</label>
                    <input type="text" name="email" id="email" placeholder="Email or phone number" required>
                    <div style="color:red" id="error-email">
                    </div>
                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" min="8" required>
                    <div style="color:red" id="error-password">
                    </div>
                    <span style="display:block; font-style: normal; font-size: 14px; color: #666666;margin-bottom: 8px">Forgot your password?</span>
                    <button class="btn btn-black"  v-on:click="login" style="width:390px;font-size:16px;margin-bottom:24px"><strong>Login</strong></button>
                    <span id="reg-text">Do you have an account? 
                        <router-link to="/registration">
                            <strong style="color:black">Resgistration</strong>
                        </router-link>
                    </span>
                </div>
            </div>
        </div>
        <footer class="partners">
            <img src="/images/footer.png" class="partners-image">
        </footer>
    </div>
</template>
<script>
import store from '@/store'
import Cookies from "js-cookie";

export default {
  beforeCreate() {
    store.state.sidebar = false
  },
  methods: {
    async login() {
        let vm = this;
        let email = document.getElementById('email')
        let password = document.getElementById('password')

        // check validate
        if(
            !this.inputValidate('email') ||
            !this.inputValidate('password') 
        ) {
            return;
        }

        await this.$api.post('auth/login', {
            email: email.value,
            password: password.value
        })
        .then( response => {
            let data = response.data;

            Cookies.set('employee_token',data.access_token);
            store.state.sidebar = true;
            vm.$router.push({path:'/home'}); //redirect
        })
        .catch( error => {
            let data = error.response;

            alert(data.data.message)
        })
    },
    inputValidate(id) {
    const nameInput = document.querySelector('#' + id);
    let errorDiv = document.getElementById("error-" + id);

    if (!nameInput.checkValidity()) {
        errorDiv.innerHTML = nameInput.validationMessage;
        setTimeout(() => {
            errorDiv.innerHTML = '';
        }, 2000);

        return false;
    }
    return true;
    },
  }
}
</script>
<style>
    #reg-text{
        display:block;
        height: 16px;
        left: 97.5px;
        top: 352px;

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height */

        color: #666666;
    }
    .btn{
        border-radius: 8px;
        padding: 15px;
        border: 0;
    }
    .btn-black{
        background-color:#333333;
        color:white;
    }
    .content{
        padding: 62px 142px 66px 80px;
        display: flex;
        flex-wrap: wrap;
    }
    .partners{
        width: 100%;
        background-color: #DEE7F599;
        padding: 56px 185px 84px 185px; 
        position: relative;
        bottom: 0;
        width: 100%;
    }
    .partners-image{
        width: 100%;
    }
</style>
