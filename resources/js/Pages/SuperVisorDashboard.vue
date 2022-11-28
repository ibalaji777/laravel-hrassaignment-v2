<template>
    <div style="padding:10px">

<div style="display:flex">
<v-card class="statusCard" color="primary">
<span>
    <div> Pending </div>
    <div>{{status.pending}}</div>

  </span>
</v-card>
<v-card class="statusCard" color="primary">
<span>
    <div> Rejected </div>
    <div>{{status.rejected}}</div>

  </span>


</v-card>
<v-card class="statusCard" color="primary">
<span>
    <div> Approved </div>
    <div>{{status.approved}}</div>


 </span>
</v-card>

</div>

<h2 style="text-align:center;margin: 25px;">LEAVES</h2>
 <v-data-table
    dense
    :headers="leaveFormHeader"
    @click:row="select"
    :items="$store.state.db.leaveForms"
    item-key="name"
    class="elevation-1"
  ></v-data-table>


        <create-leave-dialog></create-leave-dialog>
    </div>
</template>
<script>
export default {

data(){
    return {
leaveFormHeader: [
               { text: 'EMPLOYEE NAME', value: 'employee_name' },
        { text: 'APPROVER NAME', value: 'approver_name' },
       { text: 'FROM DATE', value: 'leave_from_date' },
        { text: 'TO DATE', value: 'leave_to_date' },
        { text: 'STATUS', value: 'status' },
        { text: 'SUBJECT', value: 'subject' },
        { text: 'ACTION', value: 'action' },
      ],
    }
},

computed:{

status(){
var $vm=this;
    return {
        pending:_.filter($vm.$store.state.db.leaveForms,(x)=>x.status=='PENDING').length,
        rejected:_.filter($vm.$store.state.db.leaveForms,(x)=>x.status=='REJECTED').length,
        approved:_.filter($vm.$store.state.db.leaveForms,(x)=>x.status=='APPROVED').length
    }
}

},
mounted(){
var $vm=this;
    $vm.$store.dispatch('GET_LEAVEFORMS')
},
methods:{
    select(item){
var $vm=this;
console.log("selected")
$vm.$store.commit('setLeaveForm',item)
$vm.$store.commit('setDialog',{key:'viewLeaveForm',value:true})



    }
}

}
</script>
<style >
.statusCard{
    position: relative;
    color: white !important;
    height: 109px;
    width: 130px;
    margin:4px;

}
.statusCard span{
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    text-align: center;

}
</style>
