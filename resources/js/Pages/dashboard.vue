<template>
    <div>

<v-btn color="primary" @click="$store.commit('setDialog',{key:'createUser',value:true})">
s    Create Employee
</v-btn>

{{$store.state}}
 <v-data-table
    dense
    :headers="employeeHeader"
    :items="items"
    item-key="name"
    class="elevation-1"
  ></v-data-table>


        <create-user-dialog></create-user-dialog>
    </div>
</template>
<script>
export default {

data(){
    return {


items:[{name:'adf'}],
 employeeHeader: [
        { text: 'Emp ID ', value: 'empid' },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
        { text: 'Password', value: 'password' },
      ],

//  headers: [
//         { text: 'Emp ID ', value: 'empid' },
//         { text: 'Name', value: 'name' },
//         { text: 'Email', value: 'email' },
//         { text: 'Phone', value: 'phone' },
//         { text: 'action', value: 'actions' },
//       ],
    }
}


}
</script>
<style lang="scss">

</style>
