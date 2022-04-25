<template>
    <div>
        <div class="filter-header">
            <div class="float-left filter-name">
                Filter
            </div>
            <div class="float-right">
                <select class="btn" style="padding-right:148px;color:#666666;margin-right:16px;background:#F2F2F2">
                    <option>
                        Select time
                    </option>
                    <option>
                        one day
                    </option>
                    <option>
                        one week
                    </option>
                    <option>
                        one month
                    </option>
                    <option>
                        one year
                    </option>
                </select>
                <select class="btn" style="padding-right:148px;color:#666666;background:#F2F2F2;">
                    <option>
                        Choose a car
                    </option>
                    <option>
                        Zhusan
                    </option>
                    <option>
                        Leha
                    </option>
                    <option>
                        My car
                    </option>
                </select>
            </div>
        </div><br>
        <div class="timetracker-content">
            <div id="car-list">
                <div class="car-div" v-for="car in cars">
                    <div class="car-name">
                        {{car.name}}
                    </div>
                    <div class="car-time">
                        {{car.time}} 
                    </div>
                    <div class="car-space">
                        {{car.space}}
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
                        <button class="btn" style="padding-left:28px;padding-right:28px">
                            Назад
                        </button>
                        <button class="btn btn-transparent">
                            1
                        </button>
                        <button class="btn btn-transparent">
                            2
                        </button>
                        <button class="btn btn-transparent">
                            3
                        </button>
                        <button class="btn btn-transparent">
                            ...
                        </button>
                        <button class="btn btn-transparent">
                            14
                        </button>
                        <button class="btn btn-black" style="padding-left:28px;padding-right:28px">
                            Далее
                        </button>
                    </div>
                </div>
            </div>
            <div id="space-list">
                <div class="space-div" v-for="space in spaces">
                    <img :src="space.img" class="space-img">
                    <div class="space-text">
                        <div class="space-name">{{space.name}}</div>
                        <div class="space-city">{{space.city}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                cars: [
                    {id: 1, name:'My car', time: '12.23/07:20 PM ', space: 'Green Line'},
                    {id: 2, name:'Milana', time: '12.23/07:20 PM ', space: 'Asyl Mura'},
                    {id: 3, name:'Zhanat', time: '12.23/07:20 PM ', space: 'Asyl Mura'},
                    {id: 4, name:'Milana', time: '12.23/07:20 PM ', space: 'Green Line'},
                    {id: 5, name:'Alish', time: '12.23/07:20 PM ', space: 'Green Line'},
                    {id: 6, name:'Leha', time: '12.23/07:20 PM ', space: 'Jazz Line'},
                    {id: 8, name:'Nikita', time: '12.23/07:20 PM ', space: 'Jazz'},
                    {id: 9, name:'Max', time: '12.23/07:20 PM ', space: 'Green Line'},
                    {id: 10, name:'Lera', time: '12.23/07:20 PM ', space: 'Asyl Mura'}
                ],
                spaces: [
                    {id:1, name: 'Green Line', city: 'Almaty', img: '/images/space_1.png'},
                    {id:2, name: 'Jazz', city: 'Almaty', img: '/images/space_2.png'},
                    {id:3, name: 'Asyl Mura', city: 'Almaty', img: '/images/space_1.png'},
                    {id:4, name: 'Grandian', city: 'Nur-Sultan', img: '/images/space_2.png'},
                ]
            }
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
