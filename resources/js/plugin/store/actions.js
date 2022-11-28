import axios from 'axios'
var api="http://127.0.0.1:8000/api/"
var create_user=api+'create_user';
var create_leavform=api+'create_leavform';
var get_employee=api+'get_employee';
var get_my_leaveforms=api+'get_my_leaveform';
var get_leaveforms=api+'get_leaveform';
var emp_login=api+'emp_login'
const actions={

async  CREATE_USER(context,payload){
var result=await axios.post(create_user,{...payload})
actions.GET_EMPLOYEE(context)
return result;

 },
 async  CREATE_LEAVEFORM(context,payload){
var result=await axios.post(create_leavform,{...payload})
actions.GET_LEAVEFORMS(context)
 return result;

     }
,
async  GET_EMPLOYEE(context){
var result=await axios.get(get_employee);
console.log("get employee",result)
context.commit('SET_EMPLOYEE',result.data)
 return result;
 },
async  GET_MY_LEAVEFORMS(context){
var result=await axios.get(get_my_leaveforms);
context.commit('SET_LEAVEFORM',result.data)
 return result;
 },
 async  GET_LEAVEFORMS(context){
    var result=await axios.get(get_leaveforms);
    context.commit('SET_LEAVEFORM',result.data)
     return result;
     }
     ,
async  LOGIN(context,payload){
var result=await axios.post(emp_login,{...payload});
if(result.data.status)
context.commit('SET_LOGIN',result.data.data)
    return result;
    }


}

export default actions;
