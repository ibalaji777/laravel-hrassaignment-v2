<template>
    <div class="colConainer">

<div class="textTitle">
    Leave Management
</div>
<div class="roleContainer">
        <v-card @click="$router.push({name:'login',params:{role:role.value}})"  v-for="(role,index) in roles" :key="'role'+index">
            <span> {{role.title}}</span>
        </v-card>
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
                value:'HR'
            }
        ]
    }
}

}
</script>
<style>
.textTitle{
    text-align: center;
    font-size: 45px;
    font-weight: 600;
}
.colConainer{
    display: flex;
    flex-direction: column;
    position: absolute;
    top:45%;
    left:50%;
    transform: translate(-50%,-50%);

}
.roleContainer{
   display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 70px;
}
.roleContainer > div{
    position: relative;
    width: 170px;
    height: 140px;
    margin: 2px;
    cursor: pointer;
}
.roleContainer > div:nth-child(even){
  /* background: #16522E; */
}
.roleContainer > div:nth-child(odd){
  /* background: #40807F; */
}

.roleContainer > div > span{
     position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    /* color:white; */
    text-align: center;
    font-weight: 800;

}

</style>
