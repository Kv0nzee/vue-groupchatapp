<template>
  <div>
    <div v-if="login_show_alert">
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p class="reg">{{login_alert_msg}}</p>
    </div>
    
  <vee-form :validation-schema="schema"
    @submit="signup" class="formbox">
        <div class="inputbox">
            <vee-field  class="errormesg" type="email" name="email"/>
            <span class="form_title">Email Address</span>
            <ErrorMessage class="errmesg" name="email"/>
        </div>
        <div class="inputbox">
            <vee-field  class="errormesg" type="password" name="password"/>
            <span class="form_title">Password</span>
            <ErrorMessage class="errmesg" name="password"/>
        </div>
        <button :disabled="login_in_submission" class="conbtn"><p>Signin</p></button>
  </vee-form>
  </div>
</template>

<script>
import {ref} from '@vue/reactivity'
import { useStore } from 'vuex'
import {useRouter} from "vue-router";

export default {
    setup(){
      let router=useRouter();
      const store = useStore();
      const schema = ref({
            email: 'required|min:3|max:100|email',
            password: 'required|min:3|max:100',
      })
      const login_show_alert = ref(false);
      const login_in_submission = ref(false);
      const login_alert_msg = ref('Please wait! We are logging you in.');
      const signup = async (values)  => {
            login_show_alert.value = true;
            login_in_submission.value = true;
            try{
                await store.dispatch('login', values);
            }catch(error){
                login_in_submission.value = false;
                login_alert_msg.value = "Invalid Login";
                return;
            }
            login_alert_msg.value = 'Success! You are now logged in.';
            router.push({name:"Chatroom"})
        }
        return {schema,login_show_alert,login_in_submission,login_alert_msg, signup }
    }

}
</script>

<style>

</style>