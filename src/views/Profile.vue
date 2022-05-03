<template>
    <div>
        <div id="profile">
            <div class="float-left" style="text-align:center;width:238px;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Oleksiy_Arestovych_%28cropped%29.jpg/274px-Oleksiy_Arestovych_%28cropped%29.jpg" id="profile-img">
                <button class="btn btn-black" style="width:100%;margin-top:16px;margin-bottom:16px">Set profile photo</button>
                arestovic@gmail.com
            </div>
            <div class="float-right" style="display:flex">
                <div style="margin-right:32px;">
                    Fullname
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99967 0.833496C10.405 0.833496 13.1663 3.59416 13.1663 7.00016C13.1663 10.4055 10.405 13.1668 6.99967 13.1668C3.59367 13.1668 0.833008 10.4055 0.833008 7.00016C0.833008 3.59416 3.59367 0.833496 6.99967 0.833496Z" stroke="#1776BB" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 4.90641C6 4.90641 6.29346 4.00049 7 4.00049C7.70654 4.00049 8 4.30246 8 5.20838C8 6.1143 7 6.41627 7 7.02022C7 7.62417 6.99756 8.00049 6.99756 8.00049" stroke="#1776BB" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.99602 9.5306H7.00268" stroke="#1776BB" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="profile-param">
                        <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="profile-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0C10.9391 0 13.294 2.35402 13.294 5.29105ZM8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z"/>
                        </svg>
                        <div class="profile-icon-text">
                            Арестович
                        </div>
                    </div>
                </div>
                <div style="margin-right:32px;">
                    ID for login
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99967 0.833496C10.405 0.833496 13.1663 3.59416 13.1663 7.00016C13.1663 10.4055 10.405 13.1668 6.99967 13.1668C3.59367 13.1668 0.833008 10.4055 0.833008 7.00016C0.833008 3.59416 3.59367 0.833496 6.99967 0.833496Z" stroke="#1776BB" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 4.90641C6 4.90641 6.29346 4.00049 7 4.00049C7.70654 4.00049 8 4.30246 8 5.20838C8 6.1143 7 6.41627 7 7.02022C7 7.62417 6.99756 8.00049 6.99756 8.00049" stroke="#1776BB" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.99602 9.5306H7.00268" stroke="#1776BB" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="profile-param">
                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="profile-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2199 16.7871C21.8684 23.4338 23.3766 15.7444 27.6097 19.9745C31.6908 24.0544 34.0364 24.8718 28.8657 30.041C28.2181 30.5615 24.103 36.8236 9.64133 22.3659C-4.82214 7.9065 1.4363 3.78724 1.95694 3.13975C7.1401 -2.04375 7.94343 0.315475 12.0245 4.39538C16.2576 8.62733 8.57142 10.1405 15.2199 16.7871Z"/>
                        </svg>
                        <div class="profile-icon-text">
                            +7(707) 900-59-23
                        </div>
                    </div>
                </div>
                <div>
                    Password
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99967 0.833496C10.405 0.833496 13.1663 3.59416 13.1663 7.00016C13.1663 10.4055 10.405 13.1668 6.99967 13.1668C3.59367 13.1668 0.833008 10.4055 0.833008 7.00016C0.833008 3.59416 3.59367 0.833496 6.99967 0.833496Z" stroke="#1776BB" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 4.90641C6 4.90641 6.29346 4.00049 7 4.00049C7.70654 4.00049 8 4.30246 8 5.20838C8 6.1143 7 6.41627 7 7.02022C7 7.62417 6.99756 8.00049 6.99756 8.00049" stroke="#1776BB" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.99602 9.5306H7.00268" stroke="#1776BB" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="profile-param">
                        <svg viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" class="profile-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8513 21.3354C26.5413 21.3354 27.1013 20.7754 27.1013 20.0854V16.9987C27.1013 16.3087 26.5413 15.7487 25.8513 15.7487H16.3647C15.8247 13.9704 14.188 12.6637 12.2347 12.6637C9.84467 12.6637 7.89967 14.6087 7.89967 16.9987C7.89967 19.3904 9.84467 21.3354 12.2347 21.3354C14.188 21.3354 15.8247 20.0287 16.3647 18.2487H19.8847V20.0854C19.8847 20.7754 20.4447 21.3354 21.1347 21.3354C21.8247 21.3354 22.3847 20.7754 22.3847 20.0854V18.2487H24.6013V20.0854C24.6013 20.7754 25.1613 21.3354 25.8513 21.3354ZM10.2763 0.332031H24.7247C30.3713 0.332031 34.1663 4.29536 34.1663 10.1937V23.8054C34.1663 29.7037 30.3713 33.6654 24.723 33.6654H10.2763C4.62801 33.6654 0.833008 29.7037 0.833008 23.8054V10.1937C0.833008 4.29536 4.62801 0.332031 10.2763 0.332031ZM10.3982 17.0002C10.3982 15.9869 11.2232 15.1635 12.2348 15.1635C13.2465 15.1635 14.0715 15.9869 14.0715 17.0002C14.0715 18.0119 13.2465 18.8352 12.2348 18.8352C11.2232 18.8352 10.3982 18.0119 10.3982 17.0002Z" />
                        </svg>
                        <div class="profile-icon-text">
                            *********
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div style="width:100%;margin-bottom:16px;overflow: hidden;">
            <div class="float-left">
                <strong class="profile-text">Saved bank cards</strong>
            </div>
            <div class="float-right">
                <span class="profile-text" style="padding-right:16px;">Add bank card</span>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6605 0H29.3205C36.1205 0 40.0005 3.84 40.0005 10.66V29.34C40.0005 36.12 36.1405 40 29.3405 40H10.6605C3.84049 40 0.000488281 36.12 0.000488281 29.34V10.66C0.000488281 3.84 3.84049 0 10.6605 0ZM21.6405 21.66H27.3205C28.2405 21.64 28.9805 20.9 28.9805 19.98C28.9805 19.06 28.2405 18.32 27.3205 18.32H21.6405V12.68C21.6405 11.76 20.9005 11.02 19.9805 11.02C19.0605 11.02 18.3205 11.76 18.3205 12.68V18.32H12.6605C12.2205 18.32 11.8005 18.5 11.4805 18.8C11.1805 19.12 11.0005 19.538 11.0005 19.98C11.0005 20.9 11.7405 21.64 12.6605 21.66H18.3205V27.32C18.3205 28.24 19.0605 28.98 19.9805 28.98C20.9005 28.98 21.6405 28.24 21.6405 27.32V21.66Z" fill="#333333"/>
                </svg>
            </div>
        </div>
        <div style="position:relative;width:372px">
            <img src="/images/card.png" class="card">
            <img src="/images/master_card.png" style="position:absolute;right:16px;top:24px;">
        </div>-->
    </div>
</template>
<style scoped>
    .profile-text{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #333333;
    }
    .profile-icon-text{
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: #666666;

    }
    .profile-icon{
        width: 33px;
        height: 33px;
        margin-bottom: 16px;
    }
    .profile-icon path{
        fill:#666666;
    }
    .profile-param{
        width:154px;
        height: 154px;
        background: #F2F2F2;
        border: 1px solid #F2F2F2;
        box-sizing: border-box;
        border-radius: 8px;
        margin-top: 16px;
        padding-top: 48px;
        text-align:center;
    }
    #profile-img{
        border-radius: 50%;
        width: 84px;
        height: 84px;
    }
    #profile{
        background: #F8F8F8;
        border-radius: 16px;
        padding: 40px 60px 40px 32px;
        overflow: hidden;
        margin-bottom: 48px;
    }
</style>
