<template>
 <v-card class="loginContainer">
    <h3>SIGNIN</h3>
<v-text-field v-model="user.username" outlined label="Email/Phone"></v-text-field>
<v-text-field  v-model="user.password" outlined type="password" label="Password"></v-text-field>
<v-btn @click="login" color="primary">Login</v-btn>

    </v-card>
</template>
<script>

import axios from 'axios'
import _ from 'lodash'
function initialState(){
    return {
user:{
    username:'',
    password:''
}
    }
}
export default {
data(){
    return initialState()
},
methods:{
async    login(){
var $vm=this;

var result=await $vm.$store.dispatch('LOGIN',_.cloneDeep($vm.user))

axios.defaults.headers.common['username'] = $vm.$store.state.logged.email;
axios.defaults.headers.common['password'] = $vm.$store.state.logged.password;


if(result.data.status){
    $vm.$alert("Successfully Logged in");
    $vm.user=initialState().user
}


if($vm.$store.state.logged.role=='STAFF')
{
$vm.$router.push({name:'emp-dashboard'})
}

if($vm.$store.state.logged.role=='SUPERVISOR')
{
$vm.$router.push({name:'supervisor-dashboard'})
}

if($vm.$store.state.logged.role=='HR')
{
$vm.$router.push({name:'hr-dashboard'})

}

    }
}
}
</script>
<style>
.loginContainer{
    position: absolute;
    flex-direction: column;
    display: flex;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-51%);
    width: 350px;
    padding: 50px 14px;
}
</style>
