<template>
  <div class="chatwindow_container">
       <div>
          <div class="mesg">
            <span>1hours</span>
            <div class="mes">
                <img src="https://ishadeed.com/assets/min-max/ch-unit.png" alt="">
                <p>Kaung : <span>blah blah</span></p></div>
           </div>
           <div class="mesg">
            <span>1hours</span>
                <div class="mes">
                    <img src="https://ishadeed.com/assets/min-max/ch-unit.png" alt="">
                    <p>Kaung : <span>blah blah</span></p>
                </div>
           </div>
           
            <div class="mesg fright">
                <span>1hours</span>
                <div class="mes">
                    <p><span>blah blah</span> : Kaung</p>
                    <img src="https://ishadeed.com/assets/min-max/ch-unit.png" alt="">
                </div>
            </div>
        </div>
        
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.chatwindow_container{
    width:100%;
    height:550px;
    overflow: scroll;
    overflow-x: hidden;
    margin: 0 auto;
    margin-top:10px;
}
.mesg{
    max-width:500px;
    padding:10px 0;
    margin:0 10px;
}
.mes{
    display: flex;
    margin-top:10px;
}
.mes img{
    width:40px;
    height:40px;
    border-radius:50%;
    margin:0 10px;
}
.mes p{
    font-weight:800;
    font-size:1.3em;
}
.mes span{
    font-size:0.8em;
    font-weight:400;
}
.fright{
    float:right;
    text-align:right
}

</style>