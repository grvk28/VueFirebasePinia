<template>
  <div>
  <h1>Login Below</h1>
    <div>
        <div :style="{marginLeft:'-140px'}">Email</div>
        <input type="email" v-model="email" />
    </div><br>
    
    <div>
        <div :style="{marginLeft:'-110px'}">Password</div>
        <input type="password" v-model="password" />
    </div>
    <p v-if="errMsg">{{ errMsg }}</p>
    <br> 
    <button @click="submit">Submit</button>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {useRouter} from 'vue-router'

const email = ref("");
const errMsg = ref();
const password = ref("")
const router = useRouter()
const submit = () => {
    signInWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data)=>{
        console.log(data)
        router.push('/')
    })
    .catch((error) => {
        console.log(error.code)
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found";
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                break;
            default:
                errMsg.value = "Email or password was incorrect";
                break;
        }
    })
}
</script>