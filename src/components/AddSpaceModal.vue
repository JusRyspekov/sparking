<template>
    <div class="modal" id="modal">
        <div class="modal-window">
            <select name="place_id" id="parking_place">
                <option>Select park area</option>
                <option v-for="parkingPlace in parkingPlaces" :value="parkingPlace.id">
                    {{'Number: ' + parkingPlace.number + ' Name: ' + parkingPlace.parking_zone_title}}
                </option>
            </select><br><br>
            <select name="tax_id" id="tax">
                <option>Select tax</option>
                <option v-for="t in tax" :value="t.id">
                    {{'Duration: ' + t.title + 'Price: ' + t.price}}
                </option>
            </select><br><br>
            <button class="btn btn-black" @click="createParkingSpace" style="width:100%"><strong>Add parking spaces</strong></button>
            <button class="btn-close" @click="close">x</button>
            <div class="modal-name"><strong style="font-size:24px">Add parking spaces</strong></div>
        </div>
        <div class="overlay">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tax: null,
            parkingPlaces: null
        }
    },
    created() {
        this.setTax();
        this.setParkingPlaces();
    },
    methods: {
        setTax() {
            console.log('setTax')
            let vm = this;
            this.$api.get('tax')
            .then( response => {
                let data = response.data;
                console.log(data)
                
                vm.tax = data;
            })
        },
        setParkingPlaces() {
            let vm = this;
            this.$api.get('parking-place')
            .then( response => {
                vm.parkingPlaces = response.data;
            })
        },
        close() {
            this.$emit('close')
        },
        createParkingSpace() {
            let parking_place_id = document.getElementById('parking_place')
            let tax_id = document.getElementById('tax')

            this.$api.post('personal/buy-ticket',{
                parking_place_id: Number(parking_place_id.value),
                tax_id: Number(tax_id.value)
            })
            .then( response => {
                let data = response.data;

                this.$emit('close')
                this.$emit('setParkingSpaces')
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
    select{
        background: #FFFFFF;
        border: 1px solid #F2F2F2;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 16px;
        width:100%;
        color:#898989;
    }
</style>
