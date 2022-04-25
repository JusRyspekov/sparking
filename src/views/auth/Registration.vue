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
                    <input type="text" id="name" name="name" placeholder="Name">
                    <label>Surname</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Surname">
                    <label>Email</label>
                    <input type="text" name="email" id="email" placeholder="Email">
                    <label>Number phone</label>
                    <input type="text" name="number" id="number" placeholder="Number phone">
                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password">
                    <button class="btn btn-black" v-on:click="register" style="width:390px;font-size:16px;margin-bottom:24px"><strong>REGISTRATION</strong></button>
                    <span id="auth-text">Do you have an account?  <strong style="color:black">Login</strong></span>
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

export default {
  beforeCreate() {
    store.state.sidebar = false
    const instance = axios.create({baseURL: 'http://164.92.72.194:80/api/v1'})
  },
  methods: {
      register() {
        let name = document.getElementById('name')
        let lastname = document.getElementById('lastname')
        let email = document.getElementById('email')
        let number = document.getElementById('number')
        let password = document.getElementById('password')
        
        axios.post('http://164.92.72.194:80/api/v1/auth/register',{
            firstName: name.value,
            lastName: lastname.value,
            email: email.value,
            phone: number.value,
            password: password.value
        })
        .then( response => {
            let data = response.data;
            console.log(data)
        })
      }
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
