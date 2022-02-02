<template>
 <div>
    <div class="logo">
      <img alt="brnyr logo" src="../assets/Brnyr-logos_black.png">
    </div>
    <Forms></Forms>
    
  </div>
</template>

<script>
import Forms from '../components/Forms'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Forms,
  }
}
</script>
<style scoped>
  .logo {
    position: absolute;
    top:0;
    left:5%;
    width:200px;
    height:200px;
    }
    .logo img {
      width:100%;
      height:100%;
      }
</style>
