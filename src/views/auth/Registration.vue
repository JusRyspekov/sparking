<template>
    <div style="min-height: 100%">
        <div class="content">
            <div style="width:60%">
                <img src="/images/login.png" style="width:auto;max-height:470px">
            </div>
            <div style="width:40%;padding-left:122px;position:relative">
                <div>
                    <span style="font-size:32px">Welcome to SmartParking!</span>
                    <label style="margin-top:48px;">Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" min="1" required>
                    <div style="color:red" id="error-name">
                    </div>
                    <label>Surname</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Surname" required>
                    <div style="color:red" id="error-lastname">
                    </div>
                    <label>Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" required>
                    <div style="color:red" id="error-email">
                    </div>
                    <label>Number phone</label>
                    <input type="text" name="number" id="number" placeholder="Number phone" max="11" required>
                    <div style="color:red" id="error-number">
                    </div>
                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" min="5" required>
                    <div style="color:red" id="error-password">
                    </div>
                    <button class="btn btn-black" v-on:click="register" style="width:390px;font-size:16px;margin-bottom:24px"><strong>REGISTRATION</strong></button>
                    <span id="auth-text">Do you have an account?
                        <router-link to="/login">
                            <strong style="color:black">Login</strong>
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
    const instance = axios.create({baseURL: 'http://164.92.72.194:80/api/v1'})
  },
  created() {
    //   this.$log()
  },
  methods: {
      async register() {
        let vm = this;
        let name = document.getElementById('name')
        let lastname = document.getElementById('lastname')
        let email = document.getElementById('email')
        let number = document.getElementById('number')
        let password = document.getElementById('password')

        // check validate
        if(
            !this.inputValidate('name') ||
            !this.inputValidate('lastname') ||
            !this.inputValidate('email') ||
            !this.inputValidate('number') ||
            !this.inputValidate('password') 
        ) {
            return;
        }
        
        await this.$api.post('auth/register',{
            first_name: name.value,
            last_name: lastname.value,
            email: email.value,
            phone: number.value,
            password: password.value
        })
        .then( response => {
            let data = response.data;
            vm.login(
                data.email,
                password.value
            )
            return ;
        })
        .catch( error => {
            let data = error.response;

            console.log(data)
            alert(data.data.message)
        })
        
      },
      async login(
        email,
        password
      ) {
            let vm = this;
          console.log('hello world')
            await this.$api.post('auth/login', {
                email: email,
                password: password
            })
            .then( response => {
                let data = response.data;

                Cookies.set('employee_token',data.access_token);
                store.state.sidebar = true;
                vm.$router.push({path:'/home'}); //redirect
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
    input{
        display:block;
        margin-bottom:18px;
        width:390px;
        font-size:16px;
        padding:10px;
        border-radius:8px;
        border: 1px solid #F2F2F2;
    }
    #auth-text{
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
    label{
        display:block;
        margin-bottom:8px;
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
