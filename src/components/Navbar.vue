<template>
  
    <div class="navbar">
      <h1 v-if="user">{{user.displayName}}</h1>
      <h1 v-else>Loading...</h1>
      <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import {auth} from '../includes/firebase';
import getUser from '../includes/getUser'
export default {
    setup(){
        let error=ref(null);
        let {user}=getUser();
        let logout=async()=>{
           try{
            await auth.signOut();
            console.log("user logged out");
           }catch(err){
             error.value=err.message;
               console.log(err.value);
           }
        }
        return {user,logout}
    }
}
</script>

<style scoped>
 .navbar{
   margin:0 auto;
   width:90%;
   height:50px; 
   display: flex;
   padding:10px 20px;
   justify-content: space-between;
 }
 .navbar h1{
   font-size:2em;
   font-weight:800;
 }
 .navbar button{
   outline:none;
   background:transparent;
   border:none;
   width:100px;
   color:#b3b3b3;
   font-size:1.5em;
   cursor: pointer;
   transition:0.7s;
 }
  .navbar button:hover{
    color:#ffffff;
  }
</style>