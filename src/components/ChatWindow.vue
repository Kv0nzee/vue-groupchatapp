<template>
  <div class="chatwindow_container">
       <div class="box-contain" ref="msgBox">
          <div class="mesg"
          v-for="message in formattedMessages" :key="message.id"
          :class="{fright: message.name=== user.displayName }">
          <span class="created_at" >{{message.created_at}}</span>
            <div class="mes" v-if="message.name=== user.displayName">
                <p><span>{{message.message}}</span> : {{message.name}}</p>
                <img :src="message.profile" alt="">
            </div>
            <div  class="mes"  v-else>
                <img :src="message.profile" alt="">
                <p>{{message.name}} : <span>{{message.message}}</span></p>
            </div>
           </div>
           

        </div>
        
      
  </div>
</template>

<script>
import { ref, computed, onUpdated } from 'vue';
import {db} from "../includes/firebase";
import {formatDistanceToNow} from "date-fns";
import getUser from '../includes/getUser'
export default {
    setup(){
      let {user} = getUser();
      let messages=ref([]);
      let msgBox = ref(null);
      //auto scrolling
      onUpdated(() => {
        msgBox.value.scrollTop = msgBox.value.scrollHeight;
      })

      let formattedMessages=computed(()=>{
        return messages.value.map((msg)=>{
            let formatTime=formatDistanceToNow(msg.created_at.toDate())
            return {...msg,created_at:formatTime}// name,msg,created_at:second nano
        })// [{}]
      })
      db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
        let results=[];//this onsnapshot run again and array empty again
        snap.docs.forEach((doc)=>{
          let document={...doc.data(),id:doc.id}
          // console.log(doc.data());
          results.push(document);
        })
          messages.value=results;
      })
      return {messages,formattedMessages, msgBox,user};
    }
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
.box-contain{
    display: flex;
    flex-direction: column;
}
.mesg{
    float:left;
    padding:10px 0;
    margin:0 10px;
    width:300px;
}
.mes{
    margin-top:10px;
}
.mes img{
    width:50px;
    height:50px;
    border-radius:50%;
    margin:0 10px;
    margin-bottom: -15px;
}
.mes p{
    font-weight:800;
    font-size:1.3em;
    display:inline;
}
.mes span{
    font-size:0.8em;
    font-weight:400;
}
.fright{
    float:right;
    text-align:right;
    width:auto;
    align-items:right;
}

</style>