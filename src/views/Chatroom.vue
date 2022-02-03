<template>
<div class="chatroom_container" >
  <Navbar></Navbar>
  <hr>
</div>
   
</template>

<script>
import Navbar from '../components/Navbar'
import {watch} from 'vue'
import getUser from '../includes/getUser'
import {useRouter} from 'vue-router'
export default {
  components: { Navbar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user, () => {
      if(!user.value){
        router.push('/');
      }
    })
  }
}
</script>

<style scoped>
 .chatroom_container{
   margin:auto;
   background:#3D3D3D;
   color:#E5E5E5;
   width:1100px;
   height:650px;
   display:flex;
   flex-direction:column;
   margin:50px auto;
   padding:20px;
   border-radius:20px;
   box-shadow:3px 5px 3px #0000;
   box-shadow: 10px 10px 5px rgba(0,0,0,0.8);
 }  
</style>