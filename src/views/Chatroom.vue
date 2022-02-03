<template>
<div class="chatroom_container" >
  <Navbar></Navbar>
  <hr>
  <ChatWindow></ChatWindow>
  <hr>
  <ChatForm></ChatForm>
</div>
   
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import ChatForm from '../components/ChatForm'
import Navbar from '../components/Navbar'
import {watch} from 'vue'
import getUser from '../includes/getUser'
import {useRouter} from 'vue-router'
export default {
  components: {
    ChatWindow,
    ChatForm, Navbar },
  setup(){
    let {user} = getUser();
   console.log(user.value);
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
   display:flex;
   flex-direction:column;
   margin:40px auto;
   padding:20px;
   border-radius:20px;
   box-shadow:3px 5px 3px #0000;
   box-shadow: 10px 10px 5px rgba(0,0,0,0.8);
 }  
 ::-webkit-scrollbar {
  width: 0;
}
</style>