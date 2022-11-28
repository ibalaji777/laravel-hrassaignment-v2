<template>
    <div style="padding:10px">
{{$store.state.dialog.createLeaveForm}}
<v-btn color="primary" @click="$store.commit('setDialog',{key:'createLeaveForm',value:true})">
APPLY LEAVE
</v-btn>

<h2 style="text-align:center">LEAVES</h2>
 <v-data-table
    dense
    :headers="leaveFormHeader"
    :items="$store.state.db.employee"
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
        { text: 'FROM DATE', value: 'from_date' },
        { text: 'TO DATE', value: 'to_date' },
        { text: 'STATUS', value: 'status' },
        { text: 'REMARKS', value: 'remarks' },
      ],
    }
}


}
</script>
<style lang="scss">

</style>
