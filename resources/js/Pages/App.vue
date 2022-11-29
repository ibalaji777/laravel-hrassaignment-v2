<template>
    <div>
<v-app-bar

v-if="!['emprole','login'].includes($route.name)"
      color="deep-purple accent-4"
      dark
      scroll-target="#scrolling-techniques-6"
    >
      <v-toolbar-title>Leave Management</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn v-if="$store.state.logged.id!=''" @click="logout">Logout</v-btn>

    </v-app-bar>

        <router-view></router-view>
        <view-leave-form></view-leave-form>

    </div>
</template>
<script>
import axios from 'axios'
export default {


async mounted(){
    var $vm=this;
await   $vm.$store.dispatch("GET_EMPLOYEE")

axios.defaults.headers.common['username'] = $vm.$store.state.logged.email;
axios.defaults.headers.common['password'] = $vm.$store.state.logged.password;


},
methods:{

    logout(){
        var $vm=this;
        this.$store.commit('SET_LOGOUT')
        $vm.$router.push({name:'emprole'})
    }
}
}
</script>
