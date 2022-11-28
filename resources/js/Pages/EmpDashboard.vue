<template>
    <div style="padding:10px">

<v-btn color="primary" @click="$store.commit('setDialog',{key:'createLeaveForm',value:true})">
APPLY LEAVE
</v-btn>

<h2 style="text-align:center">LEAVES</h2>
 <v-data-table
    dense
    :headers="leaveFormHeader"
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
        { text: 'FROM DATE', value: 'leave_from_date' },
        { text: 'TO DATE', value: 'leave_to_date' },
        { text: 'STATUS', value: 'status' },
        { text: 'SUBJECT', value: 'subject' },
        { text: 'REMARKS', value: 'remarks' },
      ],
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
