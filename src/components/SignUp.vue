<template>
  <div>
  <h1>Please Register First</h1>
    <div>
        <div :style="{marginLeft:'-140px'}">Name</div>
        <input type="text" v-model="name" />
    </div><br>
    <div>
        <div :style="{marginLeft:'-140px'}">Email</div>
        <input type="email" v-model="email" />
    </div><br>
    <div>
        <div :style="{marginLeft:'-110px'}">Password</div>
        <input type="password" v-model="password" />
    </div><br>

    <button @click="submit">Submit</button>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useRouter} from 'vue-router'

const email = ref("");
const name = ref("");
const password = ref("")
const router = useRouter()
const submit = () => {
    createUserWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data)=>{
        console.log(data)
        router.push('/')
    })
}
</script>