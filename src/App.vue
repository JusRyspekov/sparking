<template>
    <navbar></navbar>
    <div  class="app" style="display:flex;padding:32px">
        <sidebar v-if="$store.state.sidebar"></sidebar>
        <div style="width:100%;margin-top:32px">
        <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default {
    components: {
        Navbar,
        Sidebar
    }
}
</script>
<style>

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
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
    .btn-white{
        background: #FFFFFF;
    }

    .float-left{
        float:left;
    }
    .float-right{
        float:right;
    }
</style>
