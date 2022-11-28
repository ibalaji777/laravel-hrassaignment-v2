

const mutations={
setDialog(state,payload){
    console.log("trigggered")
    state.dialog[payload.key]=payload.value
},
SET_EMPLOYEE(state,result){
    state.db.employee=result
},
SET_LEAVEFORM(state,result){
    state.db.leaveForms=result
}
,
SET_LOGIN(state,result){
    console.log(result)
const {
    id,
    phone,
    email,
    password,
    role
}=result;

    state.logged.id=id;
    state.logged.phone=phone;
    state.logged.email=email;
    state.logged.password=password;
    state.logged.role=role;
},
SET_LOGOUT(state,result){
    state.logged.id="";
    state.logged.phone="";
    state.logged.email="";
    state.logged.password="";
    state.logged.role="";
},
setLeaveForm(state,payload){

    state.selected_form=payload;
}


}

export default mutations;
