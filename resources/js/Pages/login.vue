<template>
    <div class="loginContainer">

<v-text-field outlined label="Email/Phone"></v-text-field>
<v-text-field outlined type="password" label="Email/Phone"></v-text-field>

<v-btn color="primary">Login</v-btn>


    </div>
</template>
<script>
export default {

}
</script>
<style>
.loginContainer{
    position: absolute;
    flex-direction: column;
    display: flex;
    justify-content: center;
    top: 50%;
    background: cornflowerblue;
    left: 50%;
    transform: translate(-50%,-51%);
    width: 40vw;
    padding: 50px 14px;
}
</style>
