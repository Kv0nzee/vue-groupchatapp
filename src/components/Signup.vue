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
        <label
              @drag.prevent.stop="isDragover = true"
              @dragstart.prevent.stop="isDragover = true"
              @dragend.prevent.stop="isDragover = false"
              @dragover.prevent.stop="isDragover = true"
              @dragenter.prevent.stop="isDragover = true"
              @dragleave.prevent.stop="isDragover = false"
              @drop.prevent.stop="upload($event)"
          class="uploadbutton"
          :class="{'uploadphoto' : isDragover}">
          <i class="fas fa-cloud-upload-alt fa-2x" ></i>
          <input type="file" @change="upload($event)" />
        </label>        
        <button :disabled="reg_in_submission" class="conbtn"><p>Signup</p></button>
  </vee-form>
  </div>
</template>

<script>
import {storage} from '@/includes/firebase';
import {ref} from '@vue/reactivity'
import { useStore } from 'vuex'
import {useRouter} from "vue-router";

export default {
    setup(props,context){
       let router=useRouter();
      const store = useStore();
      const schema = ref({
            name: 'required|min:3|max:100|alpha_spaces',
            email: 'required|min:3|max:100|email',
            password: 'required|min:3|max:100',
            confirm_password: 'passwords_mismatch:@password',
      })
      let imageFile = ref('');
      let isDragover = ref(false);
    const upload = (event) => {
        isDragover.value = false;

        const files =  event.dataTransfer?
       [...event.dataTransfer.files] :
       [...event.target.files] ;
        imageFile.value = files[0];
    }

      const reg_show_alert = ref(false);
      const reg_in_submission = ref(false);
      const reg_alert_msg = ref('Please wait! Your account is being created.');
      const signup = async (values)  => {
            reg_show_alert.value = true;
            reg_in_submission.value = true; 
            try{
                if(imageFile.value.type !== "image/jpeg"){
                  reg_in_submission.value = false;
                  reg_alert_msg.value = "Image type must be jpeg/jpg";
                  return;
                }
                else{
                  const storageRef = storage.ref();
                  const imageRef = storageRef.child(`images/${imageFile.value.name}`);
                  const task = imageRef.put(imageFile.value);
                  task.on('state_changed', (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress);
                  }, (error) => {
                    reg_in_submission.value = false;
                    reg_alert_msg.value = "Image upload error";
                    console.log(error)
                  },async () => {
                    let image_url = await task.snapshot.ref.getDownloadURL();
                    let res = await store.dispatch('register',{url:image_url,...values});
                    if(res){
                      console.log('true');
                        context.emit("enterChatroom");
                        location.reload();
                    }
                  }
                  );
                }
                
                
            }catch(error){
                reg_in_submission.value = false;
                reg_alert_msg.value = "An expected error occured. Try again later!.";
                return;
            }
            reg_alert_msg.value = 'Success! Your account has been created.';
            
        }
        return {schema,reg_show_alert,reg_in_submission,reg_alert_msg, signup,imageFile, upload,isDragover }
    }

}
</script>


<style>
.loader {
  margin-left: 20px;
  position: absolute;
  top: 10%;
  right: 10%;
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
.uploadbutton {
    display:flex;
    flex-direction:column;
    width:90%;
    padding:5px 10px;
    background: #3d3d3d;
    border-radius:10px;
    text-align: center;
    transition:0.5s;
}
.uploadbutton i{
    width:100%;
    height:100%;
    margin: auto;
    color:rgb(163, 163, 163);
    transition:0.5s;
}
.uploadbutton:hover i{
        color:rgb(255, 255, 255);
}
.uploadbutton input {
    display:none;
}
.uploadphoto{
    color:rgb(255, 166, 0);
    background:rgb(185, 185, 185);
}
</style>