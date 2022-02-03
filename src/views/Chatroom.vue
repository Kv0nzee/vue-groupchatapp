<template>
  <div class="container" v-if="users.length > 1">
    <div class="chatroom_container" >
    <Navbar></Navbar>
    <hr>
    <ChatWindow></ChatWindow>
    <hr>
    <ChatForm></ChatForm>
    </div>
    <div class="userlist">
      <h1>User List</h1>
      <hr>
      <div class="user"
      v-for="user in users" :key="user.id">
        <img :src="user.url" alt="">
        <p>{{user.name}}</p>
      </div>
    </div>
  </div>
   <Loader v-else></Loader>
</template>

<script>
import Loader from '../components/Loader'
import { ref} from 'vue';
import {db} from "../includes/firebase";
import ChatWindow from '../components/ChatWindow'
import ChatForm from '../components/ChatForm'
import Navbar from '../components/Navbar'
import {watch} from 'vue'
import getUser from '../includes/getUser'
import {useRouter} from 'vue-router'
export default {
  components: {
    Loader,
    ChatWindow,
    ChatForm, Navbar },
  setup(){
     let users=ref([]);
      db.collection("users").orderBy("name").onSnapshot((snap)=>{
          let results=[];//this onsnapshot run again and array empty again
          snap.docs.forEach((doc)=>{
            let document={...doc.data(),id:doc.id}
            // console.log(doc.data());
            results.push(document);
          })
            users.value=results;
        })

      let {user} = getUser();
      let router = useRouter();
      watch(user, () => {
        if(!user.value){
          router.push('/');
        }
      })
      return {users}
  }
}
</script>

<style scoped>
 .chatroom_container{
   margin:auto;
   background:#3D3D3D;
   color:#E5E5E5;
   width:65%;
   display:flex;
   flex-direction:column;
   margin:40px auto;
   padding:20px;
   border-radius:20px;
   box-shadow:3px 5px 3px #0000;
   box-shadow: 10px 10px 5px rgba(0,0,0,0.8);
 }  
 hr{
   border:2px solid rgba(255, 255, 255, 1);
   background-color: rgba(255, 255, 255, 1);
 }
 ::-webkit-scrollbar {
  width: 0;
}
.userlist{
  width:220px;
  padding:25px;
  height:600px;
  background:#3d3d3d;
  position: fixed;
  left:0;
  top:50px;
  border-radius:0 10px 10px 0;
  overflow:scroll;
  color:#b3b3b3;
}
.userlist h1{
  margin: 10px; 
}
.user{
  display:flex;
  margin: 0 auto;
  margin-top:25px;
}
.user p {
 font-size:1.5em;
}
.user img{
    width:50px;
    height:50px;
    border-radius:50%;
     margin-top: -10px;
     margin-right: 10px;
}
@media (max-width: 1400px) {
  .userlist {
    display:none;
  }
}
</style>