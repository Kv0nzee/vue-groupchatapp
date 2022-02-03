<template>
   <form>
        <textarea
         placeholder="tips: hit enter to send" 
         v-model="message"
         @keypress.enter="handleSubmit"
         ></textarea>
    </form>
</template>

<script>
import { ref  } from 'vue';
import {db} from "../includes/firebase";
import getUser from '../includes/getUser';
import {timestamp} from "../includes/firebase";
export default {
    setup(){
        let message=ref("");
        let {user}=getUser();

        let handleSubmit = async () => {
            let chat = {
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp(),
                profile:user.value.photoURL
            }
            try{
                message.value = "";
                await db.collection("messages").add(chat);
            }catch(err){
                 console.log(error);
            }
        }

        return {message,handleSubmit}
    }
}
</script>

<style scoped>
 form textarea {
    margin-top:10px;
     width:100%;
     max-width:100%;
     max-height:100px;
     outline:none;
     background-color:transparent;
     border-color:transparent;
     font-size:1.4em;
     color:rgb(255, 255, 255);
 }
 ::-webkit-scrollbar {
  width: 0;
}
</style>