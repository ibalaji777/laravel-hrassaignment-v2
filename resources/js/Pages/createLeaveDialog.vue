<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.state.dialog.createLeaveForm"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">APPLY LEAVE</span>
        </v-card-title>
        <v-card-text>
          <v-container>
       <v-row>

          <v-dialog
        ref="leave_from_dialog"
        v-model="modal_1"
        :return-value.sync="leaveform.leave_from_date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="leaveform.leave_from_date"
            label="Picker in dialog"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="leaveform.leave_from_date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal_1 = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$leave_from_dialog.dialog.save(leaveform.leave_from_date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>

          <v-dialog
        ref="leave_from_dialog"
        v-model="modal_2"
        :return-value.sync="leaveform.leave_to_date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="leaveform.leave_to_date"
            label="Picker in dialog"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="leaveform.leave_to_date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal_2 = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$leave_to_dialog.dialog.save(leaveform.leave_to_date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>

       </v-row>

       <v-text-field label="Subject" v-model="leaveform.subject"></v-text-field>

       <v-textarea label="remarks" v-model="leaveform.remarks"></v-textarea>


          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$store.commit('setDialog',{key:'createLeaveForm',value:false})"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-row>
</template>

<script>
import moment from 'moment'
function intialState(){

    return {
        modal_1: false,
         modal_2: false,
    leaveform:{
      leave_from_date:moment().format('YYYY-MM-DD'),
      leave_to_date:moment().format('YYYY-MM-DD'),
      date:moment().format('YYYY-MM-DD'),
      remarks:'',
      subject:'',
        role:'STAFF'
    }
    }
}

export default {

data(){
    return intialState();
},
methods:{

async save(){
    var $vm=this;
    $vm.$store.commit('setDialog',{key:'createLeaveForm',value:false})

var emp_id=$vm.$store.state.logged.id;
var result=await $vm.$store.dispatch("CREATE_LEAVEFORM",{emp_id,...$vm.leaveform})

if(result.data.success){
    this.leaveform=intialState().leaveform;
}
}
}
}
</script>
