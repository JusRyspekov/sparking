<template>
    <div style="min-height: 100%">
        <div class="content">
            <div style="width:60%">
                <img src="/images/login.png" style="width:auto;max-height:470px">
            </div>
            <div style="width:40%;padding-left:122px;position:relative">
                <div style="position:absolute;bottom:102px;">
                    <span style="font-size:32px">Forgot your password?</span>
                    <label style="margin-top:48px">Email</label>
                    <input type="text" name="email" placeholder="Email">
                    <button class="btn btn-black" style="width:390px;font-size:16px;margin-bottom:24px"><strong>SEND CODE</strong></button>
                    <span id="reg-text"><strong style="color:black">Cancel</strong></span>
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
