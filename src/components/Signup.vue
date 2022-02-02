<template>
  <div>
    <div v-if="reg_show_alert">
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p class="reg">{{reg_alert_msg}}</p>
    </div>
    
  <vee-form :validation-schema="schema"
    @submit="signup" class="formbox">
        <div class="inputbox">
            <vee-field class="errormesg" type="text" name="name"/>
            <span class="form_title">User Name</span>
            <ErrorMessage class="errmesg" name="name"/>
        </div>
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
        <div class="inputbox">
            <vee-field type="password" name="confirm_password" class="errormesg"/>
            <span class="form_title">Confirmed Password</span>
           <ErrorMessage class="errmesg" name="confirm_password"/>
        </div>
        <button :disabled="reg_in_submission" class="conbtn"><p>Signup</p></button>
  </vee-form>
  </div>
</template>

<script>
import {ref} from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
    setup(){
      const store = useStore();
      const schema = ref({
            name: 'required|min:3|max:100|alpha_spaces',
            email: 'required|min:3|max:100|email',
            password: 'required|min:3|max:100',
            confirm_password: 'passwords_mismatch:@password',
      })
      const reg_show_alert = ref(false);
      const reg_in_submission = ref(false);
      const reg_alert_msg = ref('Please wait! Your account is being created.');
      const signup = async (values)  => {
            reg_show_alert.value = true;
            reg_in_submission.value = true; 
            try{
                await store.dispatch('register', values);
            }catch(error){
                reg_in_submission.value = false;
                reg_alert_msg.value = "An expected error occured. Try again later!.";
                return;
            }
            reg_alert_msg.value = 'Success! Your account has been created.';
        }
        return {schema,reg_show_alert,reg_in_submission,reg_alert_msg, signup }
    }

}
</script>


<style>
.loader {
  margin-left: 20px;
  position: relative;
  display: flex;
  background: white;
  box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);
}

.loader span {
  display: block;
  width: 20px;
  height: 20px;
  background: #eee;
  border-radius: 50%;
  margin: 0 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

.loader span:nth-child(2) {
  background: #f07e6e;
}

.loader span:nth-child(3) {
  background: #84cdfa;
}

.loader span:nth-child(4) {
  background: #5ad1cd;
}

.loader span:not(:last-child) {
  animation: animate 1.5s linear infinite;
}

@keyframes animate {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(30px);
  }
}

.loader span:last-child {
  animation: jump 1.5s ease-in-out infinite;
}

@keyframes jump {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(10px, -10px);
  }
  20% {
    transform: translate(20px, 10px);
  }
  30% {
    transform: translate(30px, -50px);
  }
  70% {
    transform: translate(-150px, -50px);
  }
  80% {
    transform: translate(-140px, 10px);
  }
  90% {
    transform: translate(-130px, -10px);
  }
  100% {
    transform: translate(-120px, 0);
  }
}

</style>