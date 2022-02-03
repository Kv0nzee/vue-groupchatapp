<template>
    <section>
            <div class="container">
                <div class="contactinfo">
                    <div class="midtext">
                        Welcome From Brnyr
                    </div>
                    <div class="footer">
                        <img alt="brnyr logo" src="../assets/Brnyr-logos_black.png">
                        <span v-if="signin" @click.prevent="signin = !signin">Not a member signup</span>
                        <span v-else @click.prevent="signin = !signin">Already a member signin</span>
                    </div>
                </div> 
                <div class="contactform">
                    <h2 v-if="signin">Sign In</h2>
                    <h2 v-else>Sign Up</h2>
                    <Signin v-if="signin"></Signin>
                    <Signup @enterChatroom="enterChatroom" v-else></Signup>
                </div>
                
            </div>
    </section>
</template>

<script>
import Signin from './Signin'
import Signup from './Signup'
import {ref} from '@vue/reactivity'
export default {
  components: {
    Signin, Signup },
    setup(){
        const signin = ref(false);
         let enterChatroom=()=>{
           location.reload();
        }
        return {signin,enterChatroom};
    }
}  
</script>

<style>
section{
  width:1100px;
  height:550px;
  margin:0 auto;
  margin-top:100px;
}
.container{
  position: relative;
  width: 100%; 
  height:100%;
  z-index: 100;
}
.container .contactinfo{
  position:absolute;
  top:10px;
  left:0px;
  width: 45%;
  height:90%;
  top:50px;
  background:linear-gradient(90deg,rgba(134, 83, 83, 0.5),rgba(138, 138, 138, 0.5)),url("https://bit.ly/3oi8pkx") ;
  background-size:cover;
  background-position:center;
  box-shadow:0 15px 15px rgba(0,0,0,0.5);
}
.container .contactinfo a{
  font-size:2em;
  user-select: none;
  text-decoration:none;
}
.container .contactinfo .midtext{
  position:absolute;
  font-size:2em;
  color:rgb(255,255,255);
  font-weight:700;
  top:35%;
  left:30%;
  opacity:0.6;
  user-select:none;
}  
.container .contactinfo .midtext:before{
  content: '... to continue access';
  position: absolute;
  font-size: 20px;
  bottom:-70px;
  left:100px;
  width:250px;
}
.container .contactinfo .midtext:hover{
  opacity:0.8;
}
.footer{
  position: absolute;
  bottom:0;
  cursor:pointer;
  opacity:0.6;
  user-select:none;
  width:100px;
  height:100px;
}
.footer img{
    width:100%;
    height:100%;
}
.footer span{
    position: absolute;
    bottom:-30%;
    left:0;
    transition: 0.5s;
    width:300px;
}
.footer:hover span{
    color: #000000;
}
.contactform{
  position:absolute;
  top:10px;
  left:45%;
  width: 55%;
  height:90%;
  top:50px;
  background:#fff ;
  background-size:cover;
  box-shadow:0 15px 15px rgba(0,0,0,0.5);
  border-radius:3px;
}
.contactform h2{
  margin-left:35px;
  margin-top:10px;
  font-size: 2em;
  font-weight: 700;
  font-style: bold;
}
.formbox{
  position: relative;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  flex-wrap:wrap;
  padding-top:15px;
  margin:0 10px;
}
.inputbox{
  margin:10px 20px;
  width:100%;
  height:50px;
  position: relative;
}
.inputbox input{
  width:90% !important;
  padding:5px 0;
  font-size:18px;
  border:none;
  border-bottom: 2px solid ;
  border-image: linear-gradient(90deg,#a81c1c,#1a5e99) 90;
  border-radius: 10px;
  outline:none;
}
.inputbox .form_title{
  position:absolute;
  left:10px;
  padding:4px 0;
  font-style: 18px;
  font-weight: 300;
  color:#1a5e99;
  transition:0.5s;
  pointer-events: none;
  font-size:18px;
}
.inputbox input:focus ~ .form_title,
.inputbox input:valid ~ .form_title{
  transform:translateY(-25px);
  font-size:19px;
  font-weight: 400;
  letter-spacing:1px;
  color:#1c54a8;
}
.errmesg{
  display:block;
  padding:4px 0;
  font-style: 10px;
  font-weight: 300;
  color:rgb(221, 144, 21);
  transition:0.5s;
  pointer-events: none;
  font-size:10px;
}
.conbtn{
  width:50%;
  height:45px;
  margin: 20px auto;
  outline:none;
  border:none;
  background:#3d3d3d;
  z-index: 1100;
  transition:0.7s;
  border-radius: 10px;
}
.conbtn p{
  color:rgb(212, 212, 212);
  opacity:0.6;
  transition:0.7s;
}
.conbtn:hover p{
  color:rgb(255, 255, 255);
}


@media (max-width:767px)
{
  .container .contactinfo{
    display:none;
  }
  .container .contactform{
    width:100%;
    left:0;
  }
}
</style>