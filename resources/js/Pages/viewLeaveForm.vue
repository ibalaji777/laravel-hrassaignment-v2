<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.state.dialog.viewLeaveForm"
      persistent
     fullscreen
    >
      <v-card style="background:grey">
        <v-card-title style="background:aquamarine">
          <span class="text-h5">View Letter</span>
            <v-spacer></v-spacer>
    <v-btn text @click="$store.commit('setDialog',{key:'viewLeaveForm',value:false})">Close</v-btn>

        </v-card-title>

        <v-card-text>

          <v-container>
<v-row>
</v-row>

 <div style="displya:flex;background: ghostwhite;
    margin: 37px 10px;
    padding: 11px;
">
<v-btn style="margin-right:5px;" color="primary" @click="applyLeaveStatus('APPROVED')">Approved</v-btn>
<v-btn color="primary"  @click="applyLeaveStatus('REJECTED')">Rejected</v-btn>
</div>
<div style="    margin-top: 15px;
    background: white;
    height: 500px;
    padding: 10px;
}">

<h4>Name:{{$store.state.selected_form.employee_name}}</h4><br>
<h4>Subjct:{{$store.state.selected_form.subject}}</h4><br>

<h4>Body:</h4>
<br>
{{$store.state.selected_form.body}}
</div>



          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>


  </v-row>
</template>

<script>
import moment from 'moment'
function intialState(){

    return {
        form:{
            employee_name:'',
            subject:'',
            remarks:''
        }
    }
}

export default {

data(){
    return intialState();
},
methods:{
async applyLeaveStatus(action){
var $vm=this;

await $vm.$store.dispatch("APPLY_LEAVE_STATUS",action)
$vm.$store.commit('setDialog',{key:'viewLeaveForm',value:false})


},
async save(){
    var $vm=this;
    $vm.$store.commit('setDialog',{key:'viewLeaveForm',value:false})

var emp_id=$vm.$store.state.logged.id;
var result=await $vm.$store.dispatch("CREATE_LEAVEFORM",{emp_id,...$vm.leaveform})

if(result.data.success){
    this.leaveform=intialState().leaveform;
}
}
}
}
</script>
