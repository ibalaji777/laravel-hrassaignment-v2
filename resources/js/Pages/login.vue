<template>
 <v-card class="loginContainer">
<v-text-field v-model="user.username" outlined label="Email/Phone"></v-text-field>
<v-text-field  v-model="user.password" outlined type="password" label="Password"></v-text-field>
<v-btn @click="login" color="primary">Login</v-btn>

    </v-card>
</template>
<script>
export default {
data(){
    return{
user:{
    username:'',
    password:''
}
    }
},
methods:{
async    login(){
var $vm=this;
await $vm.$store.dispatch('LOGIN',$vm.user)


if($vm.$store.state.logged.role=='STAFF')
{
$vm.$router.push({name:'emp-dashboard'})
}

if($vm.$store.state.logged.role=='SUPPERVISOR')
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
    width: 40vw;
    padding: 50px 14px;
}
</style>
