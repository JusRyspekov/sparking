<template>
    <div>
        <div class="filter-header">
            <div class="float-left filter-name">
                Filter
            </div>
            <div class="float-right">
                <select class="btn" @change="filterEntries" id="selected_period" style="padding-right:148px;color:#666666;margin-right:16px;background:#F2F2F2">
                    <option value="all">
                        Select time
                    </option>
                    <option value="day">
                        one day
                    </option>
                    <option value="week">
                        one week
                    </option>
                    <option value="manth">
                        one month
                    </option>
                </select>
                <select class="btn" @change="filterEntries" id="car" style="padding-right:148px;color:#666666;background:#F2F2F2;">
                    <option value="">
                        Choose a car
                    </option>
                    <option v-for="car in cars" :value="car.id">
                        {{car.title}}
                    </option>
                </select>
            </div>
        </div><br>
        <div class="timetracker-content">
            <div id="car-list">
                <div class="car-div" v-for="entry in entries">
                    <div class="car-name">
                        {{entry.car_title}}
                    </div>
                    <div class="car-time">
                        {{entry.entry_time}} 
                    </div>
                    <div class="car-space">
                        {{entry.parking_zone_title}}
                    </div>
                    <div class="car-button">
                        <div>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81 0H13.191C16.28 0 18 1.78 18 4.83V15.16C18 18.26 16.28 20 13.191 20H4.81C1.77 20 0 18.26 0 15.16V4.83C0 1.78 1.77 0 4.81 0ZM5.08 4.66V4.65H8.069C8.5 4.65 8.85 5 8.85 5.429C8.85 5.87 8.5 6.22 8.069 6.22H5.08C4.649 6.22 4.3 5.87 4.3 5.44C4.3 5.01 4.649 4.66 5.08 4.66ZM5.08 10.74H12.92C13.35 10.74 13.7 10.39 13.7 9.96C13.7 9.53 13.35 9.179 12.92 9.179H5.08C4.649 9.179 4.3 9.53 4.3 9.96C4.3 10.39 4.649 10.74 5.08 10.74ZM5.08 15.31H12.92C13.319 15.27 13.62 14.929 13.62 14.53C13.62 14.12 13.319 13.78 12.92 13.74H5.08C4.78 13.71 4.49 13.85 4.33 14.11C4.17 14.36 4.17 14.69 4.33 14.95C4.49 15.2 4.78 15.35 5.08 15.31Z" fill="#333333"/>
                            </svg>

                            <svg width="20" height="20" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.07552 0H6.9369C8.55158 0 9.67892 1.11269 9.67892 2.70728V7.29272C9.67892 8.88731 8.55158 10 6.9369 10H3.07552C1.46084 10 0.333496 8.88731 0.333496 7.29272V2.70728C0.333496 1.11269 1.46084 0 3.07552 0ZM12.3055 1.58599C12.5982 1.43709 12.9415 1.45266 13.2208 1.62863C13.5002 1.80393 13.6668 2.10849 13.6668 2.44149V7.55892C13.6668 7.89259 13.5002 8.19648 13.2208 8.37178C13.0682 8.46721 12.8975 8.51594 12.7255 8.51594C12.5822 8.51594 12.4388 8.4821 12.3048 8.41374L11.3175 7.9156C10.9521 7.73015 10.7255 7.3579 10.7255 6.94436V3.05536C10.7255 2.64115 10.9521 2.2689 11.3175 2.08481L12.3055 1.58599Z" fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div style="text-align:center;padding-top:24px">
                    <div class="pagination">
                        <button class="btn" @click="prevPage" style="padding-left:28px;padding-right:28px">
                            Назад
                        </button>
                        <button
                            class="btn btn-transparent"
                            v-for="page in total_pages"
                            :key="page"
                            @click="changePage(page)"
                        >
                            {{ page }}
                        </button>
                        <button @click="nextPage" class="btn btn-black" style="padding-left:28px;padding-right:28px">
                            Далее
                        </button>
                    </div>
                </div>
            </div>
            <!--<div id="space-list">
                <div class="space-div" v-for="z in zone" @click="setFilterZone(z.id)">
                    <img :src="'http://164.92.72.194:8080/images/' +z.image" class="space-img">
                    <div class="space-text">
                        <div class="space-name">{{z.title}}</div>
                    </div>
                </div>
            </div>-->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                entries: null,
                spaces: null,
                cars: null,
                zone: null,
                filter_zone: null,
                page: 0,
                size: 8,
                total_pages: 0
            }
        },
        created() {
            this.setEntries();
            this.setParkingZone();
            this.setCars();
        },
        methods: {
            setCars() {
                let vm = this;
                this.$api.get('personal/my-cars')
                .then(response => {
                    vm.cars = response.data;
                })
            },
            changePage(page) {
                this.page =  page - 1 
                this.filterEntries();
            },
            nextPage() {
                if( this.page != (this.total_pages - 1) ) {
                    this.page = this.page + 1;
                    this.filterEntries();
                }
            },
            prevPage() {
                console.log(this.page)
                if( this.page != 0 ) {
                    this.page = this.page - 1;
                    this.filterEntries();
                }
            },
            setEntries() {
                let vm = this;
                let period = document.getElementById('selected_period')
                let car    = document.getElementById('car')

                this.$api.get('personal/my-entry-history', {
                    params: {
                        size: this.size
                    }
                })
                .then(response => {
                    vm.entries = response.data.rows;
                    vm.total_pages = Math.ceil(response.data.total / vm.size);
                })
            },
            setFilterZone(id) {
                this.filter_zone = id;

                this.filterEntries();
            },
            filterEntries() {
                let vm = this;
                let period = document.getElementById('selected_period');
                let car    = document.getElementById('car')
                let params = {};
                params.size = this.size;
                params.page = this.page;

                if( car.value != '' ) {
                    params.car_id = car.value;
                    params.page = 0;
                }
                if( this.filter_zone != null ) {
                    params.parking_zone_id = this.filter_zone;
                }

                this.$api.get('personal/my-entry-history', {
                    params: params
                })
                .then(response => {
                    vm.entries = response.data.rows;
                    vm.total_pages = Math.ceil(response.data.total / vm.size);
                })
            },
            setParkingZone() {
                let vm = this;
                this.$api.get('parking-zone')
                .then( response => {
                    vm.zone = response.data;
                })
            },
        }
    }
</script>
<style scoped>
    .space-city{
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
    }
    .space-name{
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
    }
    .space-text{
        position:absolute;
        left: 40px;
        top: 27px;
        color:white;
    }
    .space-img{
        width: 100%;
        height: 103px;
        overflow: hidden;
        border-radius: 8px  ;
    }
    .space-div{
        width:313px;
        height:103px;
        position:relative;
        margin: 8px 0 8px 0;
    }
    #space-list{
        padding-left: 74px;
        display: inline-block;
    }
    .timetracker-content{
        display:flex;
    }
    .btn-transparent{
        background-color: transparent;
        border:0;
    }
    .pagination{
        background:#F8F8F8;
        padding:4px;
        border-radius: 8px;
        width: auto;
        display: inline-block;
    }
    .car-space{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        width: 25%;
        text-align: center;
    }
    .car-time{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #666666;
        width:25%;
        text-align: center;
    }
    .car-name{
        width:25%;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
    }
    .car-div{
        background: #F8F8F8;
        border-radius: 8px;
        width:100%;
        padding: 20px 0 20px 0;
        display:flex;
        margin: 8px 0 8px 0;
    }
    #car-list{
        width:100%;
    }
    .filter-name{
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        margin-bottom:24px;
    }
    .filter-header{
        width: 100%;
        position:relative;
        padding-bottom: 40px;
    }
</style>
