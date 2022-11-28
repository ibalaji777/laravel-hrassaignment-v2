<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {


async mounted(){
    var $vm=this;
await   $vm.$store.dispatch("GET_EMPLOYEE")

}
}
</script>
