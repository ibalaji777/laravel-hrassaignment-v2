

const mutations={
setDialog(state,payload){
    console.log("trigggered")
    state.dialog[payload.key]=payload.value
}
}

export default mutations;
