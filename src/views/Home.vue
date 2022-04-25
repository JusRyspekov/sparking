<template>
  <div>
    <div class="card-list">
      <div class="card-list-header">
        <div class="card-list-name">
          My cars
        </div>
        <div class="card-list-add">
          Add my car
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6605 0H29.3205C36.1205 0 40.0005 3.84 40.0005 10.66V29.34C40.0005 36.12 36.1405 40 29.3405 40H10.6605C3.84049 40 0.000488281 36.12 0.000488281 29.34V10.66C0.000488281 3.84 3.84049 0 10.6605 0ZM21.6405 21.66H27.3205C28.2405 21.64 28.9805 20.9 28.9805 19.98C28.9805 19.06 28.2405 18.32 27.3205 18.32H21.6405V12.68C21.6405 11.76 20.9005 11.02 19.9805 11.02C19.0605 11.02 18.3205 11.76 18.3205 12.68V18.32H12.6605C12.2205 18.32 11.8005 18.5 11.4805 18.8C11.1805 19.12 11.0005 19.538 11.0005 19.98C11.0005 20.9 11.7405 21.64 12.6605 21.66H18.3205V27.32C18.3205 28.24 19.0605 28.98 19.9805 28.98C20.9005 28.98 21.6405 28.24 21.6405 27.32V21.66Z" fill="#333333"/>
          </svg>
        </div>
      </div>
      <div class="card-slider">
        <div class="card-car card-car-activated">
            <img src="/images/car.png" class="card-car-img">
            <div class="card-car-name"> my car </div>
            <div class="card-car-number">AAA00102</div>
            <div class="card-car-status">Activated</div>
        </div>
        <div class="card-car card-car-activated">
            <img src="/images/car.png" class="card-car-img">
            <div class="card-car-name"> Zhusan </div>
            <div class="card-car-number">AAA00102</div>
            <div class="card-car-status">Activated</div>
        </div>
        <div class="card-car card-car-deactivated">
            <img src="/images/car.png" class="card-car-img">
            <div class="card-car-name"> Leha</div>
            <div class="card-car-number">AAA00102</div>
            <div class="card-car-status">Deactivated</div>
        </div>
        <div class="card-car card-car-deactivated">
            <img src="/images/car.png" class="card-car-img">
            <div class="card-car-name"> Leha</div>
            <div class="card-car-number">AAA00102</div>
            <div class="card-car-status">Deactivated</div>
        </div>
        <div class="card-car">
        </div>
        <div class="card-car">
        </div>
        <div class="card-car">
        </div>
      </div>
    </div>
    <div class="card-list">
      <div class="card-list-header">
        <div class="card-list-name">
          My parking spaces
        </div>
        <div class="card-list-add">
          Add my space
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6605 0H29.3205C36.1205 0 40.0005 3.84 40.0005 10.66V29.34C40.0005 36.12 36.1405 40 29.3405 40H10.6605C3.84049 40 0.000488281 36.12 0.000488281 29.34V10.66C0.000488281 3.84 3.84049 0 10.6605 0ZM21.6405 21.66H27.3205C28.2405 21.64 28.9805 20.9 28.9805 19.98C28.9805 19.06 28.2405 18.32 27.3205 18.32H21.6405V12.68C21.6405 11.76 20.9005 11.02 19.9805 11.02C19.0605 11.02 18.3205 11.76 18.3205 12.68V18.32H12.6605C12.2205 18.32 11.8005 18.5 11.4805 18.8C11.1805 19.12 11.0005 19.538 11.0005 19.98C11.0005 20.9 11.7405 21.64 12.6605 21.66H18.3205V27.32C18.3205 28.24 19.0605 28.98 19.9805 28.98C20.9005 28.98 21.6405 28.24 21.6405 27.32V21.66Z" fill="#333333"/>
          </svg>
        </div>
      </div>
      <div class="card-slider">
        <div class="card-space" style="background: url('/images/space_1.png');">
          <div class="card-space-number">A-05</div>
          <div class="card-space-name">Green line</div>
          <div class="card-space-status">EXPIRES</div>
          <div class="card-space-date">24 дня - 03:23:56</div>
        </div>
        <div class="card-space" style="background: url('/images/space_2.png');">
          <div class="card-space-number">A-05</div>
          <div class="card-space-name">Green line</div>
          <div class="card-space-status">EXPIRES</div>
          <div class="card-space-date">24 дня - 03:23:56</div>
        </div>
        <div class="card-space">
        </div>
        <div class="card-space">
        </div>
        <div class="card-space">
        </div>
        <div class="card-space">
        </div>
        <div class="card-space">
        </div>
      </div>
    </div>
    <div class="advertising-slider">
      <div class="advertising-slide">
        <img src="/images/slide.png" class="advertising-slide-img">
      </div>
    </div>
  </div>
</template>

<style>
  .advertising-slide-img{
    width:100%;
    height:271px;
    overflow: hidden;
  }
  .advertising-slide{
    width: 100%;
  }
  .advertising-slider{
    width: 100%;
    position:relative;
  }
  .card-space-date{
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }
  .card-space-status{
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }
  .card-space-name{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 64px;
  }
  .card-space-number{
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 4px;
  }
  .card-space{
    padding: 32px 0 32px 0;
    border-radius:8px;
    margin: 0 8px 0 8px;
    width: 14%;
    color: #FFFFFF;
    background: #F8F8F8;
    text-align:center;
  }
  .card-list{
    margin-bottom: 48px;
  }
  .card-car-status{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
  }
  .card-car-number{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-bottom:24px;
  }
  .card-slider{
    padding-top: 32px;
    display:flex;
    width: calc(100% + 16px);
    left: -8px;
    right: -8px;
    position: relative;
  }
  .card-car-img{
    width: 32px;
    margin-bottom: 8px;
  }
  .card-car-name{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 8px;

    color: #FFFFFF;
  }
  .card-car{
    padding: 32px 0 32px 0;
    border-radius:8px;
    background:#F8F8F8;
    margin: 0 8px 0 8px;
    width: 14%;
    text-align:center;
  }
  .card-car-activated{
    background:#51A4F1;
  }
  .card-car-deactivated{
    background: #B5D7F5;
  }
  .card-list-header{
    width: 100%;
  }
  .card-list-add{
    float: right;
    display: table-cell;
    vertical-align: middle ;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */


    color: #333333;
  }
  .card-list-name{
    float:left;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */


    color: #333333;

  }
</style>
