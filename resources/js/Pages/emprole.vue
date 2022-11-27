<template>
    <div class="roleContainer">

        <div @click="$router.push({name:'login',params:{role:role.value}})"  v-for="(role,index) in roles" :key="'role'+index">
            <span> {{role.title}}</span>
        </div>
    </div>
</template>
<script>
export default {

data(){
    return {

        roles:[
            {
                title:'Staff',
                value:'STAFF'
            },
            {
                title:'SUPER VISOR',
                value:'SUPERVISOR'
            },
                   {
                title:'HR',
                value:'hr'
            }
        ]
    }
}

}
</script>
<style>
.roleContainer{
    display: flex;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.roleContainer > div{
    position: relative;
    width: 170px;
    height: 140px;
    margin: 2px;
    cursor: pointer;
}
.roleContainer > div:nth-child(even){
  background: #16522E;
}
.roleContainer > div:nth-child(odd){
  background: #40807F;
}

.roleContainer > div > span{
     position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    color:white;
    font-weight: 800;

}

</style>
