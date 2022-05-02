<template>
    <div class="modal" id="modal">
        <div class="modal-window">
            <input type="text" id="name" placeholder="car name" required>
            <input type="text" id="number" placeholder="Number of the car" required>
            <button class="btn btn-black" @click="createCar" style="width:100%"><strong>Add car</strong></button>
            <button class="btn-close" @click="close">x</button>
            <div class="modal-name"><strong style="font-size:24px">Add car</strong></div>
        </div>
        <div class="overlay">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        close() {
            this.$emit('close')
        },
        createCar() {
            let name = document.getElementById('name')
            let number = document.getElementById('number')

            this.$api.post('personal/add-car',{
                title: name.value,
                plate: number.value
            })
            .then( response => {
                let data = response.data;

                this.$emit('close')
                this.$emit('setCars')
            })
        }
    }
}
</script>
<style scoped>
    .modal{
        position:fixed;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        z-index: 2;
        display:flex;
        align-items: center;
        justify-content:center;
    }
    .modal .overlay {
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:#000;
        opacity: 0.7;
    }
    .modal-window{
        position:relative;
        z-index: 3;
        width: 689px;
        padding: 104px 24px 24px 24px;
        background: #FFFFFF;
        border-radius: 16px;
        box-shadow: 0px 0px 16px rgba(51, 51, 51, 0.24);
    }
    .btn-close{
        width:26px;
        height: 26px;
        background: #666666;
        border-radius: 4px;
        position:absolute;
        top:24px;
        right: 24px;
        color:white;
        border:0;
    }
    .modal-name{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px 40px;

        position: absolute;
        width: 319px;
        height: 48px;
        left: -16px;
        top: 16px;

        background: #1776BB;
        border-radius: 8px;
        color:white;
    }
    input{
        background: #FFFFFF;
        border: 1px solid #F2F2F2;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 16px;
        width:100%;
    }
</style>
