<template>
    <div style="padding:10px">
<h2 style="text-align:center">HR DASHBOARD</h2>
<v-btn color="primary" @click="$store.commit('setDialog',{key:'createUser',value:true})">
Create Employee
</v-btn>
<!-- {{$store.state.db.employee}} -->
<!-- {{$store.state}} -->

<h2 style="text-align:center">EMPLOYEES</h2>
 <v-data-table
    dense
    :headers="employeeHeader"
    :items="$store.state.db.employee"
    item-key="id"
    class="elevation-1"
  ></v-data-table>


        <create-user-dialog></create-user-dialog>
    </div>
</template>
<script>
export default {

data(){
    return {
 employeeHeader: [
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Role', value: 'role' },
        { text: 'Phone', value: 'phone' },
        { text: 'Password', value: 'password' },
      ],

   }
}


}
</script>
<style lang="scss">

</style>
