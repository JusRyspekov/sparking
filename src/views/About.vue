<template>
  <div class="container">
    <div class="slider">
      <div class="slider-line">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Oleksiy_Arestovych_%28cropped%29.jpg/274px-Oleksiy_Arestovych_%28cropped%29.jpg" class="slider-img" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Oleksiy_Arestovych_%28cropped%29.jpg/274px-Oleksiy_Arestovych_%28cropped%29.jpg" class="slider-img" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Oleksiy_Arestovych_%28cropped%29.jpg/274px-Oleksiy_Arestovych_%28cropped%29.jpg" class="slider-img" alt="" />
      </div>
    </div>
    <button class="next">next</button>
    <button class="prev">prev</button>
  </div>
</template>
<style>
  .container{
    width: 100%;
    background: grey;
  }
  .slider{
    width: 100px;
    height: 100px;
    margin: 30px;
    overflow: hidden;
  }
  .slider-line{
    width: 300px;
    height: 100px;
    position:relative;
  }
  .slider-img{
    height: 100px;
    width: 100px;
  }
  button{
    margin: 30px;
  }

</style>
<script>
  let offset = 0;
  const sliderLine = document.querySelector('.slider-line')

  document.querySelector('.next').addEventListener('click', function() {
    offset = offset + 100;
    sliderLine.style.left = -offset + 'px';
  })
</script>
