<template>
    <div style="padding:32px 32px 32px 0;">
        <div class="sidebar">
            <div style="text-align:center;margin-bottom: 40px">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Oleksiy_Arestovych_%28cropped%29.jpg/274px-Oleksiy_Arestovych_%28cropped%29.jpg" class="sidebar-img">
                <div class="profile-name">Арестович</div>
                <div class="profile-email">arestovic@gmail.com</div>
            </div>
            <button class="btn btn-white" style="display:flex;margin-bottom:56px"><img src="/icons/fire.svg" style="margin-right:8px"> <span class="hot-text"><p> Buy a parking space</p></span></button>
            <router-link to="/home">
                <div class="profile-page-active">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-icon">
                        <path d="M7.13478 18.7733V15.7156C7.13478 14.9351 7.77217 14.3023 8.55844 14.3023H11.4326C11.8102 14.3023 12.1723 14.4512 12.4393 14.7163C12.7063 14.9813 12.8563 15.3408 12.8563 15.7156V18.7733C12.8539 19.0978 12.9821 19.4099 13.2124 19.6402C13.4427 19.8705 13.7561 20 14.0829 20H16.0438C16.9596 20.0023 17.8388 19.6428 18.4872 19.0008C19.1356 18.3588 19.5 17.487 19.5 16.5778V7.86686C19.5 7.13246 19.1721 6.43584 18.6046 5.96467L11.934 0.675869C10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979L1.46701 5.96467C0.872741 6.42195 0.517552 7.12064 0.5 7.86686V16.5689C0.5 18.4639 2.04738 20 3.95617 20H5.87229C6.55123 20 7.103 19.4562 7.10792 18.7822L7.13478 18.7733Z"/>
                    </svg>
                    <div class="page-text">
                        Home
                    </div>
                    <div style="width:80%;text-align:right">
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-pointer">
                            <path d="M1.5 1L8.5 8L1.5 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>
            </router-link>
            <router-link to="/timetracker">
                <div class="profile-page">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C4.48 20 0 15.53 0 10C0 4.48 4.48 0 10 0C15.53 0 20 4.48 20 10C20 15.53 15.53 20 10 20ZM13.19 13.71C13.31 13.78 13.44 13.82 13.58 13.82C13.83 13.82 14.08 13.69 14.22 13.45C14.43 13.1 14.32 12.64 13.96 12.42L10.4 10.3V5.68C10.4 5.26 10.06 4.93 9.65 4.93C9.24 4.93 8.9 5.26 8.9 5.68V10.73C8.9 10.99 9.04 11.23 9.27 11.37L13.19 13.71Z"/>
                    </svg>
                    <div class="page-text">
                        Time tracker
                    </div>
                    <div style="width:20%;text-align:right">
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-pointer">
                            <path d="M1.5 1L8.5 8L1.5 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>
            </router-link>
            <router-link to="/profile">
                <div class="profile-page">
                    <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0C10.9391 0 13.294 2.35402 13.294 5.29105ZM8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z" />
                    </svg>
                    <div class="page-text">
                        Profile
                    </div>
                    <div style="width:80%;text-align:right">
                        <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-pointer">
                            <path d="M1.5 1L8.5 8L1.5 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>
            </router-link>
            <router-link to="/contact">
                <div class="profile-page">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1796 2.41C15.1796 1.08 16.2596 0 17.5896 0C18.9196 0 19.9996 1.08 19.9996 2.41C19.9996 3.74 18.9196 4.82 17.5896 4.82C16.2596 4.82 15.1796 3.74 15.1796 2.41ZM11.3295 12.7593L14.2195 9.0303L14.1795 9.0503C14.3395 8.8303 14.3695 8.5503 14.2595 8.3003C14.1505 8.0503 13.9095 7.8803 13.6505 7.8603C13.3795 7.8303 13.1105 7.9503 12.9495 8.1703L10.5305 11.3003L7.75951 9.1203C7.58951 8.9903 7.38951 8.9393 7.18951 8.9603C6.99051 8.9903 6.81051 9.0993 6.68951 9.2593L3.73051 13.1103L3.66951 13.2003C3.49951 13.5193 3.57951 13.9293 3.87951 14.1503C4.01951 14.2403 4.16951 14.3003 4.33951 14.3003C4.57051 14.3103 4.78951 14.1893 4.92951 14.0003L7.43951 10.7693L10.2895 12.9103L10.3795 12.9693C10.6995 13.1393 11.0995 13.0603 11.3295 12.7593ZM13.4495 1.7803C13.4095 2.0303 13.3895 2.2803 13.3895 2.5303C13.3895 4.7803 15.2095 6.5993 17.4495 6.5993C17.6995 6.5993 17.9395 6.5703 18.1895 6.5303V14.5993C18.1895 17.9903 16.1895 20.0003 12.7895 20.0003H5.40051C1.99951 20.0003 -0.000488281 17.9903 -0.000488281 14.5993V7.2003C-0.000488281 3.8003 1.99951 1.7803 5.40051 1.7803H13.4495Z" />
                    </svg>
                    <div class="page-text">
                        Contact
                    </div>
                    <div style="width:80%;text-align:right">
                        <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-pointer">
                            <path d="M1.5 1L8.5 8L1.5 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>
            </router-link>
            <router-link to="/faq">
                <div class="profile-page">
                    <svg viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81 0H13.191C16.28 0 18 1.78 18 4.83V15.16C18 18.26 16.28 20 13.191 20H4.81C1.77 20 0 18.26 0 15.16V4.83C0 1.78 1.77 0 4.81 0ZM5.08 4.66V4.65H8.069C8.5 4.65 8.85 5 8.85 5.429C8.85 5.87 8.5 6.22 8.069 6.22H5.08C4.649 6.22 4.3 5.87 4.3 5.44C4.3 5.01 4.649 4.66 5.08 4.66ZM5.08 10.74H12.92C13.35 10.74 13.7 10.39 13.7 9.96C13.7 9.53 13.35 9.179 12.92 9.179H5.08C4.649 9.179 4.3 9.53 4.3 9.96C4.3 10.39 4.649 10.74 5.08 10.74ZM5.08 15.31H12.92C13.319 15.27 13.62 14.929 13.62 14.53C13.62 14.12 13.319 13.78 12.92 13.74H5.08C4.78 13.71 4.49 13.85 4.33 14.11C4.17 14.36 4.17 14.69 4.33 14.95C4.49 15.2 4.78 15.35 5.08 15.31Z"/>
                    </svg>
                    <div class="page-text">
                        F.A.Q
                    </div>
                    <div style="width:80%;text-align:right">
                        <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-pointer">
                            <path d="M1.5 1L8.5 8L1.5 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    *{
        text-decoration: none;
    }
    .page-text{
        width:80%;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display:block;
    }
    .profile-page{
        display:flex;
        color:#333333;
        margin-bottom: 32px;
    }
    .profile-page-active{
        display:flex;
        color:#4787F3;
        margin-bottom: 32px;
    }

    .page-icon{
        height:22px;
        width: 22px;
        margin-right: 24px;
    }
    .page-pointer{
        width:17px;
        height: 14px;
    }
    .page-pointer path{
        stroke:#4787F3;
    }
    .page-icon path{
        fill: #4787F3;
    }
    .sidebar{
        border-radius: 16px;
        background: #F8F8F8;
        width: 260px;
        padding: 30px;
    }
    .sidebar-img{
        width: 56px;
        height: 56px;
        border-radius: 16px;
        margin-bottom: 16px;
        overflow: hidden;
    }
    .profile-name{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */

        text-align: center;

        color: #333333;
        margin-bottom: 4px;
    }
    .profile-email{
        font-style: normal;
        font-weight: 420;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height */

        text-align: center;

        color: #999999;
    }
    .hot-text{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        /* identical to box height */

        text-align: center;

        line-height: 32px;
        color: #FC4B05;
        display: table-cell;
        vertical-align: middle 
    }
</style>