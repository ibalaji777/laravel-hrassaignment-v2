<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.state.dialog.createUser"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Create Employee</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Name*"
                  required
                  v-model="user.name"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Phone"
                  persistent-hint
                  required
                  type="number"
                v-model="user.phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
               v-model="user.email"
                ></v-text-field>
              </v-col>
                            <v-col cols="12">
                <v-select
                :items="roles"
               v-model="user.role"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                v-model="user.password"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$store.commit('setDialog',{key:'createUser',value:false})"
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

function intialState(){
    return {
    roles:['STAFF','SUPERVISOR'],
    user:{
        name:'',
        phone:'',
        email:"",
        password:'',
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
if($vm.user.name==""){
$vm.$alert("Please Fill the Name")
    return ;
}
if($vm.user.phone==""){
$vm.$alert("Please Fill the Phone")
    return ;
}

if($vm.user.email==""){
$vm.$alert("Please Fill the Email")
    return ;
}

if($vm.user.password==""){
$vm.$alert("Please Fill the Password")
    return ;
}



var result=await $vm.$store.dispatch("CREATE_USER",$vm.user);
if(result.data.status)
{
    $vm.$store.commit('setDialog',{key:'createUser',value:false})
    $vm.user=intialState().user;
}
else{
    $vm.$alert("Please Fill all the fields")
}
}

}
}
</script>
