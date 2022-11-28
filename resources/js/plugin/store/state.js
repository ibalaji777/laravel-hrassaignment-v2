const state={

 dialog:{
    createUser:false,
    createLeaveForm:false,
    viewLeaveForm:false,
    },
db:{
employee:[],
leaveForms:[]
},

selected_form:{
    id:'',
employee_name:'',
approver_name:'',
subject:'',
remarks:''
},
logged:{
    id:'',
    phone:'',
    email:'',
    password:'',
    role:'',
}
}

export default state;
