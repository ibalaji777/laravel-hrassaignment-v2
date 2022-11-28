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



<v-btn color="primary" @click="$store.commit('setDialog',{key:'createLeaveForm',value:true})">
APPLY LEAVE
</v-btn>

<h2 style="text-align:center">LEAVES</h2>
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
methods:{
        select(item){
var $vm=this;
console.log("selected")
$vm.$store.commit('setLeaveForm',item)
$vm.$store.commit('setDialog',{key:'viewLeaveForm',value:true})
    }
},
mounted(){
var $vm=this;
    $vm.$store.dispatch('GET_LEAVEFORMS')
}


}
</script>
<style lang="scss">

</style>
